import 'dotenv/config';

import express from 'express';
import cors from 'cors';

import usuarioRoute from './src/routes/usuarioRoute.js';
import laboratorioRoute from './src/routes/laboratorioRoute.js';
import salaRoute from './src/routes/salaRoute.js';
import statusRoute from './src/routes/statusRoute.js';

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
            'DELETE /usuarios/:id',

            'GET /laboratorios',
            'GET /laboratorios/:id',
            'POST /laboratorios',
            'PUT /laboratorios/:id',
            'DELETE /laboratorios/:id',

            'GET /salas',
            'GET /salas/:id',
            'POST /salas',
            'PUT /salas/:id',
            'DELETE /salas/:id',

            'GET /status',
            'GET /status/:id',
            'POST /status',
            'PUT /status/:id',
            'DELETE /status/:id'
        ]
    });
});

app.use(usuarioRoute);
app.use(laboratorioRoute);
app.use(salaRoute);
app.use(statusRoute);

const porta = process.env.PORTA || 8000;

app.listen(porta, () => {
    console.log(`Servidor rodando ${porta}`);
});