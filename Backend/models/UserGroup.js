const { DataTypes } = require('sequelize');
const {sequelize} = require('../config/db');
const User = require('./User');
const Group = require('./Group');

const UserGroup = sequelize.define('UserGroup', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'id'
    }
  },
  isOwner: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  permissions: {
    type: DataTypes.JSON,
    allowNull: false,
    defaultValue: {}
  },
  group_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Group,
      key: 'id'
    }
  },
  active: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  }
});

User.belongsToMany(Group, { through: UserGroup, foreignKey: 'user_id' });
Group.belongsToMany(User, { through: UserGroup, foreignKey: 'group_id' });

module.exports = UserGroup;
