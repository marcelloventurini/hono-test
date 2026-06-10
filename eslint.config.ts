import js from '@eslint/js';
import { defineConfig } from 'eslint/config';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default defineConfig([
  // 1. Configuração global de arquivos e ambientes
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },

  // 2. Extende as regras recomendadas do JavaScript e TypeScript
  js.configs.recommended,
  ...tseslint.configs.recommended,

  // 3. Suas regras customizadas (devem vir DEPOIS dos extends para sobresscrevê-los)
  {
    rules: {
      'no-unused-vars': 'error',
      indent: ['warn', 2],
      quotes: ['warn', 'single'],
      semi: ['warn', 'always'],
    },
  },
]);
