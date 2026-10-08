import {
    listarSalas,
    buscarSala,
    cadastrarSala,
    atualizarSala,
    excluirSala
} from '../models/salaModel.js';

async function listar(req, res) {
    try {
        const salas = await listarSalas();

        return res.status(200).json(salas);
    } catch (erro) {
        console.error('Erro ao listar salas:', erro);

        return res.status(500).json({
            mensagem: 'Erro ao buscar salas'
        });
    }
}

async function buscar(req, res) {
    try {
        const sala = await buscarSala(req.params.id);

        if (!sala) {
            return res.status(404).json({
                mensagem: 'Sala nao encontrada'
            });
        }

        return res.status(200).json(sala);
    } catch (erro) {
        console.error('Erro ao buscar sala:', erro);

        return res.status(500).json({
            mensagem: 'Erro ao buscar sala'
        });
    }
}

async function cadastrar(req, res) {
    try {
        await cadastrarSala(req.body);

        return res.status(201).json({
            mensagem: 'Sala cadastrada com sucesso'
        });
    } catch (erro) {
        console.error('Erro ao cadastrar sala:', erro);

        return res.status(500).json({
            mensagem: 'Erro ao cadastrar sala'
        });
    }
}

async function atualizar(req, res) {
    try {
        const atualizado = await atualizarSala(
            req.params.id,
            req.body
        );

        if (!atualizado) {
            return res.status(404).json({
                mensagem: 'Sala nao encontrada'
            });
        }

        return res.status(200).json({
            mensagem: 'Sala atualizada com sucesso'
        });
    } catch (erro) {
        console.error('Erro ao atualizar sala:', erro);

        return res.status(500).json({
            mensagem: 'Erro ao atualizar sala'
        });
    }
}

async function excluir(req, res) {
    try {
        const excluido = await excluirSala(req.params.id);

        if (!excluido) {
            return res.status(404).json({
                mensagem: 'Sala nao encontrada'
            });
        }

        return res.status(200).json({
            mensagem: 'Sala excluida com sucesso'
        });
    } catch (erro) {
        console.error('Erro ao excluir sala:', erro);

        return res.status(500).json({
            mensagem: 'Erro ao excluir sala'
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