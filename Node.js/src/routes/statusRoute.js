import express from 'express';

import {
    listar,
    buscar,
    cadastrar,
    atualizar,
    excluir
} from '../controllers/statusController.js';

const router = express.Router();

router.get('/status', listar);
router.get('/status/:id', buscar);
router.post('/status', cadastrar);
router.put('/status/:id', atualizar);
router.delete('/status/:id', excluir);

export default router;