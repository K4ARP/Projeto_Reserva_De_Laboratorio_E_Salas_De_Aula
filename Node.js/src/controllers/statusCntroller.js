import {
    listarStatus,
    buscarStatus,
    cadastrarStatus,
    atualizarStatus,
    excluirStatus
} from '../models/statusModel.js';

async function listar(req, res) {
    try {
        const status = await listarStatus();

        return res.status(200).json(status);
    } catch (erro) {
        console.error('Erro ao listar status:', erro);

        return res.status(500).json({
            mensagem: 'Erro ao buscar status'
        });
    }
}

async function buscar(req, res) {
    try {
        const status = await buscarStatus(req.params.id);

        if (!status) {
            return res.status(404).json({
                mensagem: 'Status nao encontrado'
            });
        }

        return res.status(200).json(status);
    } catch (erro) {
        console.error('Erro ao buscar status:', erro);

        return res.status(500).json({
            mensagem: 'Erro ao buscar status'
        });
    }
}

async function cadastrar(req, res) {
    try {
        await cadastrarStatus(req.body);

        return res.status(201).json({
            mensagem: 'Status cadastrado com sucesso'
        });
    } catch (erro) {
        console.error('Erro ao cadastrar status:', erro);

        return res.status(500).json({
            mensagem: 'Erro ao cadastrar status'
        });
    }
}

async function atualizar(req, res) {
    try {
        const atualizado = await atualizarStatus(
            req.params.id,
            req.body
        );

        if (!atualizado) {
            return res.status(404).json({
                mensagem: 'Status nao encontrado'
            });
        }

        return res.status(200).json({
            mensagem: 'Status atualizado com sucesso'
        });
    } catch (erro) {
        console.error('Erro ao atualizar status:', erro);

        return res.status(500).json({
            mensagem: 'Erro ao atualizar status'
        });
    }
}

async function excluir(req, res) {
    try {
        const excluido = await excluirStatus(req.params.id);

        if (!excluido) {
            return res.status(404).json({
                mensagem: 'Status nao encontrado'
            });
        }

        return res.status(200).json({
            mensagem: 'Status excluido com sucesso'
        });
    } catch (erro) {
        console.error('Erro ao excluir status:', erro);

        return res.status(500).json({
            mensagem: 'Erro ao excluir status'
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