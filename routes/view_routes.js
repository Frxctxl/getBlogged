const router = require('express').Router();
const view_controller = require('../controllers/view_controller');

router.get('/', view_controller.showHomepage);
