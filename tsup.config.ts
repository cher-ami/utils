import { defineConfig } from "tsup"

export default defineConfig({
  entry: { index: "src/index.ts" },
  splitting: false,
  clean: true,
  minify: true,
  dts: true,
  format: ["cjs", "esm"]
})
