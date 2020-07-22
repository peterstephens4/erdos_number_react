const Author = require('../models/author-model')

createAuthor = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide an author',
        })
    }

    const author = new Author(body)

    if (!author) {
        return res.status(400).json({ success: false, error: err })
    }

    author
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: author._id,
                message: 'Author created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Author not created!',
            })
        })
}

updateAuthor = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Author.findOne({ _id: req.params.id }, (err, author) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Author not found!',
            })
        }
        author.vertex = body.vertex
        author.degree = body.degree
        author.colaborators = body.colaborators
        author.name = body.name
        author.adj = body.adj
        author
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: author._id,
                    message: 'Author updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Author not updated!',
                })
            })
    })
}

deleteAuthor = async (req, res) => {
    await Author.findOneAndDelete({ _id: req.params.id }, (err, author) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!author) {
            return res
                .status(404)
                .json({ success: false, error: `Author not found` })
        }

        return res.status(200).json({ success: true, data: author })
    }).catch(err => console.log(err))
}

getAuthorById = async (req, res) => {
    await Author.findOne({ _id: req.params.id }, (err, author) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!author) {
            return res
                .status(404)
                .json({ success: false, error: `Author not found` })
        }
        return res.status(200).json({ success: true, data: author })
    }).catch(err => console.log(err))
}

getAuthors = async (req, res) => {
    await Author.find({}, (err, authors) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!authors.length) {
            return res
                .status(404)
                .json({ success: false, error: `Author not found!` })
        }
        return res.status(200).json({ success: true, data: authors })
    }).catch(err => console.log(err))
}

module.exports = {
    createAuthor,
    updateAuthor,
    deleteAuthor,
    getAuthors,
    getAuthorById,
}