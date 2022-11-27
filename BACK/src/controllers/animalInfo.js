const { isObjectIdOrHexString } = require("mongoose");
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


getPerrosByName = async (req, res) => {
  try {
    const { nombre } = req.query;
    console.log({nombre});
    let mascotaName= await AnimalModel.find({nombre: nombre}); 
    console.log(mascotaName);
    res.status(200).send(mascotaName);
    
  } catch (error) {
    res.status(400).json(`no encontrado`);
  }
};

getGatosByName = async (req, res) => {
  try {
    const { nombre } = req.query;
    console.log({nombre});
    let gatoName= await AnimalModel.find({nombre: nombre}); 
    console.log(gatoName);
    res.status(200).send(gatoName);
    
  } catch (error) {
    res.status(400).json(`no encontrado`);
  }
};

/* getPerrosByName = async (req,res) => {  
  const nombre = req.query.nombre;
  const allDogs = await getPerros()
    try {
      if(nombre) {
        const dogSelected = await allDogs.filter((d) => d.nombre.toLowerCase().includes(nombre.toLowerCase()))
        if (dogSelected.length){
          return res.status(200).json(dogSelected)
         }else{
          return res.status(400).json({error: 'The dog is at the park'})
        }
      }else {
        return res.status(201).json(allDogs) 
      }
    } catch (error) {
      res.json({error: 'The dog is at the park'})
    }
}   */


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
  try {
    const {  
      _id: _id,    
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
      imagen,} = req.body;

      const animales = await new AnimalModel({
      _id: _id,
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
      })    
      if (animales.length) await animales.save()
      const nuevoAnimal = await animales.save()      
      res.status(200).json(nuevoAnimal)      
    
  } catch (error) {
    res.status(400).json({ msg: "no se creó el posteo" });
  }
};

getDetalleAnimal = async (req, res) => {
  try {
    const { id } = req.params;
    console.log({id});
    let anmId = await AnimalModel.findById(id); 
    console.log(anmId);
    res.status(200).send(anmId);
    
  } catch (error) {
    res.status(400).json(`no encontrado`);
  }
};

putAnimal = async (req, res) => {
  const { id } = req.params; 
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
  const { id } = req.params;
  try {
    await AnimalModel.remove({ _id: id });
    res.status(200).json(`la mascota ${id} eliminado con exito`);
  } catch (error) {
    res.status(400).json(`la mascota ${id} no se pudo eliminar`);
  }
};

module.exports = infoAnimal;
