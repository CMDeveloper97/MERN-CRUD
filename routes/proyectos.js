const express = require('express');
const router = express.Router();
const proyectoController = require('../controllers/proyectoController');
const auth = require('../middleware/auth');
const { check } = require('express-validator');


// api/proyectos
router.post('/',
	[
		check('nombre', 'El nombre del proyecto es obligatoio').not().isEmpty()
	],
	auth,
	proyectoController.crearProyecto);

router.get('/',
	auth,
	proyectoController.obtenerProyectos);

router.get('/:id',
	auth,
	[
		check('nombre', 'El nombre del proyecto es obligatoio').not().isEmpty()
	],
	proyectoController.actualizarProyecto);

router.delete('/:id',
	auth,
	proyectoController.eliminarProyecto);



module.exports = router;