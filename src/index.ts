import fs from "fs";
import path from "path";
import { entries, importRfsStr, OutputScssBreakPointPath, OutputScssDefaultPath } from "./variables";
import { breakpoints } from "./breakpoints";
import { writeToFile } from "./functions";
import { Entry, Scope } from "./types";

/**
 * デフォルトのSCSSを生成する
 */

// 各エントリに対して処理を行う
entries.forEach((file: Entry) => {
  // 出力パスの生成
  const output = path.resolve(__dirname, `${OutputScssDefaultPath}/_${file.name}.scss`);
  let classStrArr: string[] = [];

  // scopes の配列を startNum の昇順でソート
  const sortedScopes: Scope[] = file.scopes?.sort((a: Scope, b: Scope) => a.startNum - b.startNum) || [];

  // scopes の配列をループ
  sortedScopes.forEach((scope: Scope) => {
    // 指定した範囲でループを回す
    for (let i = scope.startNum; i <= scope.endNum;) {
      // 数値を四捨五入して小数点第三位までの文字列に変換
      const num = Math.round(i * 1000) / 1000;

      // クラス名の生成
      const className = `${file.name}-${num.toString().replace('.', '-')}`;

      // 値の生成 0 なら rem はつけない
      let value = "0";
      if (num !== 0) {
        value = `${num}rem`;
      }

      // クラスの文字列の生成
      let classStr = "";
      classStr += `.${className} {` + '\n';
      file.props.forEach((prop) => {
        classStr += `  @include ${prop}(${value});` + '\n';
      });
      classStr += '}' + '\n\n';

      // classStrArr に追加
      classStrArr.push(classStr);

      // !important のクラスの文字列の生成
      let classStrImportant = "";
      classStrImportant += `.${className}\\! {` + '\n';
      file.props.forEach((prop) => {
        classStrImportant += `  @include ${prop}(${value} !important);` + '\n';
      });
      classStrImportant += '}' + '\n\n';

      // classStrArr に追加
      classStrArr.push(classStrImportant);

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

/**
 * メディアクエリでラップしたSCSSを生成する
 */

// 各エントリに対して処理を行う
entries.forEach((file: Entry) => {
  // 出力パスの生成
  const output = path.resolve(__dirname, `${OutputScssBreakPointPath}/_${file.name}.scss`);
  let classStrArr: string[] = [];

  // scopes の配列を startNum の昇順でソート
  const sortedScopes: Scope[] = file.scopes?.sort((a: Scope, b: Scope) => a.startNum - b.startNum) || [];

  // .rfs-sp-d-1 のように、breakpoint ごとにクラスを生成する
  Object.keys(breakpoints).forEach((key) => {

    // scopes の配列をループ
    sortedScopes.forEach((scope: Scope) => {
      // 指定した範囲でループを回す
      for (let i = scope.startNum; i <= scope.endNum;) {
        // 数値を四捨五入して小数点第三位までの文字列に変換
        const num = Math.round(i * 1000) / 1000;

        // クラス名の生成
        const className = `${file.name}-${key}-${num.toString().replace('.', '-')}`;

        // 値の生成 0 なら rem はつけない
        let value = "0";
        if (num !== 0) {
          value = `${num}rem`;
        }

        // クラスの文字列の生成
        let classStr = "";
        classStr += `.${className} {`;
        file.props.forEach((prop) => {
          classStr += `@include ${prop}(${value});`;
        });
        classStr += '}' + '\n';

        // classStrArr に追加
        classStrArr.push(classStr);

        // !important のクラスの文字列の生成
        let classStrImportant = "";
        classStrImportant += `.${className}\\! {`;
        file.props.forEach((prop) => {
          classStrImportant += `@include ${prop}(${value} !important);`;
        });
        classStrImportant += '}' + '\n';

        // classStrArr に追加
        classStrArr.push(classStrImportant);

        // i の増加
        i += scope.step;
      }
    });

  });

  // resultArr重複を削除
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
