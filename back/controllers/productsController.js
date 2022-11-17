const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const producto = require("../models/productos");
const ErrorHandler = require("../utils/errorHandler");
const fetch = (url) => import('node-fetch').then(({ default: fetch }) => fetch(url)); //Usurpación del require


//ver lista de productos
exports.getProducts = catchAsyncErrors(async (req, res, next) => {
    const productos = await producto.find();
    if (!productos) {
        return next(new ErrorHandler("Informacion no encontrada", 404))

    }
    res.status(200).json({
        success: true,
        cantidad: productos.length,
        productos
    })
})

// ver productos por id
exports.getProductById = catchAsyncErrors(async (req, res, next) => {
    const product = await producto.findById(req.params.id);
    if (!product) {
        return next(new ErrorHandler("producto no encontrado, 400"))
    }
    res.status(200).json({
        success: true,
        message: 'Informacion del producto solicitado',
        product

    })
})

//actualizar o editar un producto
exports.updateProduct = catchAsyncErrors(async (req, res, next) => {
    let product = await producto.findById(req.params.id);
    if (!product) {
        return next(new ErrorHandler("Producto no encontrado", 404))
    }
    product = await producto.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    });
    res.status(200).json({
        success: true,
        message: 'Producto actualizado correctamente',
        product
    })
})

exports.deleteProduct = catchAsyncErrors(async (req, res, next) => {
    const product = await producto.findById(req.params.id);
    if (!product) {  //verificamos si llega null 
        return next(new ErrorHandler("Producto no encontrado", 404))
    }

    await product.remove();
    res.status(200).json({
        succes: true,
        message: 'Producto eliminado correctamente'
    })
})

//Crear nuevo Producto /api/productos
exports.newProduct = catchAsyncErrors(async (req, res, next) => {
    req.body.user = req.user.id;
    const product = await producto.create(req.body);

    res.status(201).json({
        success: true,
        product
    })
})


//utilizacion del fetch
//ver todos los productos
function verProductos() {
    fetch('http://127.0.0.1:4000/api/productos')
        .then(res => res.json())
        .then(res => console.log(res))
        .catch(err => console.error(err))
}

//verProductos();

//ver por id
function verProductosPorId(id) {
    fetch('http://127.0.0.1:4000/api/producto/' + id)
        .then(res => res.json())
        .then(res => console.log(res))
        .catch(err => console.error(err))
}