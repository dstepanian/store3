const express = require('express');

require('dotenv').config();

const app = express();
const api = require('./routes')
const mongoose = require("mongoose");

app.use(express.json());

app.use('/', api);


// app.use(require('./middlewares/errorMiddleware'));

const PORT = process.env.PORT || 5000;
////////////////////////////////////////////////////////
// WE NEED THIS FUNCTION TO ADD SOME DATA TO DATABASE //
////////////////////////////////////////////////////////
const Brand = require('./models/Brand')

const brands = ["Apple"]

const one = async () => {
    try {
        for (const brand of brands) {
            const newBrand = new Brand({
                name: brand
            })
            await newBrand.save()
            console.log(newBrand);
        }
    } catch (e) {
        console.log(e);
    }
}
////////////////////////////////////////////////////////
// WE NEED THIS FUNCTION TO ADD SOME DATA TO DATABASE //
////////////////////////////////////////////////////////


const start = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI)
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
        // one()
    } catch (err) {
        console.log(err);
    }
}

start()

