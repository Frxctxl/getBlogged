const { DataTypes } = require('sequelize');

const client = require('../config/connection');

const Blog = client.define('Blog', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  author: {
    type: DataTypes.STRING
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false
  }
});

module.exports = Blog;
