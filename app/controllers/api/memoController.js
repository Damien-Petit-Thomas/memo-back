const { memo, memoTag }   = require('../../models');
const { ApiError } = require('../../helpers/errorHandler');


module.exports = {
    async getAll(req, res) {
        const memos = await memo.findAll();
        res.status(200).json(memos);
    },

    async create(req, res) {
        console.log("cpoucouc")
        const { title, content, categoryId, tagsIds } = req.body;
        const impudata = { title, content, category_id: categoryId };

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

            res.status(200).json(newMemo);
        } catch (error) {
      
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
};