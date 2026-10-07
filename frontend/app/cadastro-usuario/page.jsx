'use client';

import { useState } from 'react';

export default function CadastroUsuario() {
  const [formData, setFormData] = useState({
    cpf: '',
    nomeCompleto: '',
    dataAniversario: '',
    celular: '',
    email: '',
    login: '',
    senha: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const resposta = await fetch('/api/usuarios', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const resultado = await resposta.json();

      if (!resposta.ok) {
        alert(resultado.mensagem || 'Erro ao cadastrar usuário');
        return;
      }

      alert(resultado.mensagem);

      setFormData({
        cpf: '',
        nomeCompleto: '',
        dataAniversario: '',
        celular: '',
        email: '',
        login: '',
        senha: ''
      });
    } catch (erro) {
      console.error('Erro ao conectar com a API:', erro);
      alert('Não foi possível conectar com o servidor.');
    }
  };

  return (
    <div
      style={{
        maxWidth: '500px',
        margin: '40px auto',
        padding: '20px',
        fontFamily: 'sans-serif'
      }}
    >
      <h2>Cadastro de Usuário</h2>

      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '15px'
        }}
      >
        <div>
          <label style={{ display: 'block', marginBottom: '5px' }}>
            CPF:
          </label>

          <input
            type="text"
            name="cpf"
            value={formData.cpf}
            onChange={handleChange}
            placeholder="000.000.000-00"
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '5px' }}>
            Nome Completo:
          </label>

          <input
            type="text"
            name="nomeCompleto"
            value={formData.nomeCompleto}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '5px' }}>
            Data de Aniversário:
          </label>

          <input
            type="date"
            name="dataAniversario"
            value={formData.dataAniversario}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '5px' }}>
            Celular:
          </label>

          <input
            type="tel"
            name="celular"
            value={formData.celular}
            onChange={handleChange}
            placeholder="(00) 00000-0000"
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '5px' }}>
            E-mail:
          </label>

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '5px' }}>
            Login:
          </label>

          <input
            type="text"
            name="login"
            value={formData.login}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '5px' }}>
            Senha:
          </label>

          <input
            type="password"
            name="senha"
            value={formData.senha}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </div>

        <button
          type="submit"
          style={{
            padding: '10px 15px',
            backgroundColor: '#0070f3',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Cadastrar Usuário
        </button>
      </form>
    </div>
  );
}