const { default: mongoose } = require('mongoose');
const AsyncHandler = require('../../middleWare/AsyncHandler');
const ErrorHandler = require('../../middleWare/ErrorHandler');
const Blog = require('../../models/Blog/Blog');

module.exports = AsyncHandler(async (req, res, next) => {
  const { blog_id } = req.params;

  // add this inside your route
  if (!mongoose.Types.ObjectId.isValid(blog_id)) return false;

  const blog = await Blog.findById(blog_id);

  if (!blog) return next(new ErrorHandler(req.t('blog_schema_error'), 404));

  return res.json(blog);
});
