import fs from "fs";

/**
 * 指定された出力パスにCSS文字列を追記します。
 *
 * @param output - CSS文字列を追記するファイルのパス
 * @param css - ファイルに追記するCSS文字列
 */
export function writeToFile(output: string, css: string) {
  fs.appendFileSync(output, css);
}
