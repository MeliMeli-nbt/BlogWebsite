const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db'); 
const Post = require('./Post');

const Page = sequelize.define('Page', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  post_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Post,
      key: 'id'
    }
  }
});

Page.belongsTo(Post, { foreignKey: 'post_id' });

module.exports = Post;