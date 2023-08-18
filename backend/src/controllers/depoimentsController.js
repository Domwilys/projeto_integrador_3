const { response } = require("express");
const depoimentsModel = require("../models/depoimentsModel");

const getAll = async (req, res) => {
    const depoiments = await depoimentsModel.getAll();

    return res.status(200).json(depoiments);
}

const createDepoiment = async (req, res) => {
    const createdDepoiments = await depoimentsModel.createDepoiment(req.body);

    return res.status(201).json(createdDepoiments);
}

const deleteDepoiment = async (req, res) => {
    const { id } = req.params;

    await depoimentsModel.deleteDepoiments(id);
    return res.status(204).json();
}

const updateDepoiment = async (req, res) => {
    const { id } = req.params;

    await depoimentsModel.updateDepoiments(id, req.body);
    return res.status(204).json();
}

const getOne = async (req, res) => {
    const { id } = req.params;

    const getOneResponse = await depoimentsModel.getOne(id);

    return res.status(200).json(getOneResponse);
}

module.exports = {
    getAll,
    createDepoiment,
    deleteDepoiment,
    updateDepoiment,
    getOne
}

