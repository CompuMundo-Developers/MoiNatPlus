const usuario = require('../models/usuarios');
const bcrypt = require('bcrypt');

// ver usuario por id
exports.getUserById = async(res, req, next)=>{
    const user = await usuario.findById(req.params.id);
    if(!user){
        return res.status(404).json({
            success:false,
            message:'Usuario no encontrado'
        })
    }
    res.status(200),json({
        success:true,
        message: 'Informacion del Usuario solicitado',
        user
    })

}


//editar usuario
exports.updateUser = async(res, req, next) =>{
    let user= await usuario.getUserById(req.params.id);
    if(!user){
        return res.status(404).json({
            success:false,
            message:'Usuario no encontrado'
        })
    }
    user = await usuario.findByIdAndUpdate(req.params.id, req.body,{
        new:true,
        runValidators:true
    });
    res.status(200).json({
        success:true,
        message:'Usuario actualizado correctamente',
        user
    })
}

exports.deleteUser = async(req, res, next)  =>{
    const user = await usuario.findById(req.params.id);
    if (!user){  //verificamos si llega null 
        return res.status(404).json({
            success: false,
            message: 'Usuario no encontrado'
        })
    }

    await user.remove();
    res.status(200).json({
        succes:true,
        message: 'Usuario eliminado correctamente'
    })
}


exports.newUser=async(req, res, next)=>{
    //const user= await usuario.create(req.body);
    const {nombre, email,password} = req.body

    
    usuario.findOne({email}).then((user)=> {
        if(user){
           return res.json({mensaje:"El usuario ya se encuentra registrado"}) 
        } else if(!nombre || !email || !password){
            return res.json({mensaje:'Fatan alguno de estos item nombr/email/password'})
        }else {
            bcrypt.hash(password, 10, (error, passwordaHasheado) =>{
                if(EvalError) {
                    res.json({error })
                } else {
                    const nuevoUsuario = new usuario({
                        nombre,
                        email,
                        password:passwordaHasheado
                    });
                    await nuevoUsuario.save()
                        .then((user)=>{
                        res.status(200).json({
                            succes:true,
                            message: 'Usuario Creado correctamente',
                            user
                         })
                         .catch((error) => console.error (error) )
                }
            }
        }
    });
}