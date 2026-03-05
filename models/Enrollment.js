module.exports = (sequelize, DataTypes) => {
  const Enrollment = sequelize.define("Enrollment", {

    enrollment_code: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },

    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

    classId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

    status: {
      type: DataTypes.ENUM('active', 'cancelled'),
      defaultValue: 'active'
    }

  });

  Enrollment.associate = (models) => {

    Enrollment.belongsTo(models.User, {
      foreignKey: "userId"
    });

    Enrollment.belongsTo(models.Class, {
      foreignKey: "classId"
    });

  };

  return Enrollment;
};