const { default: mongoose } = require('mongoose');
const AsyncHandler = require('../../middleWare/AsyncHandler');
const ErrorHandler = require('../../middleWare/ErrorHandler');
const ApplyJob = require('../../models/ApplyJob/ApplyJob');

module.exports = AsyncHandler(async (req, res, next) => {
  const { apply_job_id } = req.params;

  // add this inside your route
  if (!mongoose.Types.ObjectId.isValid(apply_job_id)) return false;

  const job_applicant = await ApplyJob.findById(apply_job_id);

  if (!job_applicant)
    return next(new ErrorHandler(req.t('job_applicant_schema_error'), 404));

  return res.json(job_applicant);
});
