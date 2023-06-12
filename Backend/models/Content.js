const { DataTypes } = require('sequelize');
const {sequelize} = require('../config/db');
const Page = require('./Page');

const Content = sequelize.define('Content', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  page_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Page,
      key: 'id'
    }
  },
});

Content.belongsTo(Page, { foreignKey: 'page_id' });

module.exports = Content;
