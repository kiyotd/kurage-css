import fs from "node:fs";
import path from "node:path";

const distPath = path.join(__dirname, "../../dist");
const srcCssFileNameArr: string[] = ["kurage.css"];

srcCssFileNameArr.forEach((fileName: string, _index) => {
  const filePath = path.join(distPath, fileName);

  if (fs.existsSync(filePath)) {
    fs.readFile(filePath, "utf8", (err: NodeJS.ErrnoException | null, data: string) => {
      if (err) throw err;

      // 最終的な文字列を1行ずつ格納する配列
      let resultStrArr: string[] = [];

      // ファイルの内容を取得
      let css = data;

      // 1行目のバージョン情報を取得
      const versionInfo = css.split("\n")[0];

      // 1行目のバージョン情報を削除
      css = css.replace(`${versionInfo}\n`, "");

      // @media で始まる行を削除
      css = css.replace(/@media \(min-width: 1200px\) \{[\s\S]*?\}/g, "");

      // 空行を削除
      css = css.replace(/^\s*[\r\n]/gm, "");

      // `}改行}` を `}` に置換
      css = css.replace(/\}[\r\n]\}/g, "}");
      css = css.replace(/\}[\r\n]\}/g, "}");
      css = css.replace(/\}[\r\n]\}/g, "}");

      // `}` で始まる行以外の末尾の改行を削除 (1クラス1行にする)
      css = css.replace(/(?<!\})[\r\n]/g, "");

      // 半角スペース2個を削除
      css = css.replace(/ {2}/g, "");

      // 1行目に versionInfo を追加
      resultStrArr.push(versionInfo);

      resultStrArr.push(css);

      // 新しいファイル名を生成
      const newFileName = `kurage.css`;
      const newFilePath = path.join(distPath, newFileName);

      // ファイルの初期化
      fs.writeFileSync(newFilePath, "");

      // ファイルへの書き込み
      fs.appendFileSync(newFilePath, resultStrArr.join("\n"));
    });
  } else {
    console.log(`File does not exist: ${filePath}`);
  }
});
