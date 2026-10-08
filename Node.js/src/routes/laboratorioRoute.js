import express from 'express';

import {
    listar,
    buscar,
    cadastrar,
    atualizar,
    excluir
} from '../controllers/laboratorioController.js';

const router = express.Router();

router.get('/laboratorios', listar);
router.get('/laboratorios/:id', buscar);
router.post('/laboratorios', cadastrar);
router.put('/laboratorios/:id', atualizar);
router.delete('/laboratorios/:id', excluir);

export default router;