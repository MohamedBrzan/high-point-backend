const router = require('express').Router();

const GetQuoteById = require('../controllers/Quote/GetQuoteById');
const CreateQuote = require('../controllers/Quote/CreateQuote');
const UpdateQuote = require('../controllers/Quote/UpdateQuote');
const DeleteQuote = require('../controllers/Quote/DeleteQuote');
const GetDecisionById = require('../controllers/Quote/Decision/GetDecisionById');
const CreateDecision = require('../controllers/Quote/Decision/CreateDecision');
const UpdateDecision = require('../controllers/Quote/Decision/UpdateDecision');
const DeleteDecision = require('../controllers/Quote/Decision/DeleteDecision');
const GetListById = require('../controllers/Quote/Decision/list/GetListById');
const CreateList = require('../controllers/Quote/Decision/list/CreateList');
const UpdateList = require('../controllers/Quote/Decision/list/UpdateList');
const DeleteList = require('../controllers/Quote/Decision/list/DeleteList');
const GetQ_AById = require('../controllers/Quote/q_a/GetQ_AById');
const CreateQ_A = require('../controllers/Quote/q_a/CreateQ_A');
const UpdateQ_A = require('../controllers/Quote/q_a/UpdateQ_A');
const DeleteQ_A = require('../controllers/Quote/q_a/DeleteQ_A');

// Get & Post & Put & Delete Quote

router
  .route('/')
  .get(GetQuoteById)
  .post(CreateQuote)
  .put(UpdateQuote)
  .delete(DeleteQuote);

// Get & Post & Put & Delete Quote Decision

router
  .route('/decision')
  .get(GetDecisionById)
  .post(CreateDecision)
  .put(UpdateDecision)
  .delete(DeleteDecision);

// Get & Post & Put & Delete Quote Decision list

router
  .route('/decision/list')
  .get(GetListById)
  .post(CreateList)
  .put(UpdateList)
  .delete(DeleteList);

// Get & Post & Put & Delete Quote Q&A

router
  .route('/q_a')
  .get(GetQ_AById)
  .post(CreateQ_A)
  .put(UpdateQ_A)
  .delete(DeleteQ_A);

module.exports = router;
