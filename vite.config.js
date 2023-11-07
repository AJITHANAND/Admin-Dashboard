import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  const basename = mode === 'production' ? '/Admin-Dashboard/' : '/';
  // eslint-disable-next-line no-undef
  const env = loadEnv(mode, process.cwd());
  return {
    define: {
      'process.env': env,
    },
    base: basename,
    plugins: [react()],
    host: true,
    strictPort: true,
    port: 5173,
    build: {
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return id.toString().split('node_modules/')[1].split('/')[0].toString();
            }
          },
        },
      },
    },
  };
});