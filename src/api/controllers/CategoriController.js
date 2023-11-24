const CategoriService = require('../services/CategoriServices');

class CategoriController {
    async getAll(request, response) {
        try {
            const categori = await CategoriService.getAll(['id', 'name']);
            return response.status(200).json(categori);
        } catch (error) {
            return response.status(500).json({ error: error.message });
        }
    }

    async getOne(request, response) {
        try {

            const categori = await CategoriService.getOne(request.params.id);

            if (categori) {
                return response.status(200).json(categori);
            }

            return response.status(404).json({ message: 'categori not found' });
        } catch (error) {
            return response.status(500).json({ error: error.message });
        }
    }

    async create(request, response) {
        try {
            const newCategory = await CategoriService.create(request.body);
            return response.status(201).json(newCategory);
        } catch (error) {
            return response.status(400).json({ error: error.message });
        }
    }

    async update(request, response) {
        try {
            const existingCategori = await CategoriService.getOne(request.params.id);

            if (existingCategori) {
                const updatedCategori = await existingCategori.update(request.body);
                return response.status(200).json(updatedCategori);
            }
            return response.status(404).json({ message: 'Category not found' });
        } catch (error) {
            return response.status(400).json({ error: error.message });
        }
    }

    async delete(request, response) {
        try {
            const deletedCategori = await CategoriService.delete(request.params.id);
            return response.status(200).json(deletedCategori);
        } catch (error) {
            return response.status(400).json({ error: error.message });
        }
    }
}

module.exports = new CategoriController();