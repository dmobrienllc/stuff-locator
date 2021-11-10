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
        label:{
            type: DataTypes.STRING,
            allowNull: false
        },
        is_virtual: {
            type: DataTypes.BOOLEAN
        },
        metadata:{
            type: DataTypes.STRING
        },
        location_id: {
            type: DataTypes.INTEGER,
            allowNull:false,
            references:{
                model:'location',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: false,
        modelName: 'container',
    }
)

module.exports = Container;