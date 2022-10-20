const router = require('express').Router();

const GetAllServicesSolutions = require('../controllers/Services/SolutionControllers/GetAllServicesSolutions');
const GetSolutionById = require('../controllers/Services/SolutionControllers/GetSolutionById');
const CreateSolution = require('../controllers/Services/SolutionControllers/CreateSolution');
const UpdateSolution = require('../controllers/Services/SolutionControllers/UpdateSolution');
const DeleteSolution = require('../controllers/Services/SolutionControllers/DeleteSolution');
// const multer = require('multer');

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'images/services_solutions');
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.fieldname + '-' + file.originalname);
//   },
// });

// const upload = multer({ storage: storage });

// Get All Solutions

router.route('/').get(GetAllServicesSolutions);

// Post Solutions

router.route('/:tab_id').post(CreateSolution);

// Get & Put & Delete Solution

router.route('/:solution_id').get(GetSolutionById).put(UpdateSolution);

//  Delete Tab

router.route('/:tab_id/:solution_id').delete(DeleteSolution);

module.exports = router;
