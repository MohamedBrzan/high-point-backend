const router = require('express').Router();

const GetAllPartners = require('../controllers/Partner/GetAllPartners');
const GetPartnerById = require('../controllers/Partner/GetPartnerById');
const CreatePartner = require('../controllers/Partner/CreatePartner');
const UpdatePartner = require('../controllers/Partner/UpdatePartner');
const DeletePartner = require('../controllers/Partner/DeletePartner');

// Get & Post Partner

router.route('/').get(GetAllPartners).post(CreatePartner);

//  Get && Put & Delete Partner

router
  .route('/:partner_id')
  .get(GetPartnerById)
  .put(UpdatePartner)
  .delete(DeletePartner);

module.exports = router;
