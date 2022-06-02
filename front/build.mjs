import { build } from "esbuild";

build({
    entryPoints: [
      "./src/main.ts"
    ],
    bundle: true,
    minify: true,
    outdir: "./dist",
    loader: {
      ".html": "text"
    }
})
