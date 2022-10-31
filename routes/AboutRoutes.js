const router = require('express').Router();

const GetAllAboutSchema = require('../controllers/About/GetAllAboutSchema');

const GetAboutById = require('../controllers/About/GetAboutById');
const CreateAbout = require('../controllers/About/CreateAbout');
const UpdateAbout = require('../controllers/About/UpdateAbout');
const DeleteAbout = require('../controllers/About/DeleteAbout');

const GetMissionById = require('../controllers/About/Mission/GetMissionById');
const CreateMission = require('../controllers/About/Mission/CreateMission');
const UpdateMission = require('../controllers/About/Mission/UpdateMission');
const DeleteMission = require('../controllers/About/Mission/DeleteMission');

const GetCrewById = require('../controllers/About/Crew/GetCrewById');
const CreateCrew = require('../controllers/About/Crew/CreateCrew');
const UpdateCrew = require('../controllers/About/Crew/UpdateCrew');
const DeleteCrew = require('../controllers/About/Crew/DeleteCrew');

const GetAnswerById = require('../controllers/About/answer/GetAnswerById');
const CreateAnswer = require('../controllers/About/answer/CreateAnswer');
const UpdateAnswer = require('../controllers/About/answer/UpdateAnswer');
const DeleteAnswer = require('../controllers/About/answer/DeleteAnswer');

// Get & Post & Put & Delete About

router.route('/').get(GetAllAboutSchema).post(CreateAbout);

// Get & Post & Put & Delete About

router
  .route('/:about_id')
  .get(GetAboutById)
  .put(UpdateAbout)
  .delete(DeleteAbout);

// Get & Post & Put About Mission

router.route('/:about_id/mission').post(CreateMission).delete(DeleteMission);

//  Delete About Mission

router
  .route('/:about_id/mission/:mission_id')
  .get(GetMissionById)
  .put(UpdateMission)
  .delete(DeleteMission);

// Get & Post & Put & Delete About Answer

router.route('/:about_id/answer').post(CreateAnswer).delete(DeleteAnswer);

//  Delete About Answer

router
  .route('/:about_id/answer/:answer_id')
  .get(GetAnswerById)
  .put(UpdateAnswer)
  .delete(DeleteAnswer);

// Post & Put About Crew

router
  .route('/:about_id/crew')
  .post(CreateCrew)

  .delete(DeleteCrew);

// Get & Delete About Crew

router
  .route('/:about_id/crew/:crew_id')
  .get(GetCrewById)
  .put(UpdateCrew)
  .delete(DeleteCrew);

module.exports = router;
