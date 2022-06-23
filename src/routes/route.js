const express = require('express')
const router = express.Router()
const authorController = require('../controllers/authorController')
const blogController = require('../controllers/blogController')
const middleware = require('../middlewares/auth')



router.post('/authors',authorController.createAuthor)
router.post('/login',authorController.loginAuthor)
router.post('/blogs',blogController.createBlog)
router.get('/blogs',blogController.getBlogs)
router.put('/blogs/:blogId',blogController.updateBlogs)
router.delete('/blogs/:blogId',blogController.deleteBlogByPathParam)
router.delete('/blogs',blogController.deleteBlogsByQuery)

module.exports=router;
