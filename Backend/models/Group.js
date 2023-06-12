const { DataTypes } = require('sequelize');
const { sequelize, connectToDb } = require('../config/db');
const Post = require('./Post');

const Group = sequelize.define('Group', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    unique: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  active: {
    type: DataTypes.INTEGER,
    defaultValue: 0
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

Group.belongsTo(Post, { foreignKey: 'post_id' });

module.exports = Group;
