import { Breakpoint, Entry, Scope } from "./types";

export const OutputScssDefaultPath = "../scss/default";
export const OutputScssBreakPointPath = "../scss/breakpoint";
export const importRfsStr = '@import "../../node_modules/rfs/scss";\n\n';

/**
 * breakpointsは、ブレークポイントの値を定義したオブジェクトです。
 */
export const breakpoints: Breakpoint = {
  "sm": 576,
  "sp": 576,
  "md": 768,
  "tab": 834,
  // "lg": 992,
  // "xl": 1200,
  // "xxl": 1400,
};

/**
 * rfsScopeは、rfsに関連するCSSクラスを生成するための範囲とステップを定義した配列です。
 */
export const rfsScopes: Scope[] = [
  { startNum: 0.5, endNum: 4, step: 0.025 },
  { startNum: 4, endNum: 8, step: 0.1 },
  { startNum: 8, endNum: 12, step: 0.25 },
  { startNum: 12, endNum: 16, step: 0.5 }
];

/**
 * commonScopeは、一般的なCSSクラス（rm*とrp*）を生成するための範囲とステップを定義した配列です。
 */
export const commonScopes: Scope[] = [
  { startNum: 0.125, endNum: 4, step: 0.125 },
  { startNum: 4, endNum: 8, step: 0.25 },
  { startNum: 8, endNum: 12, step: 0.5 },
  { startNum: 12, endNum: 16, step: 1 }
];

/**
 * entriesは、生成するCSSクラスの設定を定義したEntryオブジェクトの配列です。
 */
export const entries: Entry[] = [
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
