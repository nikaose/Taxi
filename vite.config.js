import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";
import { VitePWA } from "vite-plugin-pwa";
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.svg", "robots.txt"],
      manifest: {
        name: "Taxi Gow",
        short_name: "Taxi",
        description:
          "Taxi Gow — to całodobowa usługa taksówkarska na terenie Kępna i okolic. Szybka dostawa, doświadczeni kierowcy, najlepsze ceny",
        theme_color: "#fec900",
        background_color: "#ffffff",
        display: "standalone",
        orientation: "any",
        scope: "/",
        start_url: "/",
        icons: [
          {
            src: "/img/icons/icon_128.png",
            sizes: "128x128",
            type: "image/png",
          },
          {
            src: "/img/icons/icon_192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/img/icons/icon_512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/img/icons/maskable_192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any maskable",
          },
          {
            src: "/img/icons/maskable_512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
    }),
  ],
  build: {
    minify: "esbuild",
  },
});
