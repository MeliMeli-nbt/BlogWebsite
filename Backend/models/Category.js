const { DataTypes } = require('sequelize');
const {sequelize, connectToDb } = require('../config/db'); 

const Category = sequelize.define('Category', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    unique: true,
  },
});

module.exports = Category;
