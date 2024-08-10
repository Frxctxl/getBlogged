const router = require('express').Router();
const view_controller = require('../controllers/view_controller');
const { redirectGuest, redirectUser } = require('./helpers');

router.get('/', redirectUser, view_controller.showHomepage);

module.exports = router;
