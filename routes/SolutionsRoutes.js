const router = require('express').Router();

const GetAllSolutions = require('../controllers/Solutions/SolutionSchemaControllers/GetAllSolutions');
const GetSolutionById = require('../controllers/Solutions/SolutionSchemaControllers/GetSolutionById');
const CreateSolutions = require('../controllers/Solutions/SolutionSchemaControllers/CreateSolution');
const UpdateSolution = require('../controllers/Solutions/SolutionSchemaControllers/UpdateSolution');
const DeleteSolution = require('../controllers/Solutions/SolutionSchemaControllers/DeleteSolution');

// Get All Solution

router.route('/').get(GetAllSolutions).post(CreateSolutions);

// Get & Post & Put & Delete Solution

router
  .route('/:solution_schema_id')
  .get(GetSolutionById)
  .put(UpdateSolution)
  .delete(DeleteSolution);

module.exports = router;
