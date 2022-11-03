const router = require('express').Router();

const GetAllInterfaces = require('../controllers/Interface/GetAllInterfaces');
const GetInterfaceById = require('../controllers/Interface/GetInterfaceById');
const CreateInterface = require('../controllers/Interface/CreateInterface');
const UpdateInterface = require('../controllers/Interface/UpdateInterface');

const CreateDevelopment = require('../controllers/Interface/Developments/CreateDevelopment');
const UpdateDevelopment = require('../controllers/Interface/Developments/UpdateDevelopment');
const DeleteDevelopment = require('../controllers/Interface/Developments/DeleteDevelopment');

const CreateSolution = require('../controllers/Interface/Solution/CreateSolution');
const UpdateSolution = require('../controllers/Interface/Solution/UpdateSolution');
const DeleteSolution = require('../controllers/Interface/Solution/DeleteSolution');

const CreateProof = require('../controllers/Interface/Proof/CreateProof');
const UpdateProof = require('../controllers/Interface/Proof/UpdateProof');
const DeleteProof = require('../controllers/Interface/Proof/DeleteProof');

const CreateSocialLink = require('../controllers/Interface/SocialLinks/CreateSocialLink');
const UpdateSocialLink = require('../controllers/Interface/SocialLinks/UpdateSocialLink');
const DeleteSocialLink = require('../controllers/Interface/SocialLinks/DeleteSocialLink');

// Get & Post & Put & Delete Interface

router.route('/').get(GetAllInterfaces).post(CreateInterface);

// Get & Post & Put & Delete Interface

router.route('/:interface_id').get(GetInterfaceById).put(UpdateInterface);

// Post  Interface Developments

router.route('/:interface_id/development').post(CreateDevelopment);

// Put & Delete Interface Developments
router
  .route('/:interface_id/development/:development_id')
  .put(UpdateDevelopment)
  .delete(DeleteDevelopment);

// Post  Interface Solutions

router.route('/:interface_id/solution').post(CreateSolution);

// Put & Delete Interface Solutions
router
  .route('/:interface_id/solution/:solution_id')
  .put(UpdateSolution)
  .delete(DeleteSolution);

// Post  Interface Proofs

router.route('/:interface_id/proof').post(CreateProof);

// Put & Delete Interface Proofs
router
  .route('/:interface_id/proof/:proof_id')
  .put(UpdateProof)
  .delete(DeleteProof);

// Post  Interface Social Links

router.route('/:interface_id/link').post(CreateSocialLink);

// Put & Delete Interface Social Links
router
  .route('/:interface_id/link/:link_id')
  .put(UpdateSocialLink)
  .delete(DeleteSocialLink);

module.exports = router;
