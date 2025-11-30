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

//deixei comentado pois testando via notebook as ideias sao muitas no banco e somem com o botao de nova solicitação

// import Link from 'next/link';
// import styles from '../styles/Notificacoes.module.css';
// import { useState, useEffect } from 'react';

// export default function Notificacoes() {
//   const [solicitacoes, setSolicitacoes] = useState([]);

//   useEffect(() => {
//     async function carregarDados() {
//       try {
//         // Como não tem "Notificação" no back, buscamos as Ideias para mostrar o status delas
//         const response = await fetch('http://localhost:8080/ideias');
        
//         if (response.ok) {
//           const data = await response.json();
//           // Inverte a ordem para as mais novas aparecerem no topo
//           setSolicitacoes(data.reverse());
//         }
//       } catch (error) {
//         console.error("Erro ao carregar notificações:", error);
//       }
//     }
//     carregarDados();
//   }, []);

//   return (
//     <div className={styles.container}>
//       <header className={styles.header}>
//         <Link href="/HomeMorador">
//           <button className={styles.backButton}>
//             <img src="/assets/back-icon-white.svg" alt="Voltar" />
//           </button>
//         </Link>
//         <h1 className={styles.title}>MelhorAqui</h1>
//         <div className={styles.headerSpacer}></div>
//       </header>

//       <nav className={styles.navbar}>
//         <Link href="/BuscarBairros">
//             <button className={styles.navItem}>Propostas</button>
//         </Link>
//         <button className={styles.navItem}>Solicitações</button>
//         <button className={`${styles.navItem} ${styles.active}`}>Notificações</button>
//       </nav>

//       <main className={styles.main}>
//         <section className={styles.notificationsSection}>
          
//           {solicitacoes.length > 0 ? (
//             solicitacoes.map((item) => (
//               <div key={item.id} className={styles.notificationCard}>
//                 {/* Título da solicitação */}
//                 <h2>{item.titulo}</h2>
                
//                 {/* Localização */}
//                 <p>{item.localizacao}</p>
                
//                 {/* Status (Aprovado, Em Análise, etc) */}
//                 <span 
//                     className={styles.status}
//                     style={{
//                         color: item.status === 'Concluído' || item.status === 'Aprovado' ? 'green' : 
//                                item.status === 'Rejeitado' ? 'red' : 'orange'
//                     }}
//                 >
//                     {item.status}
//                 </span>
//               </div>
//             ))
//           ) : (
//             <p style={{textAlign: 'center', marginTop: 20, color: '#666'}}>
//                 Nenhuma notificação encontrada.
//             </p>
//           )}

//         </section>

//         <Link href="/NovaSolicitacao">
//           <button className={styles.newNotificationButton}>Nova solicitação</button>
//         </Link>
//       </main>

//       <footer className={styles.footer}>
//         <Link href="/BuscarBairros">
//           <button className={styles.footerButton}>
//             <img src="/assets/search-icon.svg" alt="Buscar" />
//           </button>
//         </Link>
//         <Link href="/PerfilMorador">
//           <button className={styles.footerButton}>
//             <img src="/assets/profile-icon.svg" alt="Perfil" />
//           </button>
//         </Link>
//         <Link href="/Notificacoes">
//           <button className={`${styles.footerButton} ${styles.active}`}>
//             <img src="/assets/notification-icon.svg" alt="Notificações" />
//           </button>
//         </Link>
//       </footer>
//     </div>
//   );
// }