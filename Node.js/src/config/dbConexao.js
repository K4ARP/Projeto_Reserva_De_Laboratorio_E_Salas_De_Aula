import 'dotenv/config';

import mssql from 'mssql';

const stringSql = process.env.CONNECTION_STRING;

async function conectaBD() {
    if (!stringSql) {
        throw new Error(
            'A variável CONNECTION_STRING não está configurada no .env'
        );
    }

    try {
        return await mssql.connect(stringSql);

    } catch (erro) {
        console.error('Erro ao conectar no BD:', erro);

        throw erro;
    }
}

export default conectaBD;
