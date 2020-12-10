const jsonFile = require("../files");
const dataFile = './cars.json';

// read the file
const getAll = async () => {
    let data = await jsonFile.readJsonFile(dataFile);
    return data;
};

const getOne = async (id) => {
    let data = await jsonFile.readJsonFile(dataFile);
    let result = data.filter(car => car.id === Number(id));
    return result[0];
}
const save = async (carData) => {
    let data = await jsonFile.readJsonFile(dataFile);
    let id = data[data.length - 1].id + 1;
    userData = {
        id,
        ...carData
    };
    data = [
        ...data,
        carData
    ]
    await jsonFile.writeJsonFile(dataFile, data);
    return carData;
}
const update = async (id, carData) => {
    let data = await jsonFile.readJsonFile(dataFile);
    let changes = false;

    data = data.map(car => {
        if (car.id === Number(id)) {
            car = { ...carData, id: Number(id) };
            changes = true;
        }
        return car;
    });
    await jsonFile.writeJsonFile(dataFile, data);
    return changes;
}


const updatePartial = async (id, userData) => {
    let data = await jsonFile.readJsonFile(dataFile);
    let changed = false;
    data = data.map(u => {
        if (u.id === Number(id)) {
            for (k in userData) {
                u[k] = userData[k];
            }
            changed = true;
        }
        return u;
    });
    await jsonFile.writeJsonFile(dataFile, data);
    return changed;
};

const remove = async (id) => {
    let data = await jsonFile.readJsonFile(dataFile);
    let changed = false;
    data = data.filter(u => {
        if (u.id !== Number(id)) {
            changed = true;
            return true;
        }
        return false;
    });
    await jsonFile.writeJsonFile(dataFile, data);
    return changed;
};

module.exports = {
    getAll,
    getOne,
    save,
    update,
    updatePartial,
    remove
};