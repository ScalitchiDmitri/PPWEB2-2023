'use strict';

const { sequelize } = require("../models");

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('dishes', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            name: {
                type: Sequelize.STRING(50),
                allowNull: false,
                unique: true
            },
            price: {
                type: Sequelize.DECIMAL,
                allowNull: false
            },
            categoryId: {
                type: Sequelize.INTEGER,
                references: {
                    model: "categoris",
                    key: "id"

                },
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
            }
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('dishes');
    }
};