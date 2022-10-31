const router = require('express').Router();

const GetApplyJobById = require('../controllers/ApplyJob/GetApplyJobById');
const CreateApplyJob = require('../controllers/ApplyJob/CreateApplyJob');
const UpdateApplyJob = require('../controllers/ApplyJob/UpdateApplyJob');
const DeleteApplyJob = require('../controllers/ApplyJob/DeleteApplyJob');

// Get & Post & Put & Delete Job Applicant

router
  .route('/')
  .get(GetApplyJobById)
  .post(CreateApplyJob)
  .put(UpdateApplyJob)
  .delete(DeleteApplyJob);

module.exports = router;
