// const carModel = require("../pkg/cars/");
const carModel = require('../pkg/cars/mongo');

const getAll = async (req, res) => {
    try {
        let data = await carModel.getAll();
        return res.status(200).send(data);
    } catch (err) {
        console.log(err);
        return res.status(500).send("Internal Server Error");
    }
}

const getOne = async (req, res) => {
    try {
        let data = await carModel.getOne(req.params.id);
        if (data) {
            return res.status(200).send(data);
        }
        return res.status(404).send("Not Found");
    } catch (err) {
        console.log(err);
        return res.status(500).send("Internal Server Error");
    }
}

const save = async (req, res) => {
    try {
        let data = await carModel.save(req.body);
        return res.status(200).send(data);
    } catch (err) {
        console.log(err);
        return res.status(500).send("Internal Server Error");
    }
}

const update = async (req, res) => {
    try {
        let data = await carModel.update(req.params.id, req.body);
        if (data) {
            return res.status(204).send("No Content");
        }
        return res.status(500).send("Internal Server Error");

    } catch (err) {
        console.log(err);
        return res.status(500).send("Internal Server Error");
    }
}

const updatePartials = async (req, res) => {
    try {
        let car = await carModel.updatePartials(req.params.id, req.body);
        if (car) {
            return res.status(204).send('No Content');
        }
        return res.status(404).send('Not Found');
    } catch (err) {
        console.log(err);
        return res.status(500).send('Internal Server Error');
    }
}

const remove = async (req, res) => {
    try {
        let car = await carModel.remove(req.params.id);
        if (car) {
            return res.status(204).send('No Content');
        }
        return res.status(404).send('Not Found');
    } catch (err) {
        console.log(err);
        return res.status(500).send('Internal Server Error');
    }
}

module.exports = {
    getAll,
    getOne,
    save,
    update,
    updatePartials,
    remove
}