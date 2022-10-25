const router = require('express').Router();

const GetAllSolutionsSolutions = require('../controllers/Solutions/SolutionControllers/GetAllSolutionsSolutions');
const GetSolutionById = require('../controllers/Solutions/SolutionControllers/GetSolutionById');
const CreateSolution = require('../controllers/Solutions/SolutionControllers/CreateSolution');
const UpdateSolution = require('../controllers/Solutions/SolutionControllers/UpdateSolution');
const DeleteSolution = require('../controllers/Solutions/SolutionControllers/DeleteSolution');
// const multer = require('multer');

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'images/Solutions_solutions');
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.fieldname + '-' + file.originalname);
//   },
// });

// const upload = multer({ storage: storage });

// Get All Solutions

router.route('/').get(GetAllSolutionsSolutions);

// Post Solutions

router.route('/:tab_id').post(CreateSolution);

// Get & Put & Delete Solution

router.route('/:solution_id').get(GetSolutionById).put(UpdateSolution);

//  Delete Tab

router.route('/:tab_id/:solution_id').delete(DeleteSolution);

module.exports = router;
