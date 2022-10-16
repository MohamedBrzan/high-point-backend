const AsyncHandler = require('../../middleWare/AsyncHandler');
const ErrorHandler = require('../../middleWare/ErrorHandler');
const JobApplicant = require('../../models/JobApplicant/JobApplicant');

module.exports = AsyncHandler(async (req, res, next) => {
  const { job_applicant_id } = req.body;

  let job_applicant = await JobApplicant.findById(job_applicant_id);

  if (!job_applicant)
    return next(
      new ErrorHandler(`${req.t('job_applicant_schema_error')}`, 404)
    );

  job_applicant = await JobApplicant.findByIdAndUpdate(
    job_applicant_id,
    req.body,
    { new: true, runValidators: true }
  );

  return res.json(job_applicant);
});
