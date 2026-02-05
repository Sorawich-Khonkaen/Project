const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('Member', {
    memberCode: {
      type: DataTypes.STRING(15),
      allowNull: false,
      unique: true
    },
    firstName: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING(20),
      unique: true
    },
    email: {
      type: DataTypes.STRING(150),
      unique: true
    },
    joinDate: {
      type: DataTypes.DATEONLY,
      defaultValue: DataTypes.NOW
    }
  });
};
