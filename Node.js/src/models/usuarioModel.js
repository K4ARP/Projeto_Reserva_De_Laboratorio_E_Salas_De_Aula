import conectaBD from '../config/dbConexao.js';

async function listarUsuarios() {
    const bd = await conectaBD();
    const resultado = await bd.query('SELECT * FROM Usuario');
    return resultado.recordset;
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
                (cpf, nomeCompleto, dataAniversario, celular, email, [login], senha)
            VALUES
                (@cpf, @nomeCompleto, @dataAniversario, @celular, @email, @login, @senha)
        `);
}

export { listarUsuarios, cadastrarUsuario };
