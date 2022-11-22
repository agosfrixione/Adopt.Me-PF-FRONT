const express = require('express');
require('../db');
const UsuarioModel = require('../modelos/usuarios');
const router = express.Router();


router.post('/', async (req,res)=>{ 
        const user = await UsuarioModel(req.body);
    try {   
        if(user){
            await user.save();
          res.status(200).json(user)
        } else {
            res.status(400).json({msg: "no se creó el usuario"})  
        }         
        } catch (error) {
        res.status(400).json({msg: "no se creó el usuario"})
        }   
   
 });


router.get('/',  async (_req, res) => {
    try{
      let users = await UsuarioModel.find()
      res.status(200).json(users)
      }catch(error){
         res.status(400).json({msg: "no se encontró nada"})
      }

});

  
router.get("/:id", async (req, res) => {
    const { id } = req.params;
  try{
    let userId = await UsuarioModel.findById(id)
        if(userId){
          let u = await userId.save();
          res.status(200).json(u)
        }else{
          res.status(400).json(`${id} no encontrado`)  
        }         
     }catch(error) {
        res.status(400).json(`${id} no encontrado`)
            
}});




    router.delete("/:id", async (req, res) => {
        const { id } = req.params; //es lo que buscamos para eliminar
        try{
         await UsuarioModel.remove({_id: id})
         res.status(200).json(`el usuario  ${id} fue eliminado con exito`)
                     
        }catch(error){
            res.status(400).json(`el usuario ${id} fue  eliminado con exito`)
        }
    });
      
      module.exports = router;




