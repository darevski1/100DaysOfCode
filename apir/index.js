// import db connection
// const db = require("./pkg/db/index");


const express = require("express");
const bodyParser = require("body-parser");
const cars = require('./handlers/cars');
const api = express();



api.use(bodyParser.json());


api.get('/cars', cars.getAll);
api.get('/cars/:id', cars.getOne);
api.post('/cars', cars.save);
api.put('/cars/:id', cars.update);
api.patch('cars/:id', cars.updatePartials);
api.delete('/cars/:id', cars.remove);



api.listen(9000, err => {
    if (err) {
        console.log(err);
    }
    console.log('Server stared on port 9000');
})


