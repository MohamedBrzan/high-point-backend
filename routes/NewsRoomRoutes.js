const router = require('express').Router();

const IsAuthenticated = require('../middleWare/IsAuthenticated');

const GetAllNewsRooms = require('../controllers/NewsRoom/GetAllNewsRooms');

const CreateNewsRoom = require('../controllers/NewsRoom/CreateNewsRoom');
const GetNewsRoomById = require('../controllers/NewsRoom/GetNewsRoomById');
const UpdateNewsRoom = require('../controllers/NewsRoom/UpdateNewsRoom');
const DeleteNewsRoom = require('../controllers/NewsRoom/DeleteNewsRoom');

// Get & Post & Put & Delete NewsRoom

router.route('/').get(GetAllNewsRooms).post(IsAuthenticated, CreateNewsRoom);

router
  .route('/:news_room_id')
  .get(GetNewsRoomById)
  .put(IsAuthenticated, UpdateNewsRoom)
  .delete(IsAuthenticated, DeleteNewsRoom);

module.exports = router;
