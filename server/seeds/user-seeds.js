//const { default: ModelManager } = require('sequelize/types/lib/model-manager');
const { User } = require('../models')

const userData = {
    user_name: 'Christy Canyon',
    email: 'Christy@gmail.com',
    password: 'Hashed PW'
}

const userData2 = {
    user_name: 'Kimmi Supervixxen',
    email: 'Kimmi@gmail.com',
    password: 'Hashed PW'
}

const seedUserAsyncResult = async () => {
    const response = await User.create(userData);
                            //     .catch(err => {
                            //     console.log("ERROR: ", err)
                            //     return 0;
                            // });
    return response;
}

const seedUserAsyncResult2 = async () => {
    const response = await User.create(userData2);
                            //     .catch(err => {
                            //     console.log("ERROR: ", err)
                            //     return 0;
                            // });
    return response;
}

module.exports = {
            seedUserAsyncResult,
            seedUserAsyncResult2
}