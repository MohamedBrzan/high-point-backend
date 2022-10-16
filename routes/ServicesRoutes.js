const router = require('express').Router();

const GetAllServices = require('../controllers/Services/ServiceSchemaControllers/GetAllServices');
const GetServiceById = require('../controllers/Services/ServiceSchemaControllers/GetServiceById');
const CreateServices = require('../controllers/Services/ServiceSchemaControllers/CreateServices');
const GetCardById = require('../controllers/Services/CardControllers/GetCardById');
const CreateCard = require('../controllers/Services/CardControllers/CreateCard');
const UpdateCard = require('../controllers/Services/CardControllers/UpdateCard');
const DeleteCard = require('../controllers/Services/CardControllers/DeleteCard');
const UpdateService = require('../controllers/Services/ServiceSchemaControllers/UpdateService');
const DeleteService = require('../controllers/Services/ServiceSchemaControllers/DeleteService');
const GetSolutionsGroupById = require('../controllers/Services/SolutionsGroupControllers/GetSolutionsGroupById');
const CreateSolutionsGroup = require('../controllers/Services/SolutionsGroupControllers/CreateSolutionsGroup');
const UpdateSolutionsGroup = require('../controllers/Services/SolutionsGroupControllers/UpdateSolutionsGroup');
const DeleteSolutionsGroup = require('../controllers/Services/SolutionsGroupControllers/DeleteSolutionsGroup');
const GetSolutionById = require('../controllers/Services/SolutionControllers/GetSolutionById');
const CreateSolution = require('../controllers/Services/SolutionControllers/CreateSolution');
const UpdateSolution = require('../controllers/Services/SolutionControllers/UpdateSolution');
const DeleteSolution = require('../controllers/Services/SolutionControllers/DeleteSolution');
const GetTabById = require('../controllers/Services/TabControllers/GetTabById');
const CreateTab = require('../controllers/Services/TabControllers/CreateTab');
const UpdateTab = require('../controllers/Services/TabControllers/UpdateTab');
const DeleteTab = require('../controllers/Services/TabControllers/DeleteTab');
const GetSubjectById = require('../controllers/Services/SubjectControllers/GetSubjectById');
const CreateSubject = require('../controllers/Services/SubjectControllers/CreateSubject');
const UpdateSubject = require('../controllers/Services/SubjectControllers/UpdateSubject');
const DeleteSubject = require('../controllers/Services/SubjectControllers/DeleteSubject');

// Get All Service

router.route('/').get(GetAllServices);

// Get & Post & Put & Delete Service

router
  .route('/:service_schema_id')
  .get(GetServiceById)
  .post(CreateServices)
  .put(UpdateService)
  .delete(DeleteService);

// Get & Post & Put & Delete Card

router
  .route('/card')
  .get(GetCardById)
  .post(CreateCard)
  .put(UpdateCard)
  .delete(DeleteCard);

// Get & Post & Put & Delete Solutions Group

router
  .route('/solutions_group')
  .get(GetSolutionsGroupById)
  .post(CreateSolutionsGroup)
  .put(UpdateSolutionsGroup)
  .delete(DeleteSolutionsGroup);

// Get & Post & Put & Delete Solution

router
  .route('/solution')
  .get(GetSolutionById)
  .post(CreateSolution)
  .put(UpdateSolution)
  .delete(DeleteSolution);

// Get & Post & Put & Delete Tab

router
  .route('/tab')
  .get(GetTabById)
  .post(CreateTab)
  .put(UpdateTab)
  .delete(DeleteTab);

// Get & Post & Put & Delete Subject

router
  .route('/subject')
  .get(GetSubjectById)
  .post(CreateSubject)
  .put(UpdateSubject)
  .delete(DeleteSubject);

module.exports = router;
