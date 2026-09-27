import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import cesium from "vite-plugin-cesium";

export default defineConfig({
  // GitHub Pages 项目站点子路径：https://<用户名>.github.io/shanshui-mingtang-fengshui-gis/
  base: "/shanshui-mingtang-fengshui-gis/",
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
