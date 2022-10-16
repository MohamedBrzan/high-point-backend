const router = require('express').Router();

const GetPartnerById = require('../controllers/Partner/GetPartnerById');
const CreatePartner = require('../controllers/Partner/CreatePartner');
const UpdatePartner = require('../controllers/Partner/UpdatePartner');
const DeletePartner = require('../controllers/Partner/DeletePartner');

// Get & Post & Put & Delete Partner

router
  .route('/')
  .get(GetPartnerById)
  .post(CreatePartner)
  .put(UpdatePartner)
  .delete(DeletePartner);

module.exports = router;
