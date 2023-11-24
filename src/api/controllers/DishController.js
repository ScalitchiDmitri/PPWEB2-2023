const DishService = require('../services/DishService')

class DishController {
    async getAll(request, response) {
        try {
            return await response.status(200).json(await DishService.getAll([
                'id',
                'name',
                'price',
                'categoryId'
            ]))
        } catch (error) {
            return await response.status(500).json(JSON.stringify(error))
        }
    }

    async getOne(request, response) {
        try {
            const dish = await DishService.getOne(request.params.id)
            if (dish) {
                return response.status(200).json(dish)
            }
            return response.status(404).json()
        } catch (error) {
            return response.status(500).json(JSON.stringify(error))
        }
    }

    async create(request, response) {
        try {
            return response.status(200).json(await DishService.create(request.body));
        } catch (error) {
            return response.status(400).json(JSON.stringify(error))
        }
    }

    async update(request, response) {
        try {
            const existingDish = await DishService.getOne(request.params.id)
            if (existingDish) {
                return response.status(200).json(await existingDish.update(request.body));
            }
            return response.status(404).json();
        } catch (error) {
            return response.status(400).json(JSON.stringify(error))
        }
    }

    async delete(request, response) {
        try {
            return response.status(200).json(await DishService.delete(request.params.id))
        } catch (error) {
            return response.status(400).json(JSON.stringify(error))
        }
    }



}

module.exports = new DishController()