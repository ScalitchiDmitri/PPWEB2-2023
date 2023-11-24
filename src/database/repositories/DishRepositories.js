const Dish = require('../models').Dish;

class DishRepository {
    async getAll(fields = undefined) {
        return await Dish.findAll({ attributes: fields });
    }

    async getOne(id) {
        return await Dish.findByPk(id);
    }

    async create(dish) {
        return await Dish.create(dish);
    }

    async update(id, dish) {
        const existingDish = await Dish.findByPk(id);
        if (existingDish) {
            return await existingDish.update(dish);
        }
        return null;
    }

    async delete(id) {
        return await Dish.destroy({
            where: { id: id }
        });
    }
}

module.exports = new DishRepository();
