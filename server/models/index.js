const User = require('./User');
const Location = require('./Location');
const Container = require('./Container');
const Item = require('./Item');

User.hasMany(Location,{
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Location.hasMany(Container, {
    foreignKey: 'location_id',
    onDelete: 'CASCADE'
});

Container.hasMany(Item,{
    foreignKey: 'container_id',
    onDelete: 'CASCADE'
});

module.exports = {
    User,
    Location,
    Container,
    Item
};

