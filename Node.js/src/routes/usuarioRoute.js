import express from 'express';
import {
    listar,
    cadastrar,
    buscar,
    atualizar,
    excluir
} from '../controllers/usuarioController.js';

const router = express.Router();

router.get('/usuarios', listar);

router.post('/usuarios', cadastrar);

router.get('/usuario/:id', buscar);

router.put('/usuarios/:id', atualizar);

router.delete('/usuario/:id', excluir);

export default router;