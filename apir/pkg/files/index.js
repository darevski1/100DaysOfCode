const fs = require("fs");


const writeJsonFile = (file, data) => {
    return new Promise((success, fail) => {
        fs.writeFile(file, JSON.stringify(data), err => {
            if (err) {
                return fail(err);
            }
            return success(data);
        });
    });
};

const readJsonFile = (file) => {
    return new Promise((success, fail) => {
        fs.readFile(file, 'utf8', (err, data) => {
            if (err) {
                return fail(err);
            }
            return success(JSON.parse(data));
        });
    });
};

module.exports = {
    writeJsonFile,
    readJsonFile
}