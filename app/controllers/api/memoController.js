const { memo, memoTag , memoContent,}   = require('../../models');
const { ApiError } = require('../../helpers/errorHandler');

const slug = require('../../utils/creeateSlug')



module.exports = {
    
    async create(req, res) {
        const { title, contents, categoryId, tagsIds } = req.body;
        const inpudata = { title,  category_id: categoryId };
        inpudata.slug = slug(inpudata.title)
        let newMemoId;
        try {
            // Step 1: Create the memo
            const newMemo = await memo.create(inpudata);
            newMemoId = newMemo.id;
            
            if (!newMemo) {
                throw new ApiError('Memo not found', { statusCode: 404 });
            }
            
            // Step 2: Create associated memo tags
            if (tagsIds) {
                const newMemoTags = await Promise.all(
                    tagsIds.map(tagId => memoTag.create({ memo_id: newMemo.id, tag_id: tagId }))
                    );
                    
                    if (!newMemoTags) {
                        throw new ApiError('MemoTag not found', { statusCode: 404 });
                    }
                }
                //  step 3 : pour chaque memo_content  l'ajouter dans la table memo_content
                if(!contents) throw new ApiError('memo must have content', { statusCode: 404 });
                const newMemoContents = await Promise.all(
                    contents.map(item =>memoContent.create({ memo_id: newMemo.id, content: item.content, type_id: item.type_id})
                    )
                    );
                    if (!newMemoContents) {
                        throw new ApiError('MemoContent not found', { statusCode: 404 });
                    }
                    res.status(200).json(newMemo);
                } catch (error) {
                    //si il y a une erreur on supprime le memo
                    if (newMemoId) {
                        await memo.delete(newMemoId);
                    }
                    console.error(error);
                    res.status(500).json({ error: 'Internal Server Error' });
                }
            },
            
    async getOne(req, res) {
                const { id } = req.params;
                const findMemo = await memo.getOneMemo(id);
                res.status(200).json(findMemo);
            },

    async getMemoBySlug(req, res) {
                const { slug } = req.params;
                const findMemo = await memo.getMemoBySlug(slug);
                res.status(200).json(findMemo);
            }
            ,
    async getAll(req, res) {
            
                const memos = await memo.findAll();
                res.status(200).json(memos);
            },
    async getAllMemo(req, res) {
                const response = await memo.getAllMemo();
                const memos = response[0].getallmemos;
                res.status(200).json(memos);
            },
            
    async  update(req, res) {
        const { id } = req.params;
        const { title, contents, categoryId, tagsIds } = req.body;
        const inputdata = { title, category_id: categoryId };

        try {
            const findMemo = await memo.findByPk(id);
            if (!findMemo) throw new ApiError('Memo not found', { statusCode: 404 });

            const existingTags = await memoTag.getMemoTags(findMemo.id);
         

            if (title !== findMemo.title || categoryId !== findMemo.category_id) {
            await memo.update(  id, inputdata );
            }

            if (tagsIds && JSON.stringify(tagsIds) !== JSON.stringify(existingTags)) {
            const tagsToRemove = existingTags.filter(tag => !tagsIds.includes(tag));
            const tagsToAdd = tagsIds.filter(tag => !existingTags.includes(tag));
            await Promise.all(tagsToRemove.map(tag => memoTag.delete(  findMemo.id, tag )));
            await Promise.all(tagsToAdd.map(tag => memoTag.insert( findMemo.id,  tag )));
            }
            

            if (contents && JSON.stringify(contents) !== JSON.stringify(findMemo.contents)) {
                // on supprime tous les memo_content du memo
                await memoContent.deleteByMemoId(id);
                // on ajoute les nouveaux memo_content
                await Promise.all(contents.map(item => memoContent.create({ memo_id: findMemo.id, content: item.content, type_id: item.type_id})));
            }

            res.status(200).json({ message: 'Memo updated successfully' });
        } catch (error) {
            console.error(error);
            res.status(error.statusCode || 500).json({ error: error.message || 'Internal Server Error' });
        }
    },
    async delete(req, res) {
        const {id } = req.params;
        const deletedMemo = await memo.delete(id);
        if(!deletedMemo) throw new ApiError('Memo not found', { statusCode: 404 });
        res.status(200).json({ message: 'Memo deleted' });
    }

};


