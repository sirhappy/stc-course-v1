/* eslint-disable n/prefer-global/process */
import { URL, fileURLToPath } from 'node:url';

import { defineConfig, loadEnv } from 'vite';
import Vue from '@vitejs/plugin-vue';
import type { ConfigEnv, UserConfig } from 'vite';
import Components from 'unplugin-vue-components/vite';
import AutoImport from 'unplugin-auto-import/vite';
import UnoCSS from 'unocss/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';

const CWD = process.cwd();

export default defineConfig(({ mode }: ConfigEnv): UserConfig => {
  const {
    VITE_API_DESTINATION,
    VITE_BASE_URL,
    // temp
    VITE_TEMP_API_DESTINATION,
    VITE_XPRT_API_DESTINATION,
    VITE_XPRT_URL,
    VITE_TEMP_URL,
  } = loadEnv(mode, CWD);

  return {
    // path resolver
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },

    // plugins setup
    plugins: [
      Vue(),

      // auto import component
      Components({
        dts: './auto/components.d.ts',
        include: [/\.vue$/, /\.vue\?vue/],
        resolvers: [
          AntDesignVueResolver({
            importStyle: false,
          }),
        ],
      }),

      // Auto import
      AutoImport({
        dts: './auto/auto-imports.d.ts',
        dirs: [
          './src/composable/core',
          './src/stores',
          './src/enums',
          './src/constants',
        ],
        imports: ['vue', 'vue-router', 'pinia'],
        vueTemplate: true,
      }),

      // Uno css
      UnoCSS(),
    ],

    // Dependencies
    optimizeDeps: {
      include: [
        'lodash-es',
      ],
    },

    // LESS preprocessor
    css: {
      preprocessorOptions: {
        less: {
          additionalData: '@import "./src/assets/styles/variables.less";',
        },
      },
    },

    // server proxy
    server: {
      port: 3000,
      host: true,
      proxy: {
        [VITE_BASE_URL]: {
          target: VITE_API_DESTINATION,
          changeOrigin: true,
          rewrite: path => path.replace(/^\/api2/, ''),
        },
        [VITE_TEMP_URL]: {
          target: VITE_TEMP_API_DESTINATION,
          changeOrigin: true,
          rewrite: path => path.replace(/^\/rpc-api/, ''),
        },
        [VITE_XPRT_URL]: {
          target: VITE_XPRT_API_DESTINATION,
          changeOrigin: true,
          rewrite: path => path.replace(/^\/api/, ''),
        },
      },
    },
    // dist preview port
    preview: {
      port: 80,
      proxy: {
        [VITE_BASE_URL]: {
          target: VITE_API_DESTINATION,
          changeOrigin: true,
          rewrite: path => path.replace(/^\/api2/, ''),
        },
        [VITE_TEMP_URL]: {
          target: VITE_TEMP_API_DESTINATION,
          changeOrigin: true,
          rewrite: path => path.replace(/^\/rpc-api/, ''),
        },
        [VITE_XPRT_URL]: {
          target: VITE_XPRT_API_DESTINATION,
          changeOrigin: true,
          rewrite: path => path.replace(/^\/api/, ''),
        },
      },
    },

    // deploy info
    build: {
      target: 'es2017',
      minify: 'esbuild',
      cssTarget: 'chrome79',
      chunkSizeWarningLimit: 2000,
    },
  };
});
