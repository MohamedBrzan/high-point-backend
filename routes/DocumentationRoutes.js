const router = require('express').Router();

const GetAllDocumentations = require('../controllers/Documentation/GetAllDocumentations');
const GetDocumentationById = require('../controllers/Documentation/GetDocumentationById');
const CreateDocumentation = require('../controllers/Documentation/CreateDocumentation');
const UpdateDocumentation = require('../controllers/Documentation/UpdateDocumentation');
const DeleteDocumentation = require('../controllers/Documentation/DeleteDocumentation');
const CreateDocument = require('../controllers/Documentation/document/CreateDocument');
const DeleteDocument = require('../controllers/Documentation/document/DeleteDocument');
const GetDocumentById = require('../controllers/Documentation/document/GetDocumentById');
const UpdateDocument = require('../controllers/Documentation/document/UpdateDocument');

// Get & Post & Put & Delete Documentation

router.route('/').get(GetAllDocumentations).post(CreateDocumentation);

// Get & Post & Put & Delete Contact_Us

router
  .route('/:documentation_id')
  .get(GetDocumentationById)
  .put(UpdateDocumentation)
  .delete(DeleteDocumentation);

//  Post & Put & Delete Document

router.route('/:documentation_id/document').post(CreateDocument);

//  Post & Put & Delete Document

router
  .route('/:documentation_id/document/:document_id')
  .get(GetDocumentById)
  .put(UpdateDocument)
  .delete(DeleteDocument);

module.exports = router;
