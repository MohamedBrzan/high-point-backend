const router = require('express').Router();

const GetAllServicesCards = require('../controllers/Services/CardControllers/GetAllServicesCards');
const GetCardById = require('../controllers/Services/CardControllers/GetCardById');
const CreateCard = require('../controllers/Services/CardControllers/CreateCard');
const UpdateCard = require('../controllers/Services/CardControllers/UpdateCard');
const DeleteCard = require('../controllers/Services/CardControllers/DeleteCard');

// Get All Card

router.route('/').get(GetAllServicesCards).post(CreateCard);

// Get & Post & Put & Delete Card

router.route('/:card_id').get(GetCardById).put(UpdateCard).delete(DeleteCard);

module.exports = router;
