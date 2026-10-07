import express from 'express';
import { listar, cadastrar } from '../controllers/usuarioController.js';

const router = express.Router();

router.get('/usuarios', listar);
router.post('/usuarios', cadastrar);

export default router;
