const router = require('express').Router();

const IsAuthenticated = require('../middleWare/IsAuthenticated');
const IsAdmin = require('../middleWare/IsAdmin');

const GetAllClientMessages = require('../controllers/ClientMessage/GetAllClientMessages');

const CreateClientMessage = require('../controllers/ClientMessage/CreateClientMessage');
const GetClientMessageById = require('../controllers/ClientMessage/GetClientMessageById');
const UpdateClientMessage = require('../controllers/ClientMessage/UpdateClientMessage');
const DeleteClientMessage = require('../controllers/ClientMessage/DeleteClientMessage');

// Get & Post & Put & Delete ClientMessage

router
  .route('/')
  .get(IsAuthenticated, IsAdmin, GetAllClientMessages)
  .post(IsAuthenticated, CreateClientMessage);

router
  .route('/:client_message_id')
  .get(IsAuthenticated, IsAdmin, GetClientMessageById)
  .delete(IsAuthenticated, IsAdmin, IsAuthenticated, DeleteClientMessage);

module.exports = router;
