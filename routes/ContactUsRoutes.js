const router = require('express').Router();

const GetContactUsById = require('../controllers/Contact_Us/GetContactUsById');
const CreateContactUs = require('../controllers/Contact_Us/CreateContactUs');
const UpdateContactUs = require('../controllers/Contact_Us/UpdateContactUs');
const DeleteContactUs = require('../controllers/Contact_Us/DeleteContactUs');
const AddBranches = require('../controllers/Contact_Us/AddBranches');
const UpdateBranch = require('../controllers/Contact_Us/UpdateBranch');
const DeleteBranch = require('../controllers/Contact_Us/DeleteBranch');

// Get & Post & Put & Delete Contact_Us

router
  .route('/')
  .get(GetContactUsById)
  .post(CreateContactUs)
  .put(UpdateContactUs)
  .delete(DeleteContactUs);

//  Post & Put & Delete Contact_Us Branches

router
  .route('/branches')
  .post(AddBranches)
  .put(UpdateBranch)
  .delete(DeleteBranch);

module.exports = router;
