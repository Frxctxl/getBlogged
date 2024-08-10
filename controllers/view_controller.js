module.exports = {
  showHomepage(req, res) {
    res.render('homepage', {
      title: 'Get Blogged'
    });
  }
};
