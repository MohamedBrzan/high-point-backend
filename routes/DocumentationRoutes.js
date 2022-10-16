const router = require('express').Router();

const GetDocumentationSchemaById = require('../controllers/Documentation/GetDocumentationSchemaById');
const CreateDocumentationSchema = require('../controllers/Documentation/CreateDocumentationSchema');
const UpdateDocumentationSchema = require('../controllers/Documentation/UpdateDocumentationSchema');
const DeleteDocumentationSchema = require('../controllers/Documentation/DeleteDocumentationSchema');
const CreateDocument = require('../controllers/Documentation/document/CreateDocument');
const DeleteDocument = require('../controllers/Documentation/document/DeleteDocument');
const GetDocumentById = require('../controllers/Documentation/document/GetDocumentById');
const UpdateDocument = require('../controllers/Documentation/document/UpdateDocument');

// Get & Post & Put & Delete Contact_Us

router
  .route('/')
  .get(GetDocumentationSchemaById)
  .post(CreateDocumentationSchema)
  .put(UpdateDocumentationSchema)
  .delete(DeleteDocumentationSchema);

//  Post & Put & Delete Contact_Us Branches

router
  .route('/document')
  .get(GetDocumentById)
  .post(CreateDocument)
  .put(UpdateDocument)
  .delete(DeleteDocument);

module.exports = router;
