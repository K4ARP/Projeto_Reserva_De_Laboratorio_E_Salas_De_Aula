import 'dotenv/config';
import express from 'express';
import usuarioRoute from './src/routes/usuarioRoute.js';

const app = express();
app.use(express.json());
app.get('/', (req, res) => {
    res.json({
        mensagem: 'API de reservas está rodando',
        rotas: ['GET /usuarios', 'POST /usuarios']
    });
});

app.use(usuarioRoute);

const porta = process.env.PORTA || 8000;
app.listen(porta, () => {
    console.log(`Servidor rodando ${porta}`);
});

