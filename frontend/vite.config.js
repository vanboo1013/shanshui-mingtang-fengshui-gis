import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import cesium from "vite-plugin-cesium";

export default defineConfig({
  // Vercel 部署在根域名；本地 dev 同样使用根路径
  base: "/",
  plugins: [vue(), cesium()],
  server: {
    port: 5173,
  },
  resolve: {
    alias: {
      "@zip.js/zip.js/lib/zip-no-worker.js": "@zip.js/zip.js",
    },
  },
});
