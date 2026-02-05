const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('Trainer', {
    trainerCode: {
      type: DataTypes.STRING(15),
      allowNull: false,
      unique: true
    },
    fullName: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    specialty: {
      type: DataTypes.STRING(100)
    },
    phone: {
      type: DataTypes.STRING(20),
      unique: true
    }
  });
};
