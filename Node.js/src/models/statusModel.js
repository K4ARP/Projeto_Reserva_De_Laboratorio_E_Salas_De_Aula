import conectaBD from '../config/dbConexao.js';

async function listarStatus() {
    const bd = await conectaBD();

    const resultado = await bd.query(`
        SELECT *
        FROM Status
    `);

    return resultado.recordset;
}

async function buscarStatus(id) {
    const bd = await conectaBD();

    const resultado = await bd.request()
        .input('id', Number(id))
        .query(`
            SELECT *
            FROM Status
            WHERE id = @id
        `);

    return resultado.recordset[0] || null;
}

async function cadastrarStatus(dados) {
    const bd = await conectaBD();

    await bd.request()
        .input('nomeStatus', dados.nomeStatus)
        .query(`
            INSERT INTO Status
            (
                nomeStatus
            )
            VALUES
            (
                @nomeStatus
            )
        `);
}

async function atualizarStatus(id, dados) {
    const bd = await conectaBD();

    const resultado = await bd.request()
        .input('id', Number(id))
        .input('nomeStatus', dados.nomeStatus)
        .query(`
            UPDATE Status
            SET
                nomeStatus = @nomeStatus
            WHERE id = @id
        `);

    return resultado.rowsAffected[0] > 0;
}

async function excluirStatus(id) {
    const bd = await conectaBD();

    const resultado = await bd.request()
        .input('id', Number(id))
        .query(`
            DELETE FROM Status
            WHERE id = @id
        `);

    return resultado.rowsAffected[0] > 0;
}

export {
    listarStatus,
    buscarStatus,
    cadastrarStatus,
    atualizarStatus,
    excluirStatus
};