const { User } = require('../models');
module.exports = {
  // showHomepage(req, res) {
  //   res.render('homepage', {
  //     title: 'Get Blogged'
  //   });
  // },
  async registerUser(req, res) {
    try {
      const user = await User.create(req.body);

      req.session.user_id = user.id;
      res.redirect('/dashboard')

    } catch (error) {
      console.log(error);
      res.redirect('/register');
    }
  }
};
