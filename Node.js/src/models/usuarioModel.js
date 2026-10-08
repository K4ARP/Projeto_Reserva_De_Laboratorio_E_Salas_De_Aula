import conectaBD from '../config/dbConexao.js';

async function listarUsuarios() {
    const bd = await conectaBD();

    const resultado = await bd.query(`
        SELECT *
        FROM Usuario
    `);

    return resultado.recordset;
}

async function buscarUsuario(id) {
    const bd = await conectaBD();

    const resultado = await bd.request()
        .input('id', Number(id))
        .query(`
            SELECT *
            FROM Usuario
            WHERE id = @id
        `);

    return resultado.recordset[0] || null;
}

async function cadastrarUsuario(dados) {
    const bd = await conectaBD();

    await bd.request()
        .input('cpf', dados.cpf)
        .input('nomeCompleto', dados.nomeCompleto)
        .input('dataAniversario', dados.dataAniversario)
        .input('celular', dados.celular)
        .input('email', dados.email)
        .input('login', dados.login)
        .input('senha', dados.senha)
        .query(`
            INSERT INTO Usuario
            (
                cpf,
                nomeCompleto,
                dataAniversario,
                celular,
                email,
                [login],
                senha
            )
            VALUES
            (
                @cpf,
                @nomeCompleto,
                @dataAniversario,
                @celular,
                @email,
                @login,
                @senha
            )
        `);
}

async function atualizarUsuario(id, dados) {
    const bd = await conectaBD();

    const resultado = await bd.request()
        .input('id', Number(id))
        .input('cpf', dados.cpf)
        .input('nomeCompleto', dados.nomeCompleto)
        .input('dataAniversario', dados.dataAniversario)
        .input('celular', dados.celular)
        .input('email', dados.email)
        .input('login', dados.login)
        .input('senha', dados.senha)
        .query(`
            UPDATE Usuario
            SET
                cpf = @cpf,
                nomeCompleto = @nomeCompleto,
                dataAniversario = @dataAniversario,
                celular = @celular,
                email = @email,
                [login] = @login,
                senha = @senha
            WHERE id = @id
        `);

    return resultado.rowsAffected[0] > 0;
}

async function excluirUsuario(id) {
    const bd = await conectaBD();

    const resultado = await bd.request()
        .input('id', Number(id))
        .query(`
            DELETE FROM Usuario
            WHERE id = @id
        `);

    return resultado.rowsAffected[0] > 0;
}

export {
    listarUsuarios,
    buscarUsuario,
    cadastrarUsuario,
    atualizarUsuario,
    excluirUsuario
<<<<<<< HEAD
};
=======
};
>>>>>>> c8fd5310246ba84f310843643a6e450d5902684b
