const Categori = require('../models').Categori;

class CategoriRepository {
    async getAll(fields = undefined) {
        return await Categori.findAll({
            attributes: fields,
        });
    }

    async getOne(id) {
        return await Categori.findByPk(id);
    }

    async create(categori) {
        return await Categori.create(categori);
    }

    async update(id, categori) {
        const existingCategori = await Categori.findByPk(id);
        if (existingCategori) {
            return await existingCategori.update(categori);
        }
        return null;
    }

    async delete(id) {
        return await Categori.destroy({
            where: { id: id }
        });
    }
}

module.exports = new CategoriRepository();