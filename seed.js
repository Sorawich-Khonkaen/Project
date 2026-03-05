// seed.js
const sequelize = require('./config/database');
const seedUsers = require('./seeders/userSeeder');
const seedClasses = require('./seeders/classSeeder');
const User = require('./models/User'); // มั่นใจว่า Import Model มาแล้ว

const runSeeder = async () => {
    try {
        console.log('--- Starting Database Seeding ---');
        await sequelize.authenticate();
        console.log('Database connection established.');

        // 🔥 เพิ่มบรรทัดนี้: เพื่อสร้างตาราง Users ในฐานข้อมูลอัตโนมัติ
        await sequelize.sync({ force: true }); 
        console.log('Database tables created successfully.');

        await seedUsers();
        await seedClasses();
        
        console.log('--- Seeding Process Completed ---');
        process.exit(0);
    } catch (error) {
        console.error('❌ Seeding failed:', error);
        process.exit(1);
    }
};

runSeeder();