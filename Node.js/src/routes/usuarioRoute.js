import express from 'express';

import {
    listar,
    buscar,
    cadastrar,
    atualizar,
    excluir
} from '../controllers/usuarioController.js';

const router = express.Router();

router.get('/usuarios', listar);

router.get('/usuarios/:id', buscar);

router.post('/usuarios', cadastrar);

router.put('/usuarios/:id', atualizar);

router.delete('/usuarios/:id', excluir);

<<<<<<< HEAD
export default router;
=======
export default router;
>>>>>>> c8fd5310246ba84f310843643a6e450d5902684b
