const router = require('express').Router();

const GetAboutById = require('../controllers/About/GetAboutById');
const CreateAbout = require('../controllers/About/CreateAbout');
const UpdateAbout = require('../controllers/About/UpdateAbout');
const DeleteAbout = require('../controllers/About/DeleteAbout');
const GetMissionById = require('../controllers/About/mission/GetMissionById');
const CreateMission = require('../controllers/About/mission/CreateMission');
const UpdateMission = require('../controllers/About/mission/UpdateMission');
const DeleteMission = require('../controllers/About/mission/DeleteMission');
const GetAnswerById = require('../controllers/About/answer/GetAnswerById');
const CreateAnswer = require('../controllers/About/answer/CreateAnswer');
const UpdateAnswer = require('../controllers/About/answer/UpdateAnswer');
const DeleteAnswer = require('../controllers/About/answer/DeleteAnswer');
const GetCrewById = require('../controllers/About/crew/GetCrewById');
const CreateCrew = require('../controllers/About/crew/CreateCrew');
const UpdateCrew = require('../controllers/About/crew/UpdateCrew');
const DeleteCrew = require('../controllers/About/crew/DeleteCrew');
const GetAllAboutSchema = require('../controllers/About/GetAllAboutSchema');

// Get & Post & Put & Delete About

router.route('/').get(GetAllAboutSchema);

// Get & Post & Put & Delete About

router
  .route('/:about_schema_id')
  .get(GetAboutById)
  .post(CreateAbout)
  .put(UpdateAbout)
  .delete(DeleteAbout);

// Get & Post & Put & Delete Product Mission

router
  .route('/mission')
  .get(GetMissionById)
  .post(CreateMission)
  .put(UpdateMission)
  .delete(DeleteMission);

// Get & Post & Put & Delete Product Answer

router
  .route('/answer')
  .get(GetAnswerById)
  .post(CreateAnswer)
  .put(UpdateAnswer)
  .delete(DeleteAnswer);

// Get & Post & Put & Delete Product Crew

router
  .route('/crew')
  .get(GetCrewById)
  .post(CreateCrew)
  .put(UpdateCrew)
  .delete(DeleteCrew);

module.exports = router;
