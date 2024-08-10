const router = require('express').Router();
const view_controller = require('../controllers/view_controller');
const { redirectGuest, redirectUser } = require('./helpers');

router.get('/', view_controller.showHomepage);
router.get('/register', redirectUser, view_controller.showRegisterpage);
router.get('/dashboard', redirectGuest, view_controller.showDashboard);
router.get('/create', redirectGuest, view_controller.showCreate);

module.exports = router;
