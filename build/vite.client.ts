import { defineConfig } from 'vite';
import baseConfig from './vite.base';
import env from '../config/env';

const proxy = {
  '^/api': {
    target: 'http://hicky.hpyyb.cn/',
    changeOrigin: true,
  },
}

const config = defineConfig({
  server: { proxy },
  preview: { proxy },
  base: env.BASE_URL || '/',
  build: {
    rollupOptions: {
      output: {
        entryFileNames: 'assets/main-[hash].js',
        manualChunks(url) {
          if (url.includes('node_modules')) {
            return url.split('node_modules/')[1].split('/')[0];
          }
        }
      }
    },
  }
})

export default Object.assign(config, baseConfig);
