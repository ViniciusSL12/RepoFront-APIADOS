import Link from 'next/link';
import styles from '../styles/NovaSolicitacao.module.css';

export default function NovaSolicitacao() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link href="/Notificacoes">
          <button className={styles.backButton}>
            <img src="/assets/back-icon-white.svg" alt="Voltar" />
          </button>
        </Link>
        <h1 className={styles.title}>MelhorAqui</h1>
        <div className={styles.headerSpacer}></div>
      </header>

      <main className={styles.main}>
        <h2 className={styles.pageTitle}>Confirmação de envio</h2>

        <div className={styles.formSection}>
          <label className={styles.label}>Problema</label>
          <input type="text" className={styles.input} />

          <label className={styles.label}>Rua</label>
          <input type="text" className={styles.input} />

          <div className={styles.row}>
            <div className={styles.col}>
              <label className={styles.label}>Bairro</label>
              <input type="text" className={styles.input} />
            </div>
            <div className={styles.col}>
              <label className={styles.label}>Cidade/UF</label>
              <input type="text" className={styles.input} />
            </div>
          </div>

          <label className={styles.label}>Descrição</label>
          <textarea className={styles.textarea} rows="4" placeholder="Descreva detalhadamente o problema..."></textarea>

          <button className={styles.submitButton}>Enviar Solicitação</button>
        </div>
      </main>

      <footer className={styles.footer}>
        <Link href="/BuscarBairros">
          <button className={styles.footerButton}>
            <img src="/assets/search-icon.svg" alt="Buscar" />
          </button>
        </Link>
        <Link href="/PerfilMorador">
          <button className={styles.footerButton}>
            <img src="/assets/profile-icon.svg" alt="Perfil" />
          </button>
        </Link>
        <Link href="/Notificacoes">
          <button className={styles.footerButton}>
            <img src="/assets/notification-icon.svg" alt="Notificações" />
          </button>
        </Link>
      </footer>
    </div>
  );
}
