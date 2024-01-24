import fs from "fs";
import path from "path";
import { importRfsStr, OutputScssPath } from "./variables";
import { writeToFile } from "./functions";

/**
 * Scope型は、CSSクラスを生成するための範囲とステップを定義します。
 * startNumは範囲の開始値、endNumは範囲の終了値、stepは値の増加量を表します。
 */
type Scope = {
  startNum: number;  // 範囲の開始値
  endNum: number;    // 範囲の終了値
  step: number;      // 値の増加量
}

/**
 * Entry型は、CSSクラスを生成するための設定を定義します。
 * nameは生成するCSSクラスの名前、propsは適用するCSSプロパティの配列、
 * scopesは生成するCSSクラスの範囲とステップを定義するScopeオブジェクトの配列を表します。
 */
type Entry = {
  name: string;     // 生成するCSSクラスの名前
  scopes: Scope[];  // 生成するCSSクラスの範囲とステップを定義するScopeオブジェクトの配列
  props: string[];  // 適用するCSSプロパティの配列
}

/**
 * rfsScopeは、rfsに関連するCSSクラスを生成するための範囲とステップを定義した配列です。
 */
const rfsScopes: Scope[] = [
  { startNum: 0.5, endNum: 4, step: 0.025 },
  { startNum: 4, endNum: 8, step: 0.1 },
  { startNum: 8, endNum: 12, step: 0.25 },
  { startNum: 12, endNum: 16, step: 0.5 }
];

/**
 * commonScopeは、一般的なCSSクラス（rm*とrp*）を生成するための範囲とステップを定義した配列です。
 */
const commonScopes: Scope[] = [
  { startNum: 0.125, endNum: 4, step: 0.125 },
  { startNum: 4, endNum: 8, step: 0.25 },
  { startNum: 8, endNum: 12, step: 0.5 },
  { startNum: 12, endNum: 16, step: 1 }
];

/**
 * entriesは、生成するCSSクラスの設定を定義したEntryオブジェクトの配列です。
 */
const entries: Entry[] = [
  { name: "rfs", scopes: rfsScopes, props: ["font-size"] },
  { name: "rmt", scopes: commonScopes, props: ["margin-top"] },
  { name: "rmb", scopes: commonScopes, props: ["margin-bottom"] },
  { name: "rml", scopes: commonScopes, props: ["margin-left"] },
  { name: "rmr", scopes: commonScopes, props: ["margin-right"] },
  { name: "rmx", scopes: commonScopes, props: ["margin-left", "margin-right"] },
  { name: "rmy", scopes: commonScopes, props: ["margin-top", "margin-bottom"] },
  { name: "rpt", scopes: commonScopes, props: ["padding-top"] },
  { name: "rpb", scopes: commonScopes, props: ["padding-bottom"] },
  { name: "rpl", scopes: commonScopes, props: ["padding-left"] },
  { name: "rpr", scopes: commonScopes, props: ["padding-right"] },
  { name: "rpx", scopes: commonScopes, props: ["padding-left", "padding-right"] },
  { name: "rpy", scopes: commonScopes, props: ["padding-top", "padding-bottom"] },
];

// 各エントリに対して処理を行う
entries.forEach((file: Entry) => {
  // 出力パスの生成
  const output = path.resolve(__dirname, `${OutputScssPath}/_${file.name}.scss`);
  let classStrArr: string[] = [];

  // scopes の配列を startNum の昇順でソート
  const sortedScopes: Scope[] = file.scopes?.sort((a: Scope, b: Scope) => a.startNum - b.startNum) || [];

  // scopes の配列をループ
  sortedScopes.forEach((scope: Scope) => {
    // 指定した範囲でループを回す
    for (let i = scope.startNum; i < scope.endNum;) {
      // 数値を四捨五入して小数点第三位までの文字列に変換
      const num = Math.round(i * 1000) / 1000;

      // クラス名の生成
      const className = `${file.name}-${num.toString().replace('.', '-')}`;

      // 値の生成
      const value = `${num}rem`;

      // クラスの文字列の生成
      let classStr = "";
      classStr += `.${className} {` + '\n';
      file.props.forEach((prop) => {
        classStr += `  @include ${prop}(${value});` + '\n';
      });
      classStr += '}' + '\n\n';

      // classStrArr に追加
      classStrArr.push(classStr);

      // i の増加
      i += scope.step;
    }
  });

  // resultArr から重複を削除
  classStrArr = [...new Set(classStrArr)];

  let css = "";
  css += importRfsStr;

  // resultARr の配列を文字列として連結
  css += classStrArr.join('');

  // ファイルの初期化
  fs.writeFileSync(output, '');

  // ファイルへの書き込み
  writeToFile(output, css.trim() + '\n');
});
