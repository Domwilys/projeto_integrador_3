const depoimentsModel = require("../models/depoimentsModel");

const getAll = async (req, res) => {
    const depoiments = await depoimentsModel.getAll();

    return res.status(200).json(depoiments);
}

const createDepoiment = async (req, res) => {
    const createdDepoiments = await depoimentsModel.createDepoiment(req.body);

    return res.status(201).json(createdDepoiments);
}

module.exports = {
    getAll,
    createDepoiment
}

