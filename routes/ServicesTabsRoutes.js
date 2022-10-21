const router = require('express').Router();

const GetAllServicesTabs = require('../controllers/Services/TabControllers/GetAllServicesTabs');
const GetTabById = require('../controllers/Services/TabControllers/GetTabById');
const CreateTab = require('../controllers/Services/TabControllers/CreateTab');
const UpdateTab = require('../controllers/Services/TabControllers/UpdateTab');
const DeleteTab = require('../controllers/Services/TabControllers/DeleteTab');

// Get All Tabs

router.route('/').get(GetAllServicesTabs).post(CreateTab);

// Get & Post & Put Tab

router.route('/:tab_id').get(GetTabById).put(UpdateTab);

// Delete Tab

router.route('/:card_id/:tab_id').delete(DeleteTab);

module.exports = router;
