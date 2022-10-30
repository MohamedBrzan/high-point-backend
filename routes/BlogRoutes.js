const router = require('express').Router();

const IsAuthenticated = require('../middleWare/IsAuthenticated');

const GetAllBlogs = require('../controllers/Blog/GetAllBlogs');

const CreateBlog = require('../controllers/Blog/CreateBlog');
const GetBlogById = require('../controllers/Blog/GetBlogById');
const UpdateBlog = require('../controllers/Blog/UpdateBlog');
const DeleteBlog = require('../controllers/Blog/DeleteBlog');

// Get & Post & Put & Delete Blog

router.route('/').get(GetAllBlogs).post(IsAuthenticated, CreateBlog);

router
  .route('/:blog_id')
  .get(GetBlogById)
  .put(IsAuthenticated, UpdateBlog)
  .delete(IsAuthenticated, DeleteBlog);

module.exports = router;
