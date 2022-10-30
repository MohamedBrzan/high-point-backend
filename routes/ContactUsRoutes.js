const router = require('express').Router();

const GetAllContactUs = require('../controllers/Contact_Us/GetAllContactUs');
const GetContactUsById = require('../controllers/Contact_Us/GetContactUsById');
const CreateContactUs = require('../controllers/Contact_Us/CreateContactUs');
const UpdateContactUs = require('../controllers/Contact_Us/UpdateContactUs');
const DeleteContactUs = require('../controllers/Contact_Us/DeleteContactUs');

// Get & Post & Put & Delete Contact_Us

router.route('/').get(GetAllContactUs).post(CreateContactUs);

// Get & Post & Put & Delete Contact_Us

router
  .route('/:contact_us_id')
  .get(GetContactUsById)
  .put(UpdateContactUs)
  .delete(DeleteContactUs);

module.exports = router;
