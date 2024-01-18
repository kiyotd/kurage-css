import fs from "fs";

/**
 * 指定された出力パスに文字列を追記します。
 *
 * @param output - 文字列を追記するファイルのパス
 * @param str - ファイルに追記する文字列
 */
export function writeToFile(output: string, str: string) {
  fs.appendFileSync(output, str);
}
