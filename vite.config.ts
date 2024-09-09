import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';
import tsconfigPaths from 'vite-tsconfig-paths';
import react from '@vitejs/plugin-react';

export default defineConfig(() => {
  return {
    base: '/emfy-test/',
    plugins: [react(), checker({ typescript: true }), tsconfigPaths()],
  };
});
