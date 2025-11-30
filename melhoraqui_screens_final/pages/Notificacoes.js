import Link from 'next/link';
import styles from '../styles/Notificacoes.module.css';

export default function Notificacoes() {
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
        <button className={`${styles.navItem} ${styles.active}`}>Notificações</button>
      </nav>

      <main className={styles.main}>
        <section className={styles.notificationsSection}>
          <div className={styles.notificationCard}>
            <h2>Reforma de rampas</h2>
            <p>Cordeiro - Recife, PE</p>
            <span className={styles.status}>Em Análise</span>
          </div>
          <div className={styles.notificationCard}>
            <h2>Calçar rua Juarez Millet</h2>
            <p>Jiquiá - Recife, PE</p>
            <span className={styles.status}>Em Análise</span>
          </div>
        </section>

        <Link href="/NovaSolicitacao">
          <button className={styles.newNotificationButton}>Nova solicitação</button>
        </Link>
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
          <button className={`${styles.footerButton} ${styles.active}`}>
            <img src="/assets/notification-icon.svg" alt="Notificações" />
          </button>
        </Link>
      </footer>
    </div>
  );
}