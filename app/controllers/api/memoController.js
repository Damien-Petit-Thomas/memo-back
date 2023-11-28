const { memo, memoTag , memo_content,}   = require('../../models');
const { ApiError } = require('../../helpers/errorHandler');





module.exports = {
    async getAll(req, res) {
        const memos = await memo.findAll();
        res.status(200).json(memos);
    },

    async create(req, res) {
        console.log("cpoucouc")
        const { title, contents, categoryId, tagsIds } = req.body;
        const impudata = { title,  category_id: categoryId };

        try {
            // Step 1: Create the memo
            const newMemo = await memo.create(impudata);

            if (!newMemo) {
                throw new ApiError('Memo not found', { statusCode: 404 });
            }

            // Step 2: Create associated memo tags
            const newMemoTags = await Promise.all(
                tagsIds.map(tagId => memoTag.create({ memo_id: newMemo.id, tag_id: tagId }))
            );

            if (!newMemoTags) {
                throw new ApiError('MemoTag not found', { statusCode: 404 });
            }
            //  step 3 : pour chaque memo_content  l'ajouter dans la table memo_content
            const newMemoContents = await Promise.all(
                contents.map(content => memo_content.create({ memo_id: newMemo.id, content }))
            );
            if (!newMemoContents) {
                throw new ApiError('MemoContent not found', { statusCode: 404 });
            }
            res.status(200).json(newMemo);
        } catch (error) {
      
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },

    async getOne(req, res) {
        const { id } = req.params;
        const findMemo = await memo.findByPk(id);
        if (!findMemo) throw new ApiError('Memo not found', { statusCode: 404 });
        res.status(200).json(findMemo);
    },

    async  update(req, res) {
        const { id } = req.params;
        const { title, contents, categoryId, tagsIds } = req.body;
        const impudata = { title, category_id: categoryId };
        try {
            const findMemo = await memo.findByPk(id);
            if (!findMemo) throw new ApiError('Memo not found', { statusCode: 404 });

            const existingTags = await memo.getMemoTags(findMemo.id);

            if (title !== findMemo.title || categoryId !== findMemo.category_id) {
            await memo.update({ id, ...impudata });
            }

            if (tagsIds && JSON.stringify(tagsIds) !== JSON.stringify(existingTags)) {
            const tagsToRemove = existingTags.filter(tag => !tagsIds.includes(tag.id));
            const tagsToAdd = tagsIds.filter(tagId => !existingTags.map(tag => tag.id).includes(tagId));
            await this.removeTags(findMemo.id, tagsToRemove);
            await this.createMemoTags(findMemo.id, tagsToAdd);
            }

            if (contents && JSON.stringify(contents) !== JSON.stringify(findMemo.contents)) {
            await updateMemoContents(findMemo.id, contents);
            }

            res.status(200).json({ message: 'Memo updated successfully' });
        } catch (error) {
            console.error(error);
            res.status(error.statusCode || 500).json({ error: error.message || 'Internal Server Error' });
        }
    },

    async removeTags(memoId, tagsToRemove) {
        await Promise.all(tagsToRemove.map(tag => memoTag.delete(tag.id)));
    },

    async createMemoTags(memoId, tagsIds) {
        await Promise.all(tagsIds.map(tagId => memoTag.create({ memo_id: memoId, tag_id: tagId })));
    },

};


