const mongoose = require('mongoose')
let BookSchema = new mongoose.Schema(
    {
        text: String,
        title: String,
        description: String,
        feature_img: String,
        claps: Number,
        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        comments: [
            {
                author: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'User'
                },
                text: String
            }
        ]
    }
);
BookSchema.methods.addAuthor = function (author_id) {
    this.author = author_id
    return this.save()
}
// const book =mongoose.model('book', BookSchema)

module.exports = mongoose.model('book', BookSchema)