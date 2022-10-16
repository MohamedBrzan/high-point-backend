const router = require('express').Router();

const GetJobApplicantById = require('../controllers/JobApplicant/GetJobApplicantById');
const CreateJobApplicant = require('../controllers/JobApplicant/CreateJobApplicant');
const UpdateJobApplicant = require('../controllers/JobApplicant/UpdateJobApplicant');
const DeleteJobApplicant = require('../controllers/JobApplicant/DeleteJobApplicant');

// Get & Post & Put & Delete Job Applicant

router
  .route('/')
  .get(GetJobApplicantById)
  .post(CreateJobApplicant)
  .put(UpdateJobApplicant)
  .delete(DeleteJobApplicant);

module.exports = router;
