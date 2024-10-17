import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(() => {
  const branch = process.env.BRANCH || 'dev';
  const isMainBranch = branch === 'main';

  return {
    plugins: [react()],
    server: {
      port: isMainBranch ? 0 : 4001,
      host: '0.0.0.0',
    },
    base: isMainBranch ? "/" : "/d/minhafacomp/",
    define: {
      'import.meta.env.VITE_BRANCH': JSON.stringify(branch)
    }
  }
})
