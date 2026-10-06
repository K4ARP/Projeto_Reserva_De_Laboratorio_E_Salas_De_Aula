import 'dotenv/config.js';
import express from 'express';

import usuarioRoute from './src/routes/usuarioRoute.js';
import laboratorioRoute from './src/routes/laboratorioRoute.js';
import salaRoute from './src/routes/salaRoute.js';
import statusRoute from './src/routes/statusRoute.js';

const app = express();

app.use(express.json());

app.use(usuarioRoute);
app.use(laboratorioRoute);
app.use(salaRoute);
app.use(statusRoute);

const porta = process.env.PORTA || 8000;

app.listen(porta, () => {
    console.log(`Servidor rodando ${porta}`);
})