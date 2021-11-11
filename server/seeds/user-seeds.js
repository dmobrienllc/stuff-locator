//const { default: ModelManager } = require('sequelize/types/lib/model-manager');
const { User } = require('../models')

const userData = {
    user_name: 'Jenna Sativa',
    email: 'Jenna@gmail.com',
    password: 'Hashed PW'
}

const seedUser = async () => {
    const response = await User.create(userData);
    return response;
}

module.exports = {
    seedUser
}