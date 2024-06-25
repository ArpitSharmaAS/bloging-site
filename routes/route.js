const express = require('express')
const router = express.Router()
const authorController = require('../controllers/AuthorController')
const blogController = require('../controllers/BlogController')

router.post("/authors", authorController.createAuthor)
router.post("/blog" , blogController.createBlog)
router.get("/allblogs", blogController.allBlogs)

module.exports = router

