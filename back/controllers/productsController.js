const producto = require('../models/productos')

//ver lista de productos
exports.getProducts = async(req, res, next) => {
    const productos = await producto.find();
    res.status(200).json({
        success: true,
        count: productos.length,
        productos
    })
}

// ver productos por id
exports.getProductById = async(res, req, next)=>{
    const product = await producto.findById(req.params.id);
    if (!product){
        return res.status(404).json({
            success: false,
            message: 'Producto no encontrado'
        })
    }
    res.status(200).json({
        success:true,
        message: 'Informacion del producto solicitado',
        product

    })
}

//actualizar o editar un producto
exports.updateProduct = async(res, req, next)=>{
    let product = await producto.findById(req.params.id);
    if (!product){
        return res.status(404).json({
            success: false,
            message: 'Producto no encontrado'
        })
    }
    product = await producto.findByIdAndUpdate(req.params.id, req.body,{
        new:true,
        runValidators:true
    });
    res.status(200).json({
        success:true,
        message:'Producto actualizado correctamente',
        product
    })
}

exports.deleteProduct = async(req, res, next)  =>{
    const product = await producto.findById(req.params.id);
    if (!product){  //verificamos si llega null 
        return res.status(404).json({
            success: false,
            message: 'No se encontro ese producto'
        })
    }

    await product.remove();
    res.status(200).json({
        succes:true,
        message: 'Producto eliminado correctamente'
    })
}

//Crear nuevo Producto /api/productos
exports.newProduct=async(req, res, next)=>{
    const product= await producto.create(req.body);

    res.status(201).json({
        success:true,
        product
    })
}
