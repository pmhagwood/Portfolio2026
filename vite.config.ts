import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const fromSrc = (directory: string) =>
  fileURLToPath(new URL(`./src/${directory}`, import.meta.url));

export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "@assets": fromSrc("assets"),
      "@components": fromSrc("components"),
      "@pages": fromSrc("pages"),
      "@data": fromSrc("data"),
      "@app-types": fromSrc("types"),
      "@hooks": fromSrc("hooks"),
      "@styles": fromSrc("styles"),
    },
  },
});
