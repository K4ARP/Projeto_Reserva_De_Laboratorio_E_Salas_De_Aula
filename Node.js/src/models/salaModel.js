import conectaBD from '../config/dbConexao.js';

async function listarSalas() {
    const bd = await conectaBD();

    const resultado = await bd.query(`
        SELECT *
        FROM Sala
    `);

    return resultado.recordset;
}

async function buscarSala(id) {
    const bd = await conectaBD();

    const resultado = await bd.request()
        .input('id', Number(id))
        .query(`
            SELECT *
            FROM Sala
            WHERE id = @id
        `);

    return resultado.recordset[0] || null;
}

async function cadastrarSala(dados) {
    const bd = await conectaBD();

    await bd.request()
        .input('codigo', dados.codigo)
        .input('nome', dados.nome)
        .input('capacidade', dados.capacidade)
        .input('localizacao', dados.localizacao)
        .query(`
            INSERT INTO Sala
            (
                codigo,
                nome,
                capacidade,
                localizacao
            )
            VALUES
            (
                @codigo,
                @nome,
                @capacidade,
                @localizacao
            )
        `);
}

async function atualizarSala(id, dados) {
    const bd = await conectaBD();

    const resultado = await bd.request()
        .input('id', Number(id))
        .input('codigo', dados.codigo)
        .input('nome', dados.nome)
        .input('capacidade', dados.capacidade)
        .input('localizacao', dados.localizacao)
        .query(`
            UPDATE Sala
            SET
                codigo = @codigo,
                nome = @nome,
                capacidade = @capacidade,
                localizacao = @localizacao
            WHERE id = @id
        `);

    return resultado.rowsAffected[0] > 0;
}

async function excluirSala(id) {
    const bd = await conectaBD();

    const resultado = await bd.request()
        .input('id', Number(id))
        .query(`
            DELETE FROM Sala
            WHERE id = @id
        `);

    return resultado.rowsAffected[0] > 0;
}

export {
    listarSalas,
    buscarSala,
    cadastrarSala,
    atualizarSala,
    excluirSala
};