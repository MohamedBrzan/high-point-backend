const router = require('express').Router();

const GetAllSolutionsTabs = require('../controllers/Solutions/TabControllers/GetAllSolutionsTabs');
const GetTabById = require('../controllers/Solutions/TabControllers/GetTabById');
const CreateTab = require('../controllers/Solutions/TabControllers/CreateTab');
const UpdateTab = require('../controllers/Solutions/TabControllers/UpdateTab');
const DeleteTab = require('../controllers/Solutions/TabControllers/DeleteTab');

// Get All Tabs

router.route('/').get(GetAllSolutionsTabs).post(CreateTab);

// Get & Post & Put Tab

router.route('/:tab_id').get(GetTabById).put(UpdateTab);

// Delete Tab

router.route('/:card_id/:tab_id').delete(DeleteTab);

module.exports = router;
