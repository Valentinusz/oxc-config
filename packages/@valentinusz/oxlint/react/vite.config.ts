import { resolve } from "node:path";
import { defineConfig } from "vite";
import dts from "unplugin-dts/vite";
import packageJson from "./package.json" with { type: "json" };

export default defineConfig({
  plugins: [dts()],
  build: {
    emptyOutDir: true,
    lib: {
      entry: resolve(import.meta.dirname, "src/index.ts"),
      formats: ["es"],
      fileName: "index",
    },
    rolldownOptions: {
      external: Object.keys(packageJson.peerDependencies ?? {}),
    },
  },
});
