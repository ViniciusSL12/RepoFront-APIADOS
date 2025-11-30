import Link from 'next/link';
import styles from '../styles/BuscarBairros.module.css';

export default function BuscarBairros() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <button className={styles.backButton}>
          <img src="/assets/back-icon-white.svg" alt="Voltar" />
        </button>
        <h1 className={styles.title}>MelhorAqui</h1>
        <div className={styles.headerSpacer}></div>
      </header>

      <nav className={styles.navbar}>
        <button className={styles.navItem}>Propostas</button>
        <button className={styles.navItem}>Solicitações</button>
        <button className={styles.navItem}>Notificações</button>
      </nav>

      <section className={styles.filterSection}>
        <input type="text" placeholder="Filtrar por bairro" className={styles.filterInput} />
        <div className={styles.filterTags}>
          <button className={styles.tag}>Boa Vista</button>
          <button className={styles.tag}>Cordeiro</button>
          <button className={styles.tag}>Ibura</button>
          <button className={styles.tag}>Afogados</button>
          <button className={styles.tag}>Em Análise</button>
          <button className={styles.tag}>Aprovado</button>
          <button className={styles.tag}>Concluído</button>
          <button className={styles.tag}>Rejeitado</button>
        </div>
      </section>

      <section className={styles.proposalsSection}>
        <div className={styles.proposalCard}>
          <h2>Reforma da plataforma BRT</h2>
          <p>Boa Vista - Recife, PE</p>
          <span className={styles.status}>Em Análise</span>
        </div>
        <div className={styles.proposalCard}>
          <h2>Melhorar segurança em frente a Fafire</h2>
          <p>Boa Vista - Recife, PE</p>
          <span className={styles.status}>Em Análise</span>
        </div>
        <div className={styles.proposalCard}>
          <h2>Limpeza nas ruas</h2>
          <p>Boa Vista - Recife, PE</p>
          <span className={styles.status}>Em Análise</span>
        </div>
      </section>

      <footer className={styles.footer}>
        <Link href="/BuscarBairros">
          <button className={`${styles.footerButton} ${styles.active}`}>
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