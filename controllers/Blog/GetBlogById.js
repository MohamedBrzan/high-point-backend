const AsyncHandler = require('../../middleWare/AsyncHandler');
const ErrorHandler = require('../../middleWare/ErrorHandler');
const Blog = require('../../models/Blog/Blog');

module.exports = AsyncHandler(async (req, res, next) => {
  const { blog_schema_id } = req.body;

  const blog = await Blog.findById(blog_schema_id);

  if (!blog)
    return next(new ErrorHandler(`${req.t('blog_schema_error')}`, 404));

  return res.json(blog);
});
