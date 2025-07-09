🐣 TaskNest – Task Management App
TaskNest is a clean, modern, and minimal task management application built using cutting-edge web technologies. It offers a smooth developer and user experience with features like fast refresh, modular routing, and a responsive UI.

🚀 Tech Stack
React with TypeScript

Vite for lightning-fast development

Tailwind CSS for utility-first styling

React Router DOM for client-side routing

ESLint and TypeScript-aware linting

Optionally extensible with:

eslint-plugin-react-x and eslint-plugin-react-dom for advanced React linting

Babel or SWC for Fast Refresh (@vitejs/plugin-react or @vitejs/plugin-react-swc)

✨ Features
⚡ Instant feedback with HMR (Hot Module Replacement)

🧠 Type-safe and lint-optimized development

📱 Responsive UI with Tailwind

🔁 Seamless routing via React Router

🧹 Linting setup for clean and maintainable code

📦 Getting Started
To start developing:

bash
Copy
Edit
npm install
npm run dev
🧪 Recommended ESLint Configuration (Type-Aware)
For a production-grade setup, enable type-aware linting:

js
Copy
Edit
// eslint.config.js
export default tseslint.config({
  extends: [
    ...tseslint.configs.recommendedTypeChecked,
    // Or use these for stricter standards
    // ...tseslint.configs.strictTypeChecked,
    // ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    parserOptions: {
      project: ['./tsconfig.app.json', './tsconfig.node.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
Optional: React-Specific Plugins
js
Copy
Edit
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
