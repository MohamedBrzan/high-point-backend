const router = require('express').Router();

const GetAllServices = require('../controllers/Services/ServiceSchemaControllers/GetAllServices');
const GetServiceById = require('../controllers/Services/ServiceSchemaControllers/GetServiceById');
const CreateService = require('../controllers/Services/ServiceSchemaControllers/CreateService');
const UpdateService = require('../controllers/Services/ServiceSchemaControllers/UpdateService');
const DeleteService = require('../controllers/Services/ServiceSchemaControllers/DeleteService');

// Get All Service

router.route('/').get(GetAllServices).post(CreateService);

// Get & Post & Put & Delete Service

router
  .route('/:service_schema_id')
  .get(GetServiceById)
  .put(UpdateService)
  .delete(DeleteService);

module.exports = router;
