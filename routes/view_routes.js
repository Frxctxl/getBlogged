const router = require('express').Router();
const view_controller = require('../controllers/view_controller');
const { redirectGuest, redirectUser } = require('./helpers');

router.get('/', redirectUser, view_controller.showHomepage);
router.get('/register', redirectUser, view_controller.showRegisterpage);
router.get('/dashboard', redirectGuest, view_controller.showDashboard);

module.exports = router;
