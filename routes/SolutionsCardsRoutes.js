const router = require('express').Router();

const GetAllSolutionsCards = require('../controllers/Solutions/CardControllers/GetAllSolutionsCards');
const GetCardById = require('../controllers/Solutions/CardControllers/GetCardById');
const CreateCard = require('../controllers/Solutions/CardControllers/CreateCard');
const UpdateCard = require('../controllers/Solutions/CardControllers/UpdateCard');
const DeleteCard = require('../controllers/Solutions/CardControllers/DeleteCard');

// Get All Card

router.route('/').get(GetAllSolutionsCards).post(CreateCard);

// Get & Post & Put & Delete Card

router.route('/:card_id').get(GetCardById).put(UpdateCard).delete(DeleteCard);

module.exports = router;
