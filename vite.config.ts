import { defineConfig } from "vite";
import { analyzer } from "vite-bundle-analyzer";
import deadFile from "vite-plugin-deadfile";
import unusedCode from "vite-plugin-unused-code";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    deadFile({
      root: "src",
    }),
    analyzer(),
    unusedCode({
      patterns: ["src/**/*.*"],
    }),
  ],
});
