# Portfolio - John Doe

Portfolio website d'un développeur web et designer, construit avec **React 19** et **React Router v6**.

## Stack Technologique

- **React 19.2.3** - Bibliothèque UI
- **React Router v6** - Routing côté client
- **Bootstrap 5.3.8** - Framework CSS
- **Bootstrap Icons 1.13.1** - Icônes
- **react-helmet-async 2.0.4** - Gestion des meta tags et du head
- **Create React App** - Build tool et dev server

## Prérequis

- Node.js 18+
- npm ou yarn

## Installation

```bash
npm install --legacy-peer-deps
```

## Lancement

### Développement

```bash
npm run dev
```

ou

```bash
npm start
```

Le site est accessible à [http://localhost:3000](http://localhost:3000)

### Production

```bash
npm run build
```

Le dossier de build est créé dans `/build` et peut être servi statiquement avec :

```bash
npx serve -s build
```

## Linting

```bash
npm run lint
```

## Structure du Projet

```
src/
├── pages/               # Pages principales (React Router)
│   ├── Home.js
│   ├── Services.js
│   ├── Portfolio.js
│   ├── Contact.js
│   └── Legal.js
├── components/          # Composants réutilisables
│   ├── Layout.js
│   ├── Header.js
│   ├── Footer.js
│   ├── SEO.js
│   ├── GitHubModal.js
│   ├── home/
│   ├── service/
│   ├── project/
│   └── contact/
├── data/                # Configuration et données
│   ├── siteConfig.js
│   ├── projects.js
│   ├── services.js
│   └── skills.js
├── styles/              # Styles globaux
│   ├── globals.css
│   └── custom.css
├── App.js               # Configuration React Router
└── index.js             # Point d'entrée React
```

## Routing

Les routes sont configurées dans `/src/App.js` :

- `/` - Accueil
- `/services` - Services offerts
- `/portfolio` - Réalisations
- `/contact` - Contact
- `/legal` - Mentions légales

## Notes Importantes

- Les meta tags pour le SEO sont gérés par le composant `SEO` avec `react-helmet-async`
