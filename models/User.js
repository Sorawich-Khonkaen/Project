const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('User', {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            notEmpty: { msg: "กรุณากรอกชื่อผู้ใช้งาน" },
            len: { args: [3, 20], msg: "ชื่อผู้ใช้งานต้องมีความยาว 3-20 ตัวอักษร" }
        }
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: { msg: "รูปแบบอีเมลไม่ถูกต้อง" },
            notEmpty: { msg: "กรุณากรอกอีเมล" }
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: { args: [6, 100], msg: "รหัสผ่านต้องมีความยาวอย่างน้อย 6 ตัวอักษร" }
        }
    },
    rrole: {
        type: DataTypes.ENUM('admin', 'trainer', 'member'),
        defaultValue: 'member'
    },
    // --- เพิ่มส่วนนี้เข้าไป ---
    member_code: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true
    },
    // -----------------------
    status: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
}, {
    timestamps: true,
    tableName: 'users'
});

module.exports = User;