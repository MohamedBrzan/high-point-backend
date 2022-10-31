const AsyncHandler = require('../../middleWare/AsyncHandler');
const ErrorHandler = require('../../middleWare/ErrorHandler');
const ApplyJob = require('../../models/ApplyJob/ApplyJob');

module.exports = AsyncHandler(async (req, res, next) => {
  const { apply_job_id } = req.params;

  let job_applicant = await ApplyJob.findById(apply_job_id);

  if (!job_applicant)
    return next(new ErrorHandler(req.t('job_applicant_schema_error'), 404));

  job_applicant = await ApplyJob.findByIdAndRemove(apply_job_id);

  return res.json({ message: req.t('job_applicant_schema_deleted') });
});
