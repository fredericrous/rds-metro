import { defineConfig } from 'tsup';

export default defineConfig({
  dts: {
    compilerOptions: {
      composite: false,
    },
  },
  entry: ['src/index.ts'],
  format: ['esm'],
  sourcemap: true,
  target: 'esnext',
});
