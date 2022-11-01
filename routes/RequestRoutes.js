const router = require('express').Router();

const GetAllRequests = require('../controllers/Request/GetAllRequests');
const GetRequestById = require('../controllers/Request/GetRequestById');
const CreateRequest = require('../controllers/Request/CreateRequest');
const UpdateRequest = require('../controllers/Request/UpdateRequest');
const DeleteRequest = require('../controllers/Request/DeleteRequest');

// Get & Post Request

router.route('/').get(GetAllRequests).post(CreateRequest);

// Get & Put & Delete Request

router
  .route('/:request_id')
  .get(GetRequestById)
  .put(UpdateRequest)
  .delete(DeleteRequest);

module.exports = router;
