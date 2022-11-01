const router = require('express').Router();

const GetAllQuotes = require('../controllers/Quote/GetAllQuotes');
const GetQuoteById = require('../controllers/Quote/GetQuoteById');
const CreateQuote = require('../controllers/Quote/CreateQuote');
const UpdateQuote = require('../controllers/Quote/UpdateQuote');
const DeleteQuote = require('../controllers/Quote/DeleteQuote');
const GetDecisionById = require('../controllers/Quote/Decision/GetDecisionById');
const CreateDecision = require('../controllers/Quote/Decision/CreateDecision');
const UpdateDecision = require('../controllers/Quote/Decision/UpdateDecision');
const DeleteDecision = require('../controllers/Quote/Decision/DeleteDecision');
const GetQ_AById = require('../controllers/Quote/q_a/GetQ_AById');
const CreateQ_A = require('../controllers/Quote/q_a/CreateQ_A');
const UpdateQ_A = require('../controllers/Quote/q_a/UpdateQ_A');
const DeleteQ_A = require('../controllers/Quote/q_a/DeleteQ_A');

// Get & Post Quote

router.route('/').get(GetAllQuotes).post(CreateQuote);

// Get & Put & Delete Quote

router
  .route('/:quote_id')
  .get(GetQuoteById)
  .put(UpdateQuote)
  .delete(DeleteQuote);

// Post Quote Decision

router.route('/:quote_id/decision').post(CreateDecision);

// Get & Put & Delete Quote Decision

router
  .route('/:quote_id/decision/:decision_id')
  .get(GetDecisionById)
  .put(UpdateDecision)
  .delete(DeleteDecision);

// Get & Post & Put & Delete Quote Q&A

router.route('/:quote_id/q_a').post(CreateQ_A);

// Get & Post & Put & Delete Quote Q&A

router
  .route('/:quote_id/q_a/:q_a_id')
  .get(GetQ_AById)
  .put(UpdateQ_A)
  .delete(DeleteQ_A);

module.exports = router;
