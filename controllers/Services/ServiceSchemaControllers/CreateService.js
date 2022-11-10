const AsyncHandler = require('../../../middleWare/AsyncHandler');
const ServiceSchema = require('../../../models/Service/Service_Schema');

module.exports = AsyncHandler(async (req, res, next) => {
  const {
    first_title_text,
    last_title_text,
    first_title_text_ar,
    last_title_text_ar,
    head_image,
    first_sub_title_text,
    last_sub_title_text,
    first_sub_title_text_ar,
    last_sub_title_text_ar,
    first_text,
    second_text,
    third_text,
    fourth_text,
    fifth_text,
    sixth_text,
    seventh_text,
    first_text_ar,
    second_text_ar,
    third_text_ar,
    fourth_text_ar,
    fifth_text_ar,
    sixth_text_ar,
    seventh_text_ar,
    intro_text,
    intro_text_ar,
    footer_image,
    first_footer_text,
    last_footer_text,
    first_footer_text_ar,
    last_footer_text_ar,
  } = req.body;

  const sub_title = {
    first_sub_title_text,
    last_sub_title_text,
  };

  const sub_title_ar = {
    first_sub_title_text_ar,
    last_sub_title_text_ar,
  };

  const title = {
    first_title_text,
    last_title_text,
  };

  const title_ar = {
    first_title_text_ar,
    last_title_text_ar,
  };

  const header_text = {
    first_text,
    second_text,
    third_text,
    fourth_text,
    fifth_text,
    sixth_text,
    seventh_text,
  };

  const header_text_ar = {
    first_text_ar,
    second_text_ar,
    third_text_ar,
    fourth_text_ar,
    fifth_text_ar,
    sixth_text_ar,
    seventh_text_ar,
  };

  const footer_text = {
    first_footer_text,
    last_footer_text,
  };

  const footer_text_ar = {
    first_footer_text_ar,
    last_footer_text_ar,
  };

  const new_service_schema = {
    title,
    title_ar,
    head_image,
    sub_title,
    sub_title_ar,
    header_text,
    header_text_ar,
    intro_text,
    intro_text_ar,
    footer_image,
    footer_text,
    footer_text_ar,
  };

  const service = await ServiceSchema.create(new_service_schema);

  return res.json(service);
});
