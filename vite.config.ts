import { defineConfig } from "vite"
import { checker } from "vite-plugin-checker"
import solidPlugin from "vite-plugin-solid"

export default defineConfig({
  base: "/vite_solid_template/",
  plugins: [
    solidPlugin(),
    checker({
      typescript: true,
      eslint: {
        lintCommand: 'eslint "./src/**/*.{ts,tsx}"',
      },
    }),
  ],
  server: {
    port: 3000,
  },
  build: {
    target: "esnext",
  },
})
