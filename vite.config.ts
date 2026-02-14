import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import mdx from "@mdx-js/rollup";
import remarkGfm from "remark-gfm";

export default defineConfig({
  server: { port: 3000 },
  plugins: [
    mdx({ remarkPlugins: [remarkGfm] }), // MDX must come first
    react(),
  ],
  build: {
    outDir: "dist",
    assetsDir: "assets",
    sourcemap: false,
  },
  base: "/",
});
