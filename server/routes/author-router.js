const express = require('express')

const AuthorCtrl = require('../controllers/author-ctrl')

const router = express.Router()

router.post('/author', AuthorCtrl.createAuthor)
router.put('/author/:id', AuthorCtrl.updateAuthor)
router.delete('/author/:id', AuthorCtrl.deleteAuthor)
router.get('/author/:id', AuthorCtrl.getAuthorById)
router.get('/authors', AuthorCtrl.getAuthors)

module.exports = router