import {
    listarLaboratorios,
    buscarLaboratorio,
    cadastrarLaboratorio,
    atualizarLaboratorio,
    excluirLaboratorio
} from '../models/laboratorioModel.js';

async function listar(req, res) {
    try {
        const laboratorios = await listarLaboratorios();

        return res.status(200).json(laboratorios);
    } catch (erro) {
        console.error('Erro ao listar laboratorios:', erro);

        return res.status(500).json({
            mensagem: 'Erro ao buscar laboratorios'
        });
    }
}

async function buscar(req, res) {
    try {
        const laboratorio = await buscarLaboratorio(req.params.id);

        if (!laboratorio) {
            return res.status(404).json({
                mensagem: 'Laboratorio nao encontrado'
            });
        }

        return res.status(200).json(laboratorio);
    } catch (erro) {
        console.error('Erro ao buscar laboratorio:', erro);

        return res.status(500).json({
            mensagem: 'Erro ao buscar laboratorio'
        });
    }
}

async function cadastrar(req, res) {
    try {
        await cadastrarLaboratorio(req.body);

        return res.status(201).json({
            mensagem: 'Laboratorio cadastrado com sucesso'
        });
    } catch (erro) {
        console.error('Erro ao cadastrar laboratorio:', erro);

        return res.status(500).json({
            mensagem: 'Erro ao cadastrar laboratorio'
        });
    }
}

async function atualizar(req, res) {
    try {
        const atualizado = await atualizarLaboratorio(
            req.params.id,
            req.body
        );

        if (!atualizado) {
            return res.status(404).json({
                mensagem: 'Laboratorio nao encontrado'
            });
        }

        return res.status(200).json({
            mensagem: 'Laboratorio atualizado com sucesso'
        });
    } catch (erro) {
        console.error('Erro ao atualizar laboratorio:', erro);

        return res.status(500).json({
            mensagem: 'Erro ao atualizar laboratorio'
        });
    }
}

async function excluir(req, res) {
    try {
        const excluido = await excluirLaboratorio(req.params.id);

        if (!excluido) {
            return res.status(404).json({
                mensagem: 'Laboratorio nao encontrado'
            });
        }

        return res.status(200).json({
            mensagem: 'Laboratorio excluido com sucesso'
        });
    } catch (erro) {
        console.error('Erro ao excluir laboratorio:', erro);

        return res.status(500).json({
            mensagem: 'Erro ao excluir laboratorio'
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