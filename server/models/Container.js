const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Container extends Model {};

Container.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        container_name:{
            type: DataTypes.STRING,
            allowNull: false
        },
        metadata:{
            type: DataTypes.STRING
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: false,
        modelName: 'container',
    }
)

module.exports = Container;