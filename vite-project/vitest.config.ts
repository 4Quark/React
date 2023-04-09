import { defineConfig } from 'vitest/config';
import { mergeConfig } from 'vite';
import viteConfig from './vite.config';

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      css: false,
      environment: 'jsdom',
      globals: true,
      setupFiles: './src/vitestSetup.ts',
      coverage: {
        provider: 'c8',
        all: true,
        skipFull: true,
        reporter: 'text',
        exclude: ['*.config.*', '**/*.d.ts', 'src/interfaces/**'],
      },
    },
  })
);
