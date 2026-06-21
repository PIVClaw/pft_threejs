# pft_threejs

Portfolio moderne et immersif développé avec **Next.js 16**, **TypeScript**, **Tailwind CSS**, **Framer Motion** et **Three.js** via **React Three Fiber** et **Drei**.

Le projet met en avant une expérience utilisateur fluide, animée et visuelle, avec une architecture pensée pour être facilement personnalisable. Il peut servir de base pour présenter un profil professionnel, des projets, des compétences, un parcours et un espace créatif en 3D.

## Stack technique

- **Framework** : Next.js 16
- **Langage** : TypeScript
- **Styling** : Tailwind CSS
- **Animations UI** : Framer Motion
- **3D** : Three.js
- **Rendu 3D React** : React Three Fiber
- **Utilitaires 3D** : Drei
- **Linting** : ESLint
- **Build toolchain** : Next.js + TypeScript

## Structure du projet

```txt
pft_threejs/
├── public/                 # Assets statiques accessibles publiquement
├── src/
│   ├── app/                # Routes et configuration globale de l'application
│   │   ├── favicon.ico
│   │   ├── globals.css     # Styles globaux
│   │   ├── layout.tsx      # Layout racine
│   │   └── page.tsx        # Page d'accueil
│   ├── components/
│   │   ├── sections/       # Sections principales du portfolio
│   │   │   ├── About.tsx
│   │   │   ├── Contact.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── Playground3D.tsx
│   │   │   ├── Process.tsx
│   │   │   ├── Projects.tsx
│   │   │   └── Skills.tsx
│   │   ├── three/          # Composants et scènes Three.js
│   │   │   ├── FloatingParticles.tsx
│   │   │   └── Scene.tsx
│   │   └── ui/             # Composants d'interface réutilisables
│   │       ├── Button.tsx
│   │       └── Card.tsx
│   ├── data/               # Données éditoriales personnalisables
│   │   ├── projects.ts
│   │   └── skills.ts
│   └── hooks/              # Hooks React personnalisés
│       └── useScrollAnimation.ts
├── package.json            # Scripts et dépendances
├── next.config.ts          # Configuration Next.js
├── tailwind.config.*       # Configuration Tailwind si présente
├── tsconfig.json           # Configuration TypeScript
└── eslint.config.mjs       # Configuration ESLint
```

## Installation

Prérequis recommandés :

- Node.js 20+
- npm, pnpm, bun ou yarn

Clonez le projet, puis installez les dépendances :

```bash
cd pft_threejs
npm install
```

## Scripts disponibles

```bash
npm run dev
```

Lance le serveur de développement Next.js.

```bash
npm run build
```

Compile le projet pour la production.

```bash
npm run start
```

Démarre le serveur de production après un build.

```bash
npm run lint
```

Exécute ESLint pour vérifier la qualité du code.

## Personnalisation du contenu

Le contenu éditorial principal est centralisé dans :

```txt
src/data/
```

Vous pouvez modifier :

- `src/data/projects.ts` pour ajouter, retirer ou modifier les projets affichés.
- `src/data/skills.ts` pour adapter les compétences, catégories ou niveaux.

Les textes des sections principales se trouvent dans :

```txt
src/components/sections/
```

Pour changer les informations générales du portfolio, éditez notamment :

- `src/components/sections/About.tsx`
- `src/components/sections/Contact.tsx`
- `src/components/sections/Hero.tsx`
- `src/components/sections/Process.tsx`

## Déploiement sur Vercel

Le projet est compatible avec Vercel.

1. Poussez le code sur GitHub, GitLab ou Bitbucket.
2. Connectez votre dépôt à Vercel.
3. Laissez Vercel détecter automatiquement le framework Next.js.
4. Déployez.

Commandes utilisées par défaut :

```bash
npm run build
npm run start
```

Si vous utilisez des variables d’environnement, ajoutez-les dans les paramètres du projet Vercel.

## License

MIT
