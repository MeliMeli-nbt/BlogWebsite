const { DataTypes } = require('sequelize');
const {sequelize} = require('../config/db');
const Page = require('./Page');

const ImagePage = sequelize.define('ImagePage', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  image_url: {
    type: DataTypes.STRING,
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

ImagePage.belongsTo(Page, { foreignKey: 'page_id' });

module.exports = ImagePage;

