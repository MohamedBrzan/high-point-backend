const router = require('express').Router();

const CreateBlog = require('../controllers/Blog/CreateBlog');
const GetBlogById = require('../controllers/Blog/GetBlogById');
const UpdateBlog = require('../controllers/Blog/UpdateBlog');
const DeleteBlog = require('../controllers/Blog/DeleteBlog');

// Get & Post & Put & Delete Blog

router
  .route('/')
  .get(GetBlogById)
  .post(CreateBlog)
  .put(UpdateBlog)
  .delete(DeleteBlog);

module.exports = router;
