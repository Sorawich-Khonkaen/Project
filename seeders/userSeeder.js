const User = require('../models/User');
const bcrypt = require('bcrypt');

const seedUsers = async () => {
    try {
        const hashedPassword = await bcrypt.hash('password123', 10);

        const users = [
            // 1. Admin Group 
            { username: 'admin_fitlife', email: 'admin@fitlife.com', password: hashedPassword, role: 'admin' },
            
            // 2. Trainer Group 
            { username: 'trainer_jack', email: 'jack.fit@gmail.com', password: hashedPassword, role: 'trainer' },
            { username: 'coach_sarah', email: 'sarah.yoga@gmail.com', password: hashedPassword, role: 'trainer' },
            { username: 'trainer_mike', email: 'mike.power@gmail.com', password: hashedPassword, role: 'trainer' },

            // 3. Member Group 
            { username: 'somchai_s', email: 'somchai@mail.com', password: hashedPassword, role: 'member', membership_id: 1 },
            { username: 'jane_doe', email: 'jane.d@hotmail.com', password: hashedPassword, role: 'member', membership_id: 2 },
            { username: 'kitti_smart', email: 'kitti.s@outlook.com', password: hashedPassword, role: 'member', membership_id: 3 },
            { username: 'napa_healthy', email: 'napa.h@gmail.com', password: hashedPassword, role: 'member', membership_id: 1 },
            { username: 'bob_builder', email: 'bob.b@mail.com', password: hashedPassword, role: 'member', membership_id: 2 },
            { username: 'alice_wonder', email: 'alice.w@gmail.com', password: hashedPassword, role: 'member', membership_id: 3 },
            { username: 'charles_p', email: 'charles.p@mail.com', password: hashedPassword, role: 'member', membership_id: 1 },
            { username: 'david_strong', email: 'david.s@gmail.com', password: hashedPassword, role: 'member', membership_id: 2 },
            { username: 'emma_fit', email: 'emma.f@mail.com', password: hashedPassword, role: 'member', membership_id: 1 },
            { username: 'frank_gym', email: 'frank.g@outlook.com', password: hashedPassword, role: 'member', membership_id: 3 },
            { username: 'grace_yoga', email: 'grace.y@mail.com', password: hashedPassword, role: 'member', membership_id: 2 }
        ];

        await User.bulkCreate(users);
        console.log('✅ Success: 15 Users seeded into FitLife System!');
    } catch (error) {
        console.error('❌ Error seeding users:', error);
    }
};

module.exports = seedUsers;