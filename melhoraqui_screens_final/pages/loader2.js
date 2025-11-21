import { useEffect } from 'react'
import { useRouter } from 'next/router'
import styles from '../styles/Screen2.module.css'

export default function Loader2() {
  const router = useRouter()

  useEffect(() => {
    const t = setTimeout(() => router.push('/choice'), 5000)
    return () => clearTimeout(t)
  }, [router])

  return (
    <div className={styles.container}>
      
      <div className={styles.header}></div>

      <main className={styles.main}>
        
        <img 
          src="/assets/logo.png" 
          alt="logo" 
          className={styles.logo}
        />

        <h1 className={styles.title}>
          <span className={styles.blue}>Somos o </span>
          <span className={styles.blue}>Melhor</span>
          <span className={styles.orange}>Aqui</span>
        </h1>

        <p className={styles.subtitle}>
          Conectando talentos a oportunidades<br />
          100% inclusivas!
        </p>

        <section className={styles.features}>

          <div className={styles.feature}>
            <div className={styles.featicon}>👤</div>
            <div>
              <h4>Crie seu perfil</h4>
              <p>Adicione suas informações de forma acessível e personalizada.</p>
            </div>
          </div>

          <div className={styles.feature}>
            <div className={styles.featicon}>🔎</div>
            <div>
              <h4>Busque vagas</h4>
              <p>Filtre oportunidades de acordo com seu perfil.</p>
            </div>
          </div>

          <div className={styles.feature}>
            <div className={styles.featicon}>✅</div>
            <div>
              <h4>Candita-se com facilidade</h4>
              <p>Envie seu currículo ou portfólio em poucos cliques.</p>
            </div>
          </div>

        </section>

        {/* TEXTO LARANJA FINAL */}
        <p className={styles.bottomText}>
          Nosso App é inteiramente pensando para pessoas portadoras de deficiência
          e oferecemos todo suporte para propocionar uma ótima experiência!
        </p>

      </main>
    </div>
  )
}
