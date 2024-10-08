const router = require('express').Router();
const user_controller = require('../controllers/user_controller');

router.post('/register', user_controller.registerUser);
router.post('/create', user_controller.createBlog);

module.exports = router;
