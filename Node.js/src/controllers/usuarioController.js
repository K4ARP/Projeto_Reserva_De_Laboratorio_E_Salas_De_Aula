import {
    listarUsuarios,
    cadastrarUsuario,
    buscarUsuario,
    atualizarUsuario,
    excluirUsuario
} from '.../models/usuarioModel.js';

async function listar(req, res){
    try {
        const usuarios = await listarUsuarios();

        res.status(200).json(usuarios);

    }
    catch(erro){
        console.log("Erro ao listar usuarios", erro);

        res.status(500).json({
            mensagem: "Erro ao buscar usuarios"
        });
    }
}

async function cadastrar(req, res){
    try {
        const usuario = cadastrarUsuario(req.body);

        res.status(201).json(usuario);
    }
    catch(erro){
        console.log("Erro ao cadastar usuario", erro);

        res.status(500).json({
            mensagem: "Erro ao cadastrar usuario"
        });
    }
    
}

async function buscar(req, res){
    try {
        const usuario = await buscarUsuario(req.params.id);

        if (!usuario){
            res.status(404).json({
                mensagem: "Usuario não encontrado"
            });
        }

        res.status(200).json(usuario);
    }
    catch(erro){
        console.log("Erro ao buscar usuario", erro);

        res.status(500).json({
            mensagem: "Erro ao buscar usuario"
        });
    }
    
}

async function atualizar(req, res){
    try {
        const usuario = await atualizarUsuario(
            req.params.id,
            req.body
        );

        if (!usuario){
            return res.status(404).json({
                mensagem: "Erro ao atualizar usuario"
            });
        }

        res.status(200).json(usuario);
    }
    catch(erro){
        console.log("Erro ao atualizar usuario", erro);

        res.status(500).json({
            mensagem: "Erro ao atualizar usuario"
        });
    }   
    
}

async function excluir(req, res){
    try {
        const usuario = await excluirUsuario(req.params.id);

        if (!usuario){
            return res.status(404).json({
                mensagem: "Usuario não encontrado"
            });
        }

        await excluirUsuario(req.params.id);

        res.status(200).json({
            mensagem: "Usuario excluido com sucesso"
        });
    }
    catch(erro){
        console.log("Erro ao excluir usuario", erro);

        res.status(500).json({
            mensagem: "Errro ao excluir usuario"
        });
    }
}

export {
    listar,
    cadastrar,
    buscar,
    atualizar,
    excluir
};