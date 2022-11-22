const express = require('express');
require('../db');
const AnimalModel = require('../modelos/animales');
const router = express.Router();

router.post('/', async (req,res)=>{ 
    try {
        const animal = await AnimalModel (req.body);
        if(animal)animal.save();
        await res.status(200).json(animal)
        console.log(animal);      
              
    } catch (error) {
        res.status(400).json()
    }   
   
 });

module.exports = router;