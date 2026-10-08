import conectaBD from '../config/dbConexao.js';

async function listarLaboratorios() {
    const bd = await conectaBD();

    const resultado = await bd.query(`
        SELECT *
        FROM Laboratorio
    `);

    return resultado.recordset;
}

async function buscarLaboratorio(id) {
    const bd = await conectaBD();

    const resultado = await bd.request()
        .input('id', Number(id))
        .query(`
            SELECT *
            FROM Laboratorio
            WHERE id = @id
        `);

    return resultado.recordset[0] || null;
}

async function cadastrarLaboratorio(dados) {
    const bd = await conectaBD();

    await bd.request()
        .input('codigo', dados.codigo)
        .input('nome', dados.nome)
        .input('capacidade', dados.capacidade)
        .input('localizacao', dados.localizacao)
        .query(`
            INSERT INTO Laboratorio
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

async function atualizarLaboratorio(id, dados) {
    const bd = await conectaBD();

    const resultado = await bd.request()
        .input('id', Number(id))
        .input('codigo', dados.codigo)
        .input('nome', dados.nome)
        .input('capacidade', dados.capacidade)
        .input('localizacao', dados.localizacao)
        .query(`
            UPDATE Laboratorio
            SET
                codigo = @codigo,
                nome = @nome,
                capacidade = @capacidade,
                localizacao = @localizacao
            WHERE id = @id
        `);

    return resultado.rowsAffected[0] > 0;
}

async function excluirLaboratorio(id) {
    const bd = await conectaBD();

    const resultado = await bd.request()
        .input('id', Number(id))
        .query(`
            DELETE FROM Laboratorio
            WHERE id = @id
        `);

    return resultado.rowsAffected[0] > 0;
}

export {
    listarLaboratorios,
    buscarLaboratorio,
    cadastrarLaboratorio,
    atualizarLaboratorio,
    excluirLaboratorio
};