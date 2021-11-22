const express = require("express");
const router = express.Router();
const SolarSystem = require("../models/solarSystemModel");

router.get("/", async (req, res) => {
    try{
        const solarSyst = await SolarSystem.find();
        res.header("Access-Control-Allow-Origin", "*");
        res.json(solarSyst);
    }catch(error){
        res.status(500).json({message: error.message});
    }
});

router.get("/:name", async (req, res) => {
    try{
        const solarSyst = await SolarSystem.find({name: req.params.name});
        res.header("Access-Control-Allow-Origin", "*");
        res.json(solarSyst);
    }catch(error){
        res.status(500).json({message: error.message});
    }
});

/*router.get("/planet/", async (req, res) =>{
    try{
        const planets = await SolarSystem.find({category: "Planet"});
        res.header("Access-Control-Allow-Origin", "*");
        res.json(planets);
    }catch(error){
        res.status(500).json({message: error.message});
    }
});

router.get("/planet/:name", async (req, res) =>{
    try{
        const planet = await SolarSystem.find({name: req.params.name, category: "planet"});
        res.header("Access-Control-Allow-Origin", "*");
        res.json(planet);
    }catch(error){
        res.status(500).json({message: error.message});
    }
});*/

router.post("/", async(req, res) =>{
    const element = new SolarSystem({
        src: req.body.src,
        name: req.body.name,
        category: req.body.category,
        mass: req.body.mass,
        discoveryDate: req.body.discoveryDate,
        discoveryBy: req.body.discoveryBy
    });

    try{
        const newElement = await element.save();
        res.status(201).json(newElement);  
    }catch(error){
        res.status(400).json({message: error.message});
    }
});

module.exports = router;




