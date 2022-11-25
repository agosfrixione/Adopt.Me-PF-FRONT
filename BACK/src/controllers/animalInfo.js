const AnimalModel = require("../modelos/animales");
const infoAnimal = {};

getAnimales = async (req, res) => {
  try {
    let animales1 = await AnimalModel.find();
    res.status(200).json(animales1);
  } catch (error) {
    res.status(400).json({ msg: "no se encontró nada" });
  }
};

getPerros = async (req,res) => {  
    try {
    let animalitos = await AnimalModel.find({perro: true});
    console.log(animalitos);           
    if(animalitos.length) 
    await res.status(200).json(animalitos)
  } catch (error) {
    res.status(400).json('UPS! no se encontraron perritos')    
  }
}

getGatos = async (req,res) => {
  try {
    let animalitos1 = await AnimalModel.find({gato: true});
    console.log(animalitos1);
    if(animalitos1.length)
    await res.status(200).json(animalitos1) 
  } catch (error) {
    res.status(400).json('UPS! No se encontraron gatitos')   
  }
}

postAnimal = async (req, res) => {
  const animal = await AnimalModel(req.body);
  try {
    if (animal) {
      await animal.save();
      res.status(200).json(animal);
    } else {
      res.status(400).json({ msg: "no se creó el posteo" });
    }
  } catch (error) {
    res.status(400).json({ msg: "no se creó el posteo" });
  }
};

getDetalleAnimal = async (req, res) => {
  const { id } = req.params;
  try {
    let anmId = await AnimalModel.findById(id);
    if (anmId) {
      let a = await anmId.save();
      res.status(200).json(a);
    } else {
      res.status(400).json(`${id} no encontrado`);
    }
  } catch (error) {
    res.status(400).json(`${id} no encontrado`);
  }
};

putAnimal = async (req, res) => {
  const { id } = req.params; //es lo que buscamos
  const {
    perro,
    gato,
    nombre,
    raza,
    edad,
    estado,
    tamaño,
    peso,
    localidad,
    descripcion,
    castrado,
    vacunado,
    imagen,
  } = req.body;
  try {
    let mascota = await AnimalModel.updateOne(
      { _id: id },
      {
        $set: {
          perro,
          gato,          
          nombre,
          raza,
          edad,
          estado,
          tamaño,
          peso,
          localidad,
          descripcion,
          castrado,
          vacunado,
          imagen,
        },
      }
    );
    if (mascota) {
      res.status(200).json(mascota);
    } else {
      res.status(400).json({ msg: "no coincide el id que deseas modificar" });
    }
  } catch (error) {
    console.log(error);
  }
};

deleteAnimal = async (req, res) => {
  const { id } = req.params; //es lo que buscamos para eliminar
  try {
    await AnimalModel.remove({ _id: id });
    res.status(200).json(`la mascota ${id} eliminado con exito`);
  } catch (error) {
    res.status(400).json(`la mascota ${id} no se pudo eliminar`);
  }
};

module.exports = infoAnimal;
