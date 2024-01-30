import esbuild from "esbuild";
import fs from "fs";
import path from "path";

// distディレクトリ内のすべてのCSSファイルを取得
const cssFiles: string[] = fs.readdirSync('./dist').filter(file => file.endsWith('.css') && !file.endsWith('.temp.css'));

cssFiles.forEach((file: string) => {
  // 各CSSファイルをminify
  esbuild.build({
    entryPoints: [path.join('./dist', file)],
    bundle: true,
    minify: true,
    sourcemap: false,
    outfile: path.join('./dist/min', file.replace('.css', '.min.css')),
  }).catch(() => process.exit(1))
});
