import styles from '../styles/CadastroMorador.module.css';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function CadastroMorador() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: '',
    telefone: '',
    nascimento: '',
    genero: '',
    deficiencia: '',
    cep: '',
    cidade: '',
    bairro: ''
  });

  const [loading, setLoading] = useState(false);

  const updateField = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  async function handleCadastro() {
    if (!formData.nome || !formData.email || !formData.senha) {
      alert("Por favor, preencha Nome, Email e Senha.");
      return;
    }

    setLoading(true);

    try {
      const payloadJava = {
        ...formData,
        tipo: 'MORADOR'
      };

      const response = await fetch('http://localhost:8080/usuarios', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payloadJava)
      });

      if (response.ok) {
        alert("Cadastro realizado com sucesso!");
        router.push('/LoginMorador');
      } else {
        const msgErro = await response.text();
        alert("Erro no cadastro: " + msgErro);
      }
    } catch (error) {
      console.error(error);
      alert("Erro de conexão com o servidor.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Cadastro</h1>
      </div>

      <div className={styles.formBox}>
        <label className={styles.label}>Nome completo *</label>
        <input 
          type="text" 
          placeholder="Ex: João da Silva" 
          className={styles.input} 
          value={formData.nome}
          onChange={(e) => updateField('nome', e.target.value)}
        />

        <label className={styles.label}>E-mail *</label>
        <input 
          type="email" 
          placeholder="exemplo@email.com" 
          className={styles.input} 
          value={formData.email}
          onChange={(e) => updateField('email', e.target.value)}
        />

        <label className={styles.label}>Senha *</label>
        <input 
          type="password" 
          placeholder="Crie uma senha" 
          className={styles.input} 
          value={formData.senha}
          onChange={(e) => updateField('senha', e.target.value)}
        />

        <label className={styles.label}>Telefone</label>
        <input 
          type="tel" 
          placeholder="(00) 00000-0000" 
          className={styles.input} 
          value={formData.telefone}
          onChange={(e) => updateField('telefone', e.target.value)}
        />

        <label className={styles.label}>Data de nascimento</label>
        <input 
          type="text" 
          placeholder="DD/MM/AAAA" 
          className={styles.input} 
          value={formData.nascimento}
          onChange={(e) => updateField('nascimento', e.target.value)}
        />

        <label className={styles.label}>Gênero</label>
        <div className={styles.radioGroup}>
          <label>
            <input 
              type="radio" 
              name="gen" 
              checked={formData.genero === 'Masculino'}
              onChange={() => updateField('genero', 'Masculino')} 
            /> Masculino
          </label>
          <label>
            <input 
              type="radio" 
              name="gen" 
              checked={formData.genero === 'Feminino'}
              onChange={() => updateField('genero', 'Feminino')} 
            /> Feminino
          </label>
          <label>
            <input 
              type="radio" 
              name="gen" 
              checked={formData.genero === 'Outro'}
              onChange={() => updateField('genero', 'Outro')} 
            /> Outro
          </label>
        </div>

        <label className={styles.label}>Tipo de deficiência</label>
        <input 
          type="text" 
          placeholder="Ex: Deficiência auditiva" 
          className={styles.input} 
          value={formData.deficiencia}
          onChange={(e) => updateField('deficiencia', e.target.value)}
        />

        <div className={styles.row}>
          <div className={styles.col}>
            <label className={styles.label}>CEP</label>
            <input 
              type="text" 
              placeholder="00000-000" 
              className={styles.input} 
              value={formData.cep}
              onChange={(e) => updateField('cep', e.target.value)}
            />
          </div>

          <div className={styles.col}>
            <label className={styles.label}>Cidade/UF</label>
            <input 
              type="text" 
              placeholder="Ex: Recife/PE" 
              className={styles.input} 
              value={formData.cidade}
              onChange={(e) => updateField('cidade', e.target.value)}
            />
          </div>
        </div>

        <label className={styles.label}>Bairro</label>
        <input 
          type="text" 
          placeholder="Ex: Boa Viagem" 
          className={styles.input} 
          value={formData.bairro}
          onChange={(e) => updateField('bairro', e.target.value)}
        />

        <button 
          className={styles.submitBtn}
          onClick={handleCadastro}
          disabled={loading}
        >
          {loading ? 'Cadastrando...' : 'Cadastrar'}
        </button>
      </div>

      <div className={styles.bottomBar}>
        <button 
          className={styles.inactiveTab}
          onClick={() => router.push('/LoginMorador')}
        >
          Login
        </button>

        <button className={styles.activeTab}>
          Cadastre-se
        </button>
      </div>
    </div>
  );
}