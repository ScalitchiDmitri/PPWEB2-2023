const CategoriRepository = require('../../database/repositories/CategoriRepositories');

class CategoriService {
    async getAll(fields = undefined) {
        return await CategoriRepository.getAll(fields);
    }

    async getOne(id) {
        return await CategoriRepository.getOne(id);
    }

    async create(categori) {
        return await CategoriRepository.create(categori);
    }

    async update(id, categori) {
        const existingCategori = await CategoriRepository.getOne(id);
        if (existingCategori) {
            return await existingCategori.update(categori);
        }
        return null;
    }

    async delete(id) {
        return await CategoriRepository.delete(id);
    }
}

module.exports = new CategoriService();
