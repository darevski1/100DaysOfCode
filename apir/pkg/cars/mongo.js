const mongoose = require('mongoose');

const Cars = mongoose.model(
    'cars',
    {
        carName: {
            type: String,
            required: true,
        },
        carModel: {
            type: String,
            required: true,
        },
        carYear: {
            type: String,
            required: true,
        },
        carGear: {
            type: String,
            required: true,
        },
        carEngine: {
            type: String,
            required: true,
        }
    },
    'cars',
);




const getAll = async () => {
    try {
        let data = await Cars.find();
        return data;
    } catch (err) {
        console.log(err);
    }
}
const getOne = async (id) => {
    try {
        let data = await Cars.findOne({ _id: id });
        return data;
    } catch (error) {
        console.log(err);
    }
}
const save = async (carsData) => {

    let car = new Cars(carsData);
    let data = await car.save();
    return data;

}
const update = async (id, carData) => {
    try {
        let data = await Cars.updateOne({ _id: id }, carData);
        return data;
    } catch (err) {
        console.log(err)
    }
}
const updatePartials = async (id, carData) => {
    try {
        let data = await Cars.updateOne({ _id: id }, carData);
        return data.nModified !== 0;
    } catch (err) {
        console.log(err);
    }
};
const remove = async (id) => {
    try {
        let data = await Cars.deleteOne({ _id: id });
        return data.deleteCount !== 0;
    } catch (err) {
        console.log(err)

    }
}



module.exports = {
    getAll,
    getOne,
    save,
    update,
    updatePartials,
    remove,

}