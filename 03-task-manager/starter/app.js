const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const connectDB = require('./DB/connect');
const notFound = require('./middleware/Not_Found');
require('dotenv').config();
const errorHandlerMiddleware = require('./middleware/error_handler')

// middleware
app.use(express.static('./public'))
app.use(express.json())

// routes
app.use('/api/v1/tasks', tasks);
app.use(notFound);
app.use(errorHandlerMiddleware);            

const port = process.env.PORT;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI).then(console.log("Connected To DB"))
        app.listen(port, () => console.log(`app listening on port ${port}....`));
    } catch (error) {
        console.log(error);
    }
}
start();

