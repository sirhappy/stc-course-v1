// vite.config.ts
import { URL, fileURLToPath } from "node:url";
import { defineConfig, loadEnv } from "file:///C:/Users/anhlh/Desktop/ProjectRepo/1.%20SideProject/course-management/node_modules/vite/dist/node/index.js";
import Vue from "file:///C:/Users/anhlh/Desktop/ProjectRepo/1.%20SideProject/course-management/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import Components from "file:///C:/Users/anhlh/Desktop/ProjectRepo/1.%20SideProject/course-management/node_modules/unplugin-vue-components/dist/vite.mjs";
import AutoImport from "file:///C:/Users/anhlh/Desktop/ProjectRepo/1.%20SideProject/course-management/node_modules/unplugin-auto-import/dist/vite.js";
import UnoCSS from "file:///C:/Users/anhlh/Desktop/ProjectRepo/1.%20SideProject/course-management/node_modules/unocss/dist/vite.mjs";
import { AntDesignVueResolver } from "file:///C:/Users/anhlh/Desktop/ProjectRepo/1.%20SideProject/course-management/node_modules/unplugin-vue-components/dist/resolvers.mjs";
var __vite_injected_original_import_meta_url = "file:///C:/Users/anhlh/Desktop/ProjectRepo/1.%20SideProject/course-management/vite.config.ts";
var CWD = process.cwd();
var vite_config_default = defineConfig(({ mode }) => {
  const {
    VITE_API_DESTINATION,
    VITE_BASE_URL,
    // temp
    VITE_TEMP_API_DESTINATION,
    VITE_XPRT_API_DESTINATION,
    VITE_XPRT_URL,
    VITE_TEMP_URL
  } = loadEnv(mode, CWD);
  return {
    // path resolver
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
      }
    },
    // plugins setup
    plugins: [
      Vue(),
      // auto import component
      Components({
        dts: "./auto/components.d.ts",
        include: [/\.vue$/, /\.vue\?vue/],
        resolvers: [
          AntDesignVueResolver({
            importStyle: false
          })
        ]
      }),
      // Auto import
      AutoImport({
        dts: "./auto/auto-imports.d.ts",
        dirs: [
          "./src/composable/core",
          "./src/stores",
          "./src/enums",
          "./src/constants"
        ],
        imports: ["vue", "vue-router", "pinia"],
        vueTemplate: true
      }),
      // Uno css
      UnoCSS()
    ],
    // Dependencies
    optimizeDeps: {
      include: [
        "lodash-es"
      ]
    },
    // LESS preprocessor
    css: {
      preprocessorOptions: {
        less: {
          additionalData: '@import "./src/assets/styles/variables.less";'
        }
      }
    },
    // server proxy
    server: {
      port: 3e3,
      host: true,
      proxy: {
        [VITE_BASE_URL]: {
          target: VITE_API_DESTINATION,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api2/, "")
        },
        [VITE_TEMP_URL]: {
          target: VITE_TEMP_API_DESTINATION,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/rpc-api/, "")
        },
        [VITE_XPRT_URL]: {
          target: VITE_XPRT_API_DESTINATION,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, "")
        }
      }
    },
    // dist preview port
    preview: {
      port: 80,
      proxy: {
        [VITE_BASE_URL]: {
          target: VITE_API_DESTINATION,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api2/, "")
        },
        [VITE_TEMP_URL]: {
          target: VITE_TEMP_API_DESTINATION,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/rpc-api/, "")
        },
        [VITE_XPRT_URL]: {
          target: VITE_XPRT_API_DESTINATION,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, "")
        }
      }
    },
    // deploy info
    build: {
      target: "es2017",
      minify: "esbuild",
      cssTarget: "chrome79",
      chunkSizeWarningLimit: 2e3
    }
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxhbmhsaFxcXFxEZXNrdG9wXFxcXFByb2plY3RSZXBvXFxcXDEuIFNpZGVQcm9qZWN0XFxcXGNvdXJzZS1tYW5hZ2VtZW50XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxhbmhsaFxcXFxEZXNrdG9wXFxcXFByb2plY3RSZXBvXFxcXDEuIFNpZGVQcm9qZWN0XFxcXGNvdXJzZS1tYW5hZ2VtZW50XFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9hbmhsaC9EZXNrdG9wL1Byb2plY3RSZXBvLzEuJTIwU2lkZVByb2plY3QvY291cnNlLW1hbmFnZW1lbnQvdml0ZS5jb25maWcudHNcIjsvKiBlc2xpbnQtZGlzYWJsZSBuL3ByZWZlci1nbG9iYWwvcHJvY2VzcyAqL1xyXG5pbXBvcnQgeyBVUkwsIGZpbGVVUkxUb1BhdGggfSBmcm9tICdub2RlOnVybCc7XHJcblxyXG5pbXBvcnQgeyBkZWZpbmVDb25maWcsIGxvYWRFbnYgfSBmcm9tICd2aXRlJztcclxuaW1wb3J0IFZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnO1xyXG5pbXBvcnQgdHlwZSB7IENvbmZpZ0VudiwgVXNlckNvbmZpZyB9IGZyb20gJ3ZpdGUnO1xyXG5pbXBvcnQgQ29tcG9uZW50cyBmcm9tICd1bnBsdWdpbi12dWUtY29tcG9uZW50cy92aXRlJztcclxuaW1wb3J0IEF1dG9JbXBvcnQgZnJvbSAndW5wbHVnaW4tYXV0by1pbXBvcnQvdml0ZSc7XHJcbmltcG9ydCBVbm9DU1MgZnJvbSAndW5vY3NzL3ZpdGUnO1xyXG5pbXBvcnQgeyBBbnREZXNpZ25WdWVSZXNvbHZlciB9IGZyb20gJ3VucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3Jlc29sdmVycyc7XHJcblxyXG5jb25zdCBDV0QgPSBwcm9jZXNzLmN3ZCgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKCh7IG1vZGUgfTogQ29uZmlnRW52KTogVXNlckNvbmZpZyA9PiB7XHJcbiAgY29uc3Qge1xyXG4gICAgVklURV9BUElfREVTVElOQVRJT04sXHJcbiAgICBWSVRFX0JBU0VfVVJMLFxyXG4gICAgLy8gdGVtcFxyXG4gICAgVklURV9URU1QX0FQSV9ERVNUSU5BVElPTixcclxuICAgIFZJVEVfWFBSVF9BUElfREVTVElOQVRJT04sXHJcbiAgICBWSVRFX1hQUlRfVVJMLFxyXG4gICAgVklURV9URU1QX1VSTCxcclxuICB9ID0gbG9hZEVudihtb2RlLCBDV0QpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgLy8gcGF0aCByZXNvbHZlclxyXG4gICAgcmVzb2x2ZToge1xyXG4gICAgICBhbGlhczoge1xyXG4gICAgICAgICdAJzogZmlsZVVSTFRvUGF0aChuZXcgVVJMKCcuL3NyYycsIGltcG9ydC5tZXRhLnVybCkpLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBwbHVnaW5zIHNldHVwXHJcbiAgICBwbHVnaW5zOiBbXHJcbiAgICAgIFZ1ZSgpLFxyXG5cclxuICAgICAgLy8gYXV0byBpbXBvcnQgY29tcG9uZW50XHJcbiAgICAgIENvbXBvbmVudHMoe1xyXG4gICAgICAgIGR0czogJy4vYXV0by9jb21wb25lbnRzLmQudHMnLFxyXG4gICAgICAgIGluY2x1ZGU6IFsvXFwudnVlJC8sIC9cXC52dWVcXD92dWUvXSxcclxuICAgICAgICByZXNvbHZlcnM6IFtcclxuICAgICAgICAgIEFudERlc2lnblZ1ZVJlc29sdmVyKHtcclxuICAgICAgICAgICAgaW1wb3J0U3R5bGU6IGZhbHNlLFxyXG4gICAgICAgICAgfSksXHJcbiAgICAgICAgXSxcclxuICAgICAgfSksXHJcblxyXG4gICAgICAvLyBBdXRvIGltcG9ydFxyXG4gICAgICBBdXRvSW1wb3J0KHtcclxuICAgICAgICBkdHM6ICcuL2F1dG8vYXV0by1pbXBvcnRzLmQudHMnLFxyXG4gICAgICAgIGRpcnM6IFtcclxuICAgICAgICAgICcuL3NyYy9jb21wb3NhYmxlL2NvcmUnLFxyXG4gICAgICAgICAgJy4vc3JjL3N0b3JlcycsXHJcbiAgICAgICAgICAnLi9zcmMvZW51bXMnLFxyXG4gICAgICAgICAgJy4vc3JjL2NvbnN0YW50cycsXHJcbiAgICAgICAgXSxcclxuICAgICAgICBpbXBvcnRzOiBbJ3Z1ZScsICd2dWUtcm91dGVyJywgJ3BpbmlhJ10sXHJcbiAgICAgICAgdnVlVGVtcGxhdGU6IHRydWUsXHJcbiAgICAgIH0pLFxyXG5cclxuICAgICAgLy8gVW5vIGNzc1xyXG4gICAgICBVbm9DU1MoKSxcclxuICAgIF0sXHJcblxyXG4gICAgLy8gRGVwZW5kZW5jaWVzXHJcbiAgICBvcHRpbWl6ZURlcHM6IHtcclxuICAgICAgaW5jbHVkZTogW1xyXG4gICAgICAgICdsb2Rhc2gtZXMnLFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBMRVNTIHByZXByb2Nlc3NvclxyXG4gICAgY3NzOiB7XHJcbiAgICAgIHByZXByb2Nlc3Nvck9wdGlvbnM6IHtcclxuICAgICAgICBsZXNzOiB7XHJcbiAgICAgICAgICBhZGRpdGlvbmFsRGF0YTogJ0BpbXBvcnQgXCIuL3NyYy9hc3NldHMvc3R5bGVzL3ZhcmlhYmxlcy5sZXNzXCI7JyxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBzZXJ2ZXIgcHJveHlcclxuICAgIHNlcnZlcjoge1xyXG4gICAgICBwb3J0OiAzMDAwLFxyXG4gICAgICBob3N0OiB0cnVlLFxyXG4gICAgICBwcm94eToge1xyXG4gICAgICAgIFtWSVRFX0JBU0VfVVJMXToge1xyXG4gICAgICAgICAgdGFyZ2V0OiBWSVRFX0FQSV9ERVNUSU5BVElPTixcclxuICAgICAgICAgIGNoYW5nZU9yaWdpbjogdHJ1ZSxcclxuICAgICAgICAgIHJld3JpdGU6IHBhdGggPT4gcGF0aC5yZXBsYWNlKC9eXFwvYXBpMi8sICcnKSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIFtWSVRFX1RFTVBfVVJMXToge1xyXG4gICAgICAgICAgdGFyZ2V0OiBWSVRFX1RFTVBfQVBJX0RFU1RJTkFUSU9OLFxyXG4gICAgICAgICAgY2hhbmdlT3JpZ2luOiB0cnVlLFxyXG4gICAgICAgICAgcmV3cml0ZTogcGF0aCA9PiBwYXRoLnJlcGxhY2UoL15cXC9ycGMtYXBpLywgJycpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgW1ZJVEVfWFBSVF9VUkxdOiB7XHJcbiAgICAgICAgICB0YXJnZXQ6IFZJVEVfWFBSVF9BUElfREVTVElOQVRJT04sXHJcbiAgICAgICAgICBjaGFuZ2VPcmlnaW46IHRydWUsXHJcbiAgICAgICAgICByZXdyaXRlOiBwYXRoID0+IHBhdGgucmVwbGFjZSgvXlxcL2FwaS8sICcnKSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIC8vIGRpc3QgcHJldmlldyBwb3J0XHJcbiAgICBwcmV2aWV3OiB7XHJcbiAgICAgIHBvcnQ6IDgwLFxyXG4gICAgICBwcm94eToge1xyXG4gICAgICAgIFtWSVRFX0JBU0VfVVJMXToge1xyXG4gICAgICAgICAgdGFyZ2V0OiBWSVRFX0FQSV9ERVNUSU5BVElPTixcclxuICAgICAgICAgIGNoYW5nZU9yaWdpbjogdHJ1ZSxcclxuICAgICAgICAgIHJld3JpdGU6IHBhdGggPT4gcGF0aC5yZXBsYWNlKC9eXFwvYXBpMi8sICcnKSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIFtWSVRFX1RFTVBfVVJMXToge1xyXG4gICAgICAgICAgdGFyZ2V0OiBWSVRFX1RFTVBfQVBJX0RFU1RJTkFUSU9OLFxyXG4gICAgICAgICAgY2hhbmdlT3JpZ2luOiB0cnVlLFxyXG4gICAgICAgICAgcmV3cml0ZTogcGF0aCA9PiBwYXRoLnJlcGxhY2UoL15cXC9ycGMtYXBpLywgJycpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgW1ZJVEVfWFBSVF9VUkxdOiB7XHJcbiAgICAgICAgICB0YXJnZXQ6IFZJVEVfWFBSVF9BUElfREVTVElOQVRJT04sXHJcbiAgICAgICAgICBjaGFuZ2VPcmlnaW46IHRydWUsXHJcbiAgICAgICAgICByZXdyaXRlOiBwYXRoID0+IHBhdGgucmVwbGFjZSgvXlxcL2FwaS8sICcnKSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBkZXBsb3kgaW5mb1xyXG4gICAgYnVpbGQ6IHtcclxuICAgICAgdGFyZ2V0OiAnZXMyMDE3JyxcclxuICAgICAgbWluaWZ5OiAnZXNidWlsZCcsXHJcbiAgICAgIGNzc1RhcmdldDogJ2Nocm9tZTc5JyxcclxuICAgICAgY2h1bmtTaXplV2FybmluZ0xpbWl0OiAyMDAwLFxyXG4gICAgfSxcclxuICB9O1xyXG59KTtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUNBLFNBQVMsS0FBSyxxQkFBcUI7QUFFbkMsU0FBUyxjQUFjLGVBQWU7QUFDdEMsT0FBTyxTQUFTO0FBRWhCLE9BQU8sZ0JBQWdCO0FBQ3ZCLE9BQU8sZ0JBQWdCO0FBQ3ZCLE9BQU8sWUFBWTtBQUNuQixTQUFTLDRCQUE0QjtBQVRzTixJQUFNLDJDQUEyQztBQVc1UyxJQUFNLE1BQU0sUUFBUSxJQUFJO0FBRXhCLElBQU8sc0JBQVEsYUFBYSxDQUFDLEVBQUUsS0FBSyxNQUE2QjtBQUMvRCxRQUFNO0FBQUEsSUFDSjtBQUFBLElBQ0E7QUFBQTtBQUFBLElBRUE7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxFQUNGLElBQUksUUFBUSxNQUFNLEdBQUc7QUFFckIsU0FBTztBQUFBO0FBQUEsSUFFTCxTQUFTO0FBQUEsTUFDUCxPQUFPO0FBQUEsUUFDTCxLQUFLLGNBQWMsSUFBSSxJQUFJLFNBQVMs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
