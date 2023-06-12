const { DataTypes } = require('sequelize');
const {sequelize, connectToDb} = require('../config/db'); 
const Category = require('./Category');

const Post = sequelize.define('Post', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  category_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Category,
      key: 'id'
    }
  }
});

Post.belongsTo(Category, { foreignKey: 'category_id' });

module.exports = Post;