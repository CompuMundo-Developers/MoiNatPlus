const express = require("express")
const router = express.Router();

const { getUsers, newUser, getUserById, updateUser, deleteUser } = require("../controllers/usersController") //traemos la respuesta del json desde el controlador

router.route('/usuarios').get(getUsers); //Ruta para ver los usuarios listados
router.route('/usuario/registrar').post(newUser);  //establecemos la ruta para guardar el usuario
router.route('/usuario/:id').get(getUserById); //Ver los usuarios por id
router.route('/usuario/:id').put(updateUser);  //actualizar usuarios 
router.route('/usuario/:id').delete(deleteUser); //Eliminar usuarios

module.exports = router;