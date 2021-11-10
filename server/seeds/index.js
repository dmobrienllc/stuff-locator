const {seedUserAsyncResult,seedUserAsyncResult2} = require('./user-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    console.log('\n----- seedAll CALLED -----\n');
    await sequelize.sync({ force: true });
    console.log('\n----- DB SYNCED -----\n');
    let userResult = await seedUserAsyncResult();
    console.log('\n----- USER SEEDED, Result: \n',userResult.id);
    let userResult2 = await seedUserAsyncResult2();
    console.log('\n----- USER2 SEEDED, Result: \n',userResult2.id);
}

seedAll();