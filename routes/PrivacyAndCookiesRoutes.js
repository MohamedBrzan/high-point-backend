const router = require('express').Router();

const GetAllPrivacyAndCookies = require('../controllers/PrivacyAndCookies/GetAllPrivacyAndCookies');

const GetPrivacyAndCookiesById = require('../controllers/PrivacyAndCookies/GetPrivacyAndCookiesById');
const CreatePrivacyAndCookies = require('../controllers/PrivacyAndCookies/CreatePrivacyAndCookies');
const UpdatePrivacyAndCookies = require('../controllers/PrivacyAndCookies/UpdatePrivacyAndCookies');

// Get & Post & Put & Delete PrivacyAndCookies

router.route('/').get(GetAllPrivacyAndCookies).post(CreatePrivacyAndCookies);

// Get & Post & Put & Delete PrivacyAndCookies

router
  .route('/:privacyAndCookies_id')
  .get(GetPrivacyAndCookiesById)
  .put(UpdatePrivacyAndCookies);

module.exports = router;
