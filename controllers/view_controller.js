const { User } = require("../models");

module.exports = {
  showHomepage(req, res) {
    res.render('homepage', {
      title: 'Get Blogged'
    });
  },
  showRegisterpage(req, res) {
    res.render('register', {
      title: 'Get Blogged'
    });
  },
  showCreate(req, res) {
    res.render('create', {
      title: 'Get Blogged'
    });
  },
  async showDashboard(req, res) {
    const user = await User.findByPk(req.session.user_id, {
      attributes: ['email']
    });

    console.log(user.get({ plain: true }));

    res.render('dashboard', {
      title: 'Get Blogged'
    });
  }
};
