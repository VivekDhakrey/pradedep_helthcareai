
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [react()],
    define: {
      // Prevents "process is not defined" error if key is missing
      'process.env.API_KEY': JSON.stringify(env.API_KEY || ''), 
    },
  };
});
