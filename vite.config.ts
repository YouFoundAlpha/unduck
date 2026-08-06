import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  build: { outDir: 'dist' },
  base: '/unduck/',
  plugins: [
    VitePWA({
      registerType: "autoUpdate",
    }),
  ],
});
