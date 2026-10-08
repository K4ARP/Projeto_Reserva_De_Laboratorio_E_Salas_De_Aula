'use client';
import { useState } from 'react';

export default function CadastroStatus() {
  const [formData, setFormData] = useState({
    codigo: '',
    nome: '',
    descricao: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados do Status:', formData);
    alert('Status cadastrado com sucesso!');
  };

  return (
    <div style={{ maxWidth: '500px', margin: '40px auto', padding: '20px', fontFamily: 'sans-serif' }}>
      <h2>Cadastro de Status</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '5px' }}>Código do Status:</label>
          <input
            type="text"
            name="codigo"
            value={formData.codigo}
            onChange={handleChange}
            placeholder="Ex: ST-01"
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '5px' }}>Nome do Status:</label>
          <input
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            placeholder="Ex: Reservado, Em Manutenção, Livre"
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '5px' }}>Descrição:</label>
          <textarea
            name="descricao"
            value={formData.descricao}
            onChange={handleChange}
            placeholder="Descreva a situação deste status..."
            required
            style={{ width: '100%', padding: '8px', height: '90px' }}
          />
        </div>

        <button type="submit" style={{ padding: '10px 15px', backgroundColor: '#ffc107', color: '#000', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>
          Cadastrar Status
        </button>
      </form>
    </div>
  );
}