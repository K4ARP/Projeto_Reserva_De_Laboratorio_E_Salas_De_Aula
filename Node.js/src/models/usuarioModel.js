import conectaBD  from "../config/dbConexao";  

async function listarUsuarios() {
    try {
        const BD = await conectaBD();
        const result = await BD.query(`SELECT * FROM Usuario`);

        return result.recordset;
    }
    catch (erro){
        console.log("Erro na busca de usuarios", erro);
        throw erro;
    }
}
export default listarUsuarios;