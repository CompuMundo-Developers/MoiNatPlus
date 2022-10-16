//Ver lista de todos los productos
exports.getProducts=async (req,res,next) =>{
    const productos= await producto.find();
    res.status(200).json({
        success:true,
        cantidad: productos.length,
        productos
    })
}

//Ver un producto por ID
exports.getProductById= async (req, res, next)=>{
    const product= await producto.findById(req.params.id)
    
    if (!product){
            return res.status(404).json({
            success:false,
            message: 'No encontramos ese producto'
        })
    }
    res.status(200).json({
        success:true,
        message:"Aqui debajo encuentras información sobre tu producto: ",
        product
    })
}

//Actualizacion de un producto
exports.updateProduct= async (req,res,next) =>{
    let product= await producto.findById(req.params.id) 
    if (!product){ //Verifico que el objeto no existe para finalizar el proceso
            return res.status(404).json({
            success:false,
            message: 'No encontramos ese producto'
        })
    }
    //Si el objeto si existia, entonces se ejecuta la actualización
    product= await producto.findByIdAndUpdate(req.params.id, req.body, {
        new:true, //Valido solo los atributos nuevos o actualizados
        runValidators:true
    });
    //Responde OK si el producto si se actualizó con exito
    res.status(200).json({
        success:true,
        message:"Producto actualizado correctamente",
        product
    })
}