const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('fitlife_db', 'root', '', { // XAMPP ปกติรหัสผ่านเป็นค่าว่าง ''
    host: '127.0.0.1', // ใช้ 127.0.0.1 แทน localhost จะช่วยลด Error ใน Mac ได้
    dialect: 'mysql',
    port: 3306 // port มาตรฐานของ MySQL
});

module.exports = sequelize;