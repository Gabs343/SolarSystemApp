const mongoose = require("mongoose");

const solarSystemSchema = new mongoose.Schema({
    src:{
        type: String,
        required: true
    },

    name:{
        type: String,
        required: true
    },

    category:{
        type: String,
        required: true
    },

    mass:{
        type: String,
        required: true
    },

    discoveryDate:{
        type: String,
        required: false
    },

    discoveryBy:{
        type: String,
        required: false
    }
});

module.exports = mongoose.model("SolarSystem", solarSystemSchema);