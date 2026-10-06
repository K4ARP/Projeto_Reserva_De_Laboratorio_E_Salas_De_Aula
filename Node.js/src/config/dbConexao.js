import 'dotenv/config';
import mssql from 'mssql';  

const stringSql = process.env.CONNECTION_STRING;

//Conectando ao banco de dados
async function conectaBD() {
    try {
        await mssql.connect(stringSql);
        returnmssql;
    }
    catch(erro){
        console.log("Erro ao conectar no BD", erro);
    }
}

export default conectaBD;