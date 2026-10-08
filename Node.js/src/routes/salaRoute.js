import express from 'express';

import {
    listar,
    buscar,
    cadastrar,
    atualizar,
    excluir
} from '../controllers/salaController.js';

const router = express.Router();

router.get('/salas', listar);
router.get('/salas/:id', buscar);
router.post('/salas', cadastrar);
router.put('/salas/:id', atualizar);
router.delete('/salas/:id', excluir);

export default router;