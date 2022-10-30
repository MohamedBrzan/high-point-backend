const AsyncHandler = require('../../middleWare/AsyncHandler');
const Blog = require('../../models/Blog/Blog');

module.exports = AsyncHandler(async (req, res, next) => {
  let blogs = await Blog.find().populate('owner');

  return res.json(blogs);
});
