const AsyncHandler = require('../../middleWare/AsyncHandler');
const JobApplicant = require('../../models/JobApplicant/JobApplicant');

module.exports = AsyncHandler(async (req, res, next) => {
  const {
    title,
    title_ar,
    sub_title,
    sub_title_ar,
    name,
    email,
    phone,
    file,
    rule,
    rule_ar,
  } = req.body;

  const job_applicant = await JobApplicant.create({
    title,
    title_ar,
    sub_title,
    sub_title_ar,
    name,
    email,
    phone,
    file,
    rule,
    rule_ar,
  });

  return res.json(job_applicant);
});
