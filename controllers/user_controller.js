const { User, Blog } = require('../models');
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
  },
  async createBlog(req, res) {
    try {
      const data = {
        ...req.body,
        author: req.session.user_id
      }
      const blog = await Blog.create(data);
      console.log(blog)
      res.redirect('/')
    } catch (error) {
      console.log(error);
    }
  }
};
