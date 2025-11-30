import { useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/Loader2.module.css';

export default function Loader2() {
  const router = useRouter();

  useEffect(() => {
    const t = setTimeout(() => router.push('/choice'), 5000);
    return () => clearTimeout(t);
  }, [router]);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
      </header>

      <main className={styles.main}>
        <img 
          src="/assets/location-icon.svg" 
          alt="Localização" 
          className={styles.logo}
        />

        <h1 className={styles.title}>
          Somos o <span className={styles.blue}>Melhor</span><span className={styles.orange}>Aqui</span>
        </h1>

        <p className={styles.subtitle}>Buscando sempre melhorar o local em que vivemos e crescemos</p>

        <div className={styles.featureList}>
          <div className={styles.feature}>
            <img src="/assets/profile-icon.svg" alt="Perfil" className={styles.icon} />
            <div>
              <h4 className={styles.featureTitle}>Crie seu perfil</h4>
              <p className={styles.featureSubtitle}>Adicione suas informações de forma acessível e personalizada.</p>
            </div>
          </div>

          <div className={styles.feature}>
            <img src="/assets/search-icon.svg" alt="Solicite mudanças" className={styles.icon} />
            <div>
              <h4 className={styles.featureTitle}>Solicite mudanças</h4>
              <p className={styles.featureSubtitle}>Envie solicitações de melhorias para sua comunidade.</p>
            </div>
          </div>

          <div className={styles.feature}>
            <img src="/assets/progress-icon.svg" alt="Melhore seu bairro" className={styles.icon} />
            <div>
              <h4 className={styles.featureTitle}>Melhore seu bairro</h4>
              <p className={styles.featureSubtitle}>Envie seu currículo ou portfólio em poucos cliques.</p>
            </div>
          </div>
        </div>

        <p className={styles.bottomText}>
          Nosso App é inteiramente pensado para cidadões que desejam ver melhorias em sua comunidade.
        </p>
      </main>
    </div>
  );
}
