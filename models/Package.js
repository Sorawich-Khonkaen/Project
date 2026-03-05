const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // ใช้ DB ตัวเดียวกับ Users/Classes

const Package = sequelize.define('Package', {
    package_name: { type: DataTypes.STRING(120), allowNull: false, unique: true },
    description: { type: DataTypes.TEXT, allowNull: true },
    price: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
    session_count: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 1 },
    duration_days: { type: DataTypes.INTEGER, allowNull: true },
    is_active: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: true }
}, {
    tableName: 'packages',
    timestamps: true
});

module.exports = Package;