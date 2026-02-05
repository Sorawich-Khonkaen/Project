const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database/database.sqlite',
  logging: false
});

const Member = require('./Member')(sequelize);
const Trainer = require('./Trainer')(sequelize);
const Class = require('./Class')(sequelize);
const Enrollment = require('./Enrollment')(sequelize);

// Trainer 1 → Many Class
Trainer.hasMany(Class, { foreignKey: 'trainerId', onDelete: 'CASCADE' });
Class.belongsTo(Trainer, { foreignKey: 'trainerId' });

// Many-to-Many Member ↔ Class
Member.belongsToMany(Class, { through: Enrollment, foreignKey: 'memberId' });
Class.belongsToMany(Member, { through: Enrollment, foreignKey: 'classId' });

// Direct access Enrollment
Member.hasMany(Enrollment, { foreignKey: 'memberId' });
Enrollment.belongsTo(Member, { foreignKey: 'memberId' });

Class.hasMany(Enrollment, { foreignKey: 'classId' });
Enrollment.belongsTo(Class, { foreignKey: 'classId' });

module.exports = {
  sequelize,
  Member,
  Trainer,
  Class,
  Enrollment
};
