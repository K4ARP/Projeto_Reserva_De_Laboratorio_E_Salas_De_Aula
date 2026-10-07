import {
    listarUsuarios,
    cadastrarUsuario
} from '../models/usuarioModel.js';

async function listar(req, res) {
    try {
        const usuarios = await listarUsuarios();
        return res.status(200).json(usuarios);
    } catch (erro) {
        console.error('Erro ao listar usuarios:', erro.message);
        return res.status(500).json({ mensagem: 'Erro ao buscar usuarios' });
    }
}

async function cadastrar(req, res) {
    try {
        await cadastrarUsuario(req.body);
        return res.status(201).json({ mensagem: 'Usuario cadastrado com sucesso' });
    } catch (erro) {
        console.error('Erro ao cadastrar usuario:', erro.message);
        return res.status(500).json({ mensagem: 'Erro ao cadastrar usuario' });
    }
}

export { listar, cadastrar };
