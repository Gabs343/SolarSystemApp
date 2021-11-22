const express = require("express");
const router = express.Router();
const Usuario = require("../models/usuarioModel");

router.get("/", async (req, res) => {
    try{
        const usuarios = await Usuario.find();
        res.header("Access-Control-Allow-Origin", "*");
        res.json(usuarios);
    }catch(error){
        res.status(500).json({message: error.message});
    }
})

router.get("/:id", (req, res) => {
    
})

router.post("/", async (req, res) => {
    const usuario = new Usuario({
        name: req.body.name,
        lastName: req.body.lastName,
        age: req.body.age,
        mail: req.body.mail,
        password: req.body.password
    });

    try{
        const newUsuario = await usuario.save();
        res.status(201).json(newUsuario);
    }catch(error){
        res.status(400).json({message: error.message});
    }
})

router.patch("/", (req, res) => {
    
})

router.delete("/:id", (req, res) => {
    
})

module.exports = router;