import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import path from "path"
import pluginRewriteAll from "vite-plugin-rewrite-all"
function resolve(...dir: string[]) {
  return path.resolve(__dirname, ...dir)
}
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // solve the problem that url cannot contain dot
    pluginRewriteAll(),
  ],
  resolve: {
    alias: {
      "@": resolve("src"),
    },
  },
})
