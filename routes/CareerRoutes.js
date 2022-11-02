const router = require('express').Router();

const GetAllCareers = require('../controllers/Career/GetAllCareers');
const GetCareerById = require('../controllers/Career/GetCareerById');
const CreateCareer = require('../controllers/Career/CreateCareer');
const DeleteCareer = require('../controllers/Career/DeleteCareer');
const UpdateCareer = require('../controllers/Career/UpdateCareer');

const GetBriefById = require('../controllers/Career/brief/GetBriefById');
const CreateBrief = require('../controllers/Career/brief/CreateBrief');
const UpdateBrief = require('../controllers/Career/brief/UpdateBrief');
const DeleteBrief = require('../controllers/Career/brief/DeleteBrief');

const GetPositionById = require('../controllers/Career/position/GetPositionById');
const CreatePosition = require('../controllers/Career/position/CreatePosition');
const UpdatePosition = require('../controllers/Career/position/UpdatePosition');
const DeletePosition = require('../controllers/Career/position/DeletePosition');

// Get & Post Career

router.route('/').get(GetAllCareers).post(CreateCareer);

// Get & Post & Put & Delete Career

router
  .route('/:career_id')
  .get(GetCareerById)
  .put(UpdateCareer)
  .delete(DeleteCareer);

// Post Brief

router.route('/:career_id/brief').post(CreateBrief);

// Get & Put & Delete  Brief

router
  .route('/:career_id/brief/:brief_id')
  .get(GetBriefById)
  .put(UpdateBrief)
  .delete(DeleteBrief);

// Get & Post & Put & Delete Position

router.route('/:career_id/position').post(CreatePosition);

// Get & Post & Put & Delete Position

router
  .route('/:career_id/position/:position_id')
  .get(GetPositionById)
  .post(CreatePosition)
  .put(UpdatePosition)
  .delete(DeletePosition);

module.exports = router;
