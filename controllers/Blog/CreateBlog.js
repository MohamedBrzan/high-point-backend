const AsyncHandler = require('../../middleWare/AsyncHandler');
const Blog = require('../../models/Blog/Blog');

module.exports = AsyncHandler(async (req, res, next) => {
  const {
    title,
    title_ar,
    sub_title,
    sub_title_ar,
    description,
    description_ar,
    sub_description,
    sub_description_ar,
    head_images,
    footer_images,
  } = req.body;

  const blog = await Blog.create({
    title,
    title_ar,
    sub_title,
    sub_title_ar,
    description,
    description_ar,
    sub_description,
    sub_description_ar,
    head_images,
    footer_images,
  });

  return res.json(blog);
});
