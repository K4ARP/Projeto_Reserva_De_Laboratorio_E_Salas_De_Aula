import {
    listarUsuarios,
    buscarUsuario,
    cadastrarUsuario,
    atualizarUsuario,
    excluirUsuario
} from '../models/usuarioModel.js';

async function listar(req, res) {
    try {
        const usuarios = await listarUsuarios();

        return res.status(200).json(usuarios);

    } catch (erro) {
        console.error('Erro ao listar usuarios:', erro);

        return res.status(500).json({
            mensagem: 'Erro ao buscar usuarios'
        });
    }
}

async function buscar(req, res) {
    try {
        const usuario = await buscarUsuario(req.params.id);

        if (!usuario) {
            return res.status(404).json({
                mensagem: 'Usuario nao encontrado'
            });
        }

        return res.status(200).json(usuario);

    } catch (erro) {
        console.error('Erro ao buscar usuario:', erro);

        return res.status(500).json({
            mensagem: 'Erro ao buscar usuario'
        });
    }
}

async function cadastrar(req, res) {
    try {
        await cadastrarUsuario(req.body);

        return res.status(201).json({
            mensagem: 'Usuario cadastrado com sucesso'
        });

    } catch (erro) {
        console.error('Erro ao cadastrar usuario:', erro);

        return res.status(500).json({
            mensagem: 'Erro ao cadastrar usuario'
        });
    }
}

async function atualizar(req, res) {
    try {
        const atualizado = await atualizarUsuario(
            req.params.id,
            req.body
        );

        if (!atualizado) {
            return res.status(404).json({
                mensagem: 'Usuario nao encontrado'
            });
        }

        return res.status(200).json({
            mensagem: 'Usuario atualizado com sucesso'
        });

    } catch (erro) {
        console.error('Erro ao atualizar usuario:', erro);

        return res.status(500).json({
            mensagem: 'Erro ao atualizar usuario'
        });
    }
}

async function excluir(req, res) {
    try {
        const excluido = await excluirUsuario(req.params.id);

        if (!excluido) {
            return res.status(404).json({
                mensagem: 'Usuario nao encontrado'
            });
        }

        return res.status(200).json({
            mensagem: 'Usuario excluido com sucesso'
        });

    } catch (erro) {
        console.error('Erro ao excluir usuario:', erro);

        return res.status(500).json({
            mensagem: 'Erro ao excluir usuario'
        });
    }
}

export {
    listar,
    buscar,
    cadastrar,
    atualizar,
    excluir
};
