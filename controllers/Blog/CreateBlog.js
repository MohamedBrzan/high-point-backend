const AsyncHandler = require('../../middleWare/AsyncHandler');
const ErrorHandler = require('../../middleWare/ErrorHandler');
const User = require('../../models/User/User');
const Blog = require('../../models/Blog/Blog');

module.exports = AsyncHandler(async (req, res, next) => {
  const {
    card_image,
    title,
    title_ar,
    sub_description,
    sub_description_ar,
    description,
    description_ar,
    head_images,
    footer_images,
  } = req.body;

  const { token } = req.cookies;

  if (!token) return next(new ErrorHandler('token Not Found', 404));

  const blog = await Blog.create({
    owner: req.user.id,
    card_image,
    title,
    title_ar,
    sub_description,
    sub_description_ar,
    description,
    description_ar,
    head_images,
    footer_images,
  });

  return res.json(blog);
});
