const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('Class', {
    className: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    level: {
      type: DataTypes.STRING(50),
      defaultValue: 'Beginner'
    },
    maxSeats: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 20
    },
    schedule: {
      type: DataTypes.STRING(100)
    }
  });
};
