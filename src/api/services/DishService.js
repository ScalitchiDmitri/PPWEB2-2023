const DishRepository = require('../../database/repositories/DishRepositories');

class DishService {
    async getAll(fields = undefined) {
        return await DishRepository.getAll(fields);
    }

    async getOne(id) {
        return await DishRepository.getOne(id);
    }

    async create(dish) {
        return await DishRepository.create(dish);
    }

    async update(id, dish) {
        const existingDish = await DishRepository.getOne(id);
        if (existingDish) {
            return await existingDish.update(dish);
        }
        return null;
    }

    async delete(id) {
        return await DishRepository.delete(id);
    }
}

module.exports = new DishService();
