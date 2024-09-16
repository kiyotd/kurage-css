import * as fs from "node:fs";
import * as path from "node:path"; // パスを定義

// パスを定義
const distPath = path.join(__dirname, "../../dist");
const cssFilePath = path.join(__dirname, "rfs.cleanup.css");

// dist ディレクトリ内のすべての .css ファイルを取得
const cssFiles = fs.readdirSync(distPath).filter(file => file.endsWith(".css"));

cssFiles.forEach(fileName => {
  const filePath = path.join(distPath, fileName);

  // ファイル名から 2xl の部分を取得
  const match = fileName.match(/-(\w+)-\d+\.css$/);
  let cssContent = fs.readFileSync(cssFilePath, "utf8");

  if (match) {
    const size = match[1];
    // .rfs- を .rfs-2xl- に置換
    cssContent = cssContent.replace(/\.rfs-/g, `.rfs-${size}-`);
  }

  // 現在の .css ファイルの内容を読み込む
  const fileContent = fs.readFileSync(filePath, "utf8");

  // 最後の行の位置を見つける
  const lastLineIndex = fileContent.lastIndexOf("\n");

  // css.css の内容を最後の行の1つ上に挿入
  let newContent = fileContent.slice(0, lastLineIndex) + cssContent + fileContent.slice(lastLineIndex);

  // 空白行を削除
  newContent = newContent.replace(/^\s*[\r\n]/gm, "");

  // 変更された内容をファイルに書き込む
  fs.writeFileSync(filePath, newContent, "utf8");
  // console.log(`ファイルを更新しました: ${fileName}`);
});
