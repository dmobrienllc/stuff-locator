const {Model,DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Location extends Model {};

Location.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        label:{
            type: DataTypes.STRING,
            allowNull: false
        },
        metadata:{
            type: DataTypes.STRING
        },
        user_id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: false,
        modelName: 'location',
    }
);

module.exports = Location;