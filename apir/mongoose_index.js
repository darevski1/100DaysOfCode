const mongoose = require('mongoose');

// Create database connection

mongoose.connect('mongodb+srv://darevski:Banana007@vodno.kkcro.mongodb.net/student?retryWrites=true&w=majority',
    {
        useNewUrlParser: true
    }
);


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    return console.log("Yes we are connected");
});