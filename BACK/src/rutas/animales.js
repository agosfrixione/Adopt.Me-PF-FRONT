const express = require("express");
require("../db");
//const AnimalModel = require("../modelos/animales");
const router = express.Router();
const infoAnimal = require("../controllers/animalInfo");

router.post("/", postAnimal);

router.get("/", getAnimales);

router.get("/:id", getDetalleAnimal);

router.put("/:id", putAnimal);

router.delete("/:id", deleteAnimal);

module.exports = router;
