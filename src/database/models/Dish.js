'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Dish extends Model {
        static associate(models) {
            Dish.belongsTo(models.Categori);
        }
    }

    Dish.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(50)
        },
        price: {
            type: DataTypes.DECIMAL
        },
        CategoriId: {
            type: DataTypes.INTEGER
        }
    }, {
        sequelize,
        modelName: 'Dish'
    });

    return Dish;
};