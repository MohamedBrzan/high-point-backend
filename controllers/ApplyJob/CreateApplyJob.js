const AsyncHandler = require('../../middleWare/AsyncHandler');
const ApplyJob = require('../../models/ApplyJob/ApplyJob');

module.exports = AsyncHandler(async (req, res, next) => {
  const { name, email, phone, file } = req.body;

  const job_applicant = await ApplyJob.create({
    name,
    email,
    phone,
    file,
  });

  return res.json(job_applicant);
});
