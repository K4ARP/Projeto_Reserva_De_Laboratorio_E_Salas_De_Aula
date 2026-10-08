import 'dotenv/config';

import express from 'express';
import cors from 'cors';

import usuarioRoute from './src/routes/usuarioRoute.js';

const app = express();

app.use(cors());

app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        mensagem: 'API de reservas está rodando',
        rotas: [
            'GET /usuarios',
            'GET /usuarios/:id',
            'POST /usuarios',
            'PUT /usuarios/:id',
            'DELETE /usuarios/:id'
        ]
    });
});

app.use(usuarioRoute);

const porta = process.env.PORTA || 8000;

app.listen(porta, () => {
    console.log(`Servidor rodando ${porta}`);
});
