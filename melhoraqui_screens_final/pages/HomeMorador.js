import Link from 'next/link'

export default function Morador() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Morador (demo)</h1>
      <p>Você escolheu Morador.</p>

      <Link href="/LoginMorador">Voltar</Link>
    </div>
  )
}

