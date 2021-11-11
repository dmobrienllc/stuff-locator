const {seedUser} = require('./user-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    console.log('\n----- seedAll CALLED -----\n');
    await sequelize.sync({ force: true });
    console.log('\n----- DB SYNCED -----\n');
    let userResult = await seedUser();
    console.log('\n----- USER SEEDED, Result: \n',userResult.id);
}

seedAll();