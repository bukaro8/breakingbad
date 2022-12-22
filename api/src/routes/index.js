const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const characters = require('./characters');
const router = Router();
router.use('/characters', characters);
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

module.exports = router;
