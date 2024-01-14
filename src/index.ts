import fs from "fs";
import path from "path";
import { importRfsStr, outputPath } from "./variables";
import { writeToFile } from "./functions";

// エントリの型定義
type Entry = {
  name: string;
  props: string[];
  startNum: number;
  endNum: number;
  step: number;
}

// エントリの配列
const entries: Entry[] = [
  { name: "rfs", props: ["font-size"], startNum: 0.5, endNum: 16, step: 0.025 },
  { name: "rmt", props: ["margin-top"], startNum: 0.125, endNum: 16, step: 0.125 },
  { name: "rmb", props: ["margin-bottom"], startNum: 0.125, endNum: 16, step: 0.125 },
  { name: "rml", props: ["margin-left"], startNum: 0.125, endNum: 16, step: 0.125 },
  { name: "rms", props: ["margin-left"], startNum: 0.125, endNum: 16, step: 0.125 },
  { name: "rmr", props: ["margin-right"], startNum: 0.125, endNum: 16, step: 0.125 },
  { name: "rme", props: ["margin-right"], startNum: 0.125, endNum: 16, step: 0.125 },
  {
    name: "rmx",
    props: [
      "margin-left",
      "margin-right"
    ],
    startNum: 0.125,
    endNum: 16,
    step: 0.125
  },
  {
    name: "rmy",
    props: [
      "margin-top",
      "margin-bottom"
    ],
    startNum: 0.125,
    endNum: 16,
    step: 0.125
  },
  { name: "rpt", props: ["padding-top"], startNum: 0.125, endNum: 16, step: 0.125 },
  { name: "rpb", props: ["padding-bottom"], startNum: 0.125, endNum: 16, step: 0.125 },
  { name: "rpl", props: ["padding-left"], startNum: 0.125, endNum: 16, step: 0.125 },
  { name: "rps", props: ["padding-left"], startNum: 0.125, endNum: 16, step: 0.125 },
  { name: "rpr", props: ["padding-right"], startNum: 0.125, endNum: 16, step: 0.125 },
  { name: "rpe", props: ["padding-right"], startNum: 0.125, endNum: 16, step: 0.125 },
  {
    name: "rpx",
    props: [
      "padding-left",
      "padding-right"
    ],
    startNum: 0.125,
    endNum: 16,
    step: 0.125
  },
  {
    name: "rpy",
    props: [
      "padding-top",
      "padding-bottom"
    ],
    startNum: 0.125,
    endNum: 16,
    step: 0.125
  },
];

// 各エントリに対して処理を行う
entries.forEach((file) => {
  // 出力パスの生成
  const output = path.resolve(__dirname, `${outputPath}/_${file.name}.scss`);
  let result = '';
  result += importRfsStr;

  // 指定した範囲でループを回す
  for (let i = file.startNum; i <= file.endNum; i += file.step) {
    // 数値を四捨五入して小数点第三位までの文字列に変換
    const num = Math.round(i * 1000) / 1000;

    // クラス名の生成
    const className = `${file.name}-${num.toString().replace('.', '-')}`;

    // 値の生成
    const value = `${num}rem`;

    // CSSの生成
    result += `.${className} {` + '\n';
    file.props.forEach((prop) => {
      result += `  @include ${prop}(${value});` + '\n';
    });
    result += '}' + '\n\n';
  }

  // ファイルの初期化
  fs.writeFileSync(output, '');

  // ファイルへの書き込み
  writeToFile(output, result.trim() + '\n');
});
