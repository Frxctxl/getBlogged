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
  showDashboard(req, res) {
    res.render('dashboard', {
      title: 'Get Blogged'
    });
  }
};
