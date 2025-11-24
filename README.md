# 🌟 Melhor Aqui

> Conectando talentos a oportunidades 100% inclusivas!

Uma plataforma web moderna e acessível desenvolvida com **Next.js** e **React**, focada em conectar pessoas com deficiência a oportunidades de trabalho inclusivas.

![Status](https://img.shields.io/badge/status-em%20desenvolvimento-yellow)
![License](https://img.shields.io/badge/license-MIT-blue)
![Node](https://img.shields.io/badge/node-%3E%3D14.0.0-brightgreen)

---

## 📋 Sobre o Projeto

O **Melhor Aqui** é uma aplicação web que oferece uma experiência totalmente acessível e personalizada para pessoas com deficiência em busca de oportunidades de trabalho. A plataforma permite:

- ✅ Criação de perfil com informações acessíveis
- 🔍 Busca e filtro de vagas personalizadas
- 📝 Candidatura simplificada com currículo/portfólio
- 👥 Suporte completo para diferentes tipos de deficiência
- 📱 Design responsivo e mobile-first

---

## 🚀 Tecnologias

| Tecnologia | Versão | Descrição |
|-----------|--------|-----------|
| **Next.js** | 12+ | Framework React para produção |
| **React** | 18+ | Biblioteca UI |
| **CSS Modules** | - | Estilos encapsulados |
| **Node.js** | 14+ | Runtime JavaScript |

---

## 📦 Instalação

### Pré-requisitos
- Node.js (versão 14.0.0 ou superior)
- npm ou yarn

### Passo a passo

```bash
# 1. Clone o repositório
git clone https://github.com/seu-usuario/RepoFront-APIADOS.git
cd RepoFront-APIADOS/melhoraqui_screens_final

# 2. Instale as dependências
npm install
# ou
yarn install

# 3. Execute o servidor de desenvolvimento
npm run dev
# ou
yarn dev

# 4. Abra no navegador
# A aplicação estará disponível em http://localhost:3000
```

---

## 🏗️ Estrutura do Projeto

```
melhoraqui_screens_final/
├── pages/                   
│   ├── index.js             
│   ├── loader2.js           
│   ├── choice.js            
│   ├── LoginMorador.js     
│   ├── CadastroMorador.js   
│   ├── HomeMorador.js       
│   ├── HomeAdmin.js        
│   └── _app.js            
├── styles/                  
│   ├── globals.css          
│   ├── Index.module.css     
│   ├── Loader2.module.css 
│   ├── Choice.module.css    
│   ├── LoginMorador.module.css
│   └── CadastroMorador.module.css
├── public/                   
│   └── assets/           
├── package.json       
└── next.config.js          
```

---

## 💻 Scripts Disponíveis

```bash
# Iniciar servidor de desenvolvimento
npm run dev

# Build para produção
npm run build

# Executar aplicação em produção
npm start

# Linter (se configurado)
npm run lint
```

---

## 🎨 Páginas Principais

### 1. **Splash Screen** (`/`)
- Logo e branding
- Redirecionamento automático após 5 segundos

### 2. **Onboarding** (`/loader2`)
- Apresentação da plataforma
- Funcionalidades principais
- Redirecionamento para seleção de tipo de usuário

### 3. **Escolha de Tipo** (`/choice`)
- Seleção entre "Morador" ou "Administrador"
- Design intuitivo com cards interativos

### 4. **Login** (`/LoginMorador`)
- Autenticação de usuários
- Link para cadastro
- Recuperação de senha

### 5. **Cadastro** (`/CadastroMorador`)
- Formulário completo com dados pessoais
- Persistência em `localStorage`
- Campos para:
  - Nome completo
  - Data de nascimento
  - Gênero
  - Tipo de deficiência
  - Endereço (CEP, cidade, bairro)

---

## 🔧 Recursos Principais

### Persistência de Dados
A página de cadastro utiliza `localStorage` para salvar automaticamente os dados do formulário:

```javascript
// Dados persistidos
{
  nome: '',
  nascimento: '',
  genero: '',
  deficiencia: '',
  cep: '',
  cidade: '',
  bairro: ''
}
```

### Design Responsivo
- Mobile-first approach
- Breakpoints: 320px, 360px, 480px, 720px+
- Otimizado para todos os tamanhos de tela

### Acessibilidade
- Semântica HTML apropriada
- Contraste de cores WCAG
- Labels descritivas
- Navegação intuitiva

---

## 🎯 Próximos Passos

- [ ] Integração com API backend
- [ ] Sistema de autenticação JWT
- [ ] Dashboard de vagas
- [ ] Sistema de candidaturas
- [ ] Notificações
- [ ] Testes automatizados
- [ ] Melhorias de acessibilidade WCAG 2.1 AAA

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Para contribuir:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

---

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 📧 Contato

- **Email**: seu-email@exemplo.com
- **LinkedIn**: [seu-linkedin](https://linkedin.com)
- **GitHub**: [@seu-usuario](https://github.com/seu-usuario)

---

## 🙏 Agradecimentos

- Next.js pela excelente framework
- React pela flexibilidade
- Comunidade open-source

---

<div align="center">

**[⬆ voltar ao topo](#-melhor-aqui)**

Feito com ❤️ para tornar o mundo mais inclusivo

</div>
