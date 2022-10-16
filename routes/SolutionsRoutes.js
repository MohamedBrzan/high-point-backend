const router = require('express').Router();

const GetSolutionSchemaById = require('../controllers/Solutions/SolutionSchemaControllers/GetSolutionSchemaById');
const CreateSolutionSchema = require('../controllers/Solutions/SolutionSchemaControllers/CreateSolutionSchema');
const UpdateSolutionSchema = require('../controllers/Solutions/SolutionSchemaControllers/UpdateSolutionSchema');
const DeleteSolutionSchema = require('../controllers/Solutions/SolutionSchemaControllers/DeleteSolutionSchema');
const GetCardById = require('../controllers/Solutions/CardControllers/GetCardById');
const CreateCard = require('../controllers/Solutions/CardControllers/CreateCard');
const UpdateCard = require('../controllers/Solutions/CardControllers/UpdateCard');
const DeleteCard = require('../controllers/Solutions/CardControllers/DeleteCard');
const GetSolutionsGroupById = require('../controllers/Solutions/SolutionsGroupControllers/GetSolutionsGroupById');
const CreateSolutionsGroup = require('../controllers/Solutions/SolutionsGroupControllers/CreateSolutionsGroup');
const UpdateSolutionsGroup = require('../controllers/Solutions/SolutionsGroupControllers/UpdateSolutionsGroup');
const DeleteSolutionsGroup = require('../controllers/Solutions/SolutionsGroupControllers/DeleteSolutionsGroup');
const GetSolutionById = require('../controllers/Solutions/SolutionControllers/GetSolutionById');
const CreateSolution = require('../controllers/Solutions/SolutionControllers/CreateSolution');
const UpdateSolution = require('../controllers/Solutions/SolutionControllers/UpdateSolution');
const DeleteSolution = require('../controllers/Solutions/SolutionControllers/DeleteSolution');
const GetTabById = require('../controllers/Solutions/TabControllers/GetTabById');
const CreateTab = require('../controllers/Solutions/TabControllers/CreateTab');
const UpdateTab = require('../controllers/Solutions/TabControllers/UpdateTab');
const DeleteTab = require('../controllers/Solutions/TabControllers/DeleteTab');
const GetSubjectById = require('../controllers/Solutions/SubjectControllers/GetSubjectById');
const CreateSubject = require('../controllers/Solutions/SubjectControllers/CreateSubject');
const UpdateSubject = require('../controllers/Solutions/SubjectControllers/UpdateSubject');
const DeleteSubject = require('../controllers/Solutions/SubjectControllers/DeleteSubject');

// Get & Post & Put & Delete Solution

router
  .route('/')
  .get(GetSolutionSchemaById)
  .post(CreateSolutionSchema)
  .put(UpdateSolutionSchema)
  .delete(DeleteSolutionSchema);

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
