const router = require('express').Router();

const GetAppBriefById = require('../controllers/Career/app_brief/GetAppBriefById');
const CreateAppBrief = require('../controllers/Career/app_brief/CreateAppBrief');
const UpdateAppBrief = require('../controllers/Career/app_brief/UpdateAppBrief');
const DeleteAppBrief = require('../controllers/Career/app_brief/DeleteAppBrief');
const GetBuildBriefById = require('../controllers/Career/build_brief/GetBuildBriefById');
const CreateBuildBrief = require('../controllers/Career/build_brief/CreateBuildBrief');
const UpdateBuildBrief = require('../controllers/Career/build_brief/UpdateBuildBrief');
const DeleteBuildBrief = require('../controllers/Career/build_brief/DeleteBuildBrief');
const GetPositionById = require('../controllers/Career/position/GetPositionById');
const CreatePosition = require('../controllers/Career/position/CreatePosition');
const UpdatePosition = require('../controllers/Career/position/UpdatePosition');
const DeletePosition = require('../controllers/Career/position/DeletePosition');
const CreateCareer = require('../controllers/Career/CreateCareer');
const DeleteCareer = require('../controllers/Career/DeleteCareer');
const GetCareerById = require('../controllers/Career/GetCareerById');
const UpdateCareer = require('../controllers/Career/UpdateCareer');

// Get & Post & Put & Delete Career

router
  .route('/')
  .get(GetCareerById)
  .post(CreateCareer)
  .put(UpdateCareer)
  .delete(DeleteCareer);

// Get & Post & Put & Delete Build Brief

router
  .route('/build_brief')
  .get(GetBuildBriefById)
  .post(CreateBuildBrief)
  .put(UpdateBuildBrief)
  .delete(DeleteBuildBrief);

// Get & Post & Put & Delete App Brief

router
  .route('/app_brief')
  .get(GetAppBriefById)
  .post(CreateAppBrief)
  .put(UpdateAppBrief)
  .delete(DeleteAppBrief);

// Get & Post & Put & Delete Position

router
  .route('/position')
  .get(GetPositionById)
  .post(CreatePosition)
  .put(UpdatePosition)
  .delete(DeletePosition);

module.exports = router;
