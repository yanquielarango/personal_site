// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path";
export default defineNuxtConfig({
    devtools: { enabled: true },
    alias: {
        assets: "~/assets/main.css",
    },
    css: ["~/assets/main.css"],
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  })