import type { Entry, Scope } from "./types";

export const OutputScssDefaultPath = "../scss/default";
export const OutputScssBreakPointPath = "../scss/breakpoint";
export const importRfsStr = '@import "../../node_modules/rfs/scss";\n\n';

// 10px = rfs-0.625
// 12px = rfs-0.75
// 14px = rfs-0.875
// 16px = rfs-1
// 18px = rfs-1.125
// 20px = rfs-1.25
// 24px = rfs-1.5
// 28px = rfs-1.75
// 32px = rfs-2
// 36px = rfs-2.25
// 40px = rfs-2.5
// 48px = rfs-3

/**
 * rfsScopesは、rfsに関連するCSSクラスを生成するための範囲とステップを定義した配列です。
 */
export const rfsScopes: Scope[] = [
  { startNum: 0.5, endNum: 4, step: 0.025 },
  { startNum: 4, endNum: 8, step: 0.1 },
  { startNum: 8, endNum: 12, step: 0.25 },
  { startNum: 12, endNum: 16, step: 0.5 },
];

/**
 * commonScopesは、一般的なCSSクラス（rm*とrp*）を生成するための範囲とステップを定義した配列です。
 */
export const commonScopes: Scope[] = [
  { startNum: 0, endNum: 4, step: 0.125 },
  { startNum: 4, endNum: 8, step: 0.25 },
  { startNum: 8, endNum: 12, step: 0.5 },
  { startNum: 12, endNum: 16, step: 1 },
];

/**
 * yScopesは、上下のマージンやパディングを生成するための範囲とステップを定義した配列です。
 */
export const yScopes: Scope[] = [
  { startNum: 0, endNum: 4, step: 0.125 },
  { startNum: 4, endNum: 8, step: 0.25 },
  { startNum: 8, endNum: 12, step: 0.5 },
  { startNum: 12, endNum: 48, step: 1 },
];

/**
 * entriesは、生成するCSSクラスの設定を定義したEntryオブジェクトの配列です。
 */
export const entries: Entry[] = [
  { name: "rfs", scopes: rfsScopes, props: ["font-size"] },
  { name: "rmt", scopes: yScopes, props: ["margin-top"] },
  { name: "rmb", scopes: yScopes, props: ["margin-bottom"] },
  { name: "rml", scopes: commonScopes, props: ["margin-left"] },
  { name: "rmr", scopes: commonScopes, props: ["margin-right"] },
  { name: "rmx", scopes: commonScopes, props: ["margin-left", "margin-right"] },
  { name: "rmy", scopes: yScopes, props: ["margin-top", "margin-bottom"] },
  { name: "rpt", scopes: yScopes, props: ["padding-top"] },
  { name: "rpb", scopes: yScopes, props: ["padding-bottom"] },
  { name: "rpl", scopes: commonScopes, props: ["padding-left"] },
  { name: "rpr", scopes: commonScopes, props: ["padding-right"] },
  { name: "rpx", scopes: commonScopes, props: ["padding-left", "padding-right"] },
  { name: "rpy", scopes: yScopes, props: ["padding-top", "padding-bottom"] },
];
