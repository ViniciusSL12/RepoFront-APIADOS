import styles from '../styles/CadastroMorador.module.css';
import { useRouter } from 'next/router';

export default function CadastroMorador() {
  const router = useRouter();

  return (
    <div className={styles.container}>

    
      <div className={styles.header}>
        <h1 className={styles.title}>Cadastro</h1>
      </div>

     
      <div className={styles.formBox}>
        <label className={styles.label}>Nome completo</label>
        <input type="text" className={styles.input} />

        <label className={styles.label}>Data de nascimento</label>
        <input type="text" placeholder="DD/MM/AAAA" className={styles.input} />

        <label className={styles.label}>Gênero</label>
        <div className={styles.radioGroup}>
          <label><input type="radio" name="gen" /> Masculino</label>
          <label><input type="radio" name="gen" /> Feminino</label>
          <label><input type="radio" name="gen" /> Outro</label>
        </div>

        <label className={styles.label}>Tipo de deficiência</label>
        <input type="text" placeholder="Deficiência auditiva" className={styles.input} />

        <div className={styles.row}>
          <div className={styles.col}>
            <label className={styles.label}>CEP</label>
            <input type="text" className={styles.input} />
          </div>

          <div className={styles.col}>
            <label className={styles.label}>Cidade/UF</label>
            <input type="text" className={styles.input} />
          </div>
        </div>

        <label className={styles.label}>Bairro</label>
        <input type="text" className={styles.input} />

        <button className={styles.submitBtn}>Cadastrar</button>
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
