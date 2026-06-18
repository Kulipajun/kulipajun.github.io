import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://theliyuan.com",
  output: "static",
  build: {
    format: "directory",
  },
});
