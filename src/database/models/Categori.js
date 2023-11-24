'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Categori extends Model {
        static associate(models) {
            Categori.hasMany(models.Dish);
        }
    }

    Categori.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(50)
        },

    }, {
        sequelize,
        modelName: 'Categori'
    });

    return Categori;
};