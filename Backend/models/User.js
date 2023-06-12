const { DataTypes } = require('sequelize');
const { sequelize, connectToDb } = require('../config/db');

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  avatar_url: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  active: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
});

module.exports = User;
