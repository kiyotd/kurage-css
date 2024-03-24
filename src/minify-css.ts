import fs from "node:fs";
import path from "node:path";

import esbuild from "esbuild";

// distディレクトリ内のすべてのCSSファイルを取得
const cssFiles: string[] = fs
  .readdirSync("./dist")
  .filter((file) => file.endsWith(".css") && !file.endsWith(".temp.css"));

cssFiles.forEach((file: string, _index) => {
  // 各CSSファイルをminify
  esbuild
    .build({
      entryPoints: [path.join("./dist", file)],
      bundle: true,
      minify: true,
      sourcemap: false,
      outfile: path.join("./dist/min", file.replace(".css", ".min.css")),
    })
    .catch(() => process.exit(1));
});
