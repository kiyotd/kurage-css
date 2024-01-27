/**
 * Breakpoint型は、ブレークポイントの名前と値を定義します。
 */
export type Breakpoint = {
  [key: string]: number[];
};

/**
 * Scope型は、CSSクラスを生成するための範囲とステップを定義します。
 * startNumは範囲の開始値、endNumは範囲の終了値、stepは値の増加量を表します。
 */export type Scope = {
  startNum: number;  // 範囲の開始値
  endNum: number;    // 範囲の終了値
  step: number;      // 値の増加量
}

/**
 * Entry型は、CSSクラスを生成するための設定を定義します。
 * nameは生成するCSSクラスの名前、propsは適用するCSSプロパティの配列、
 * scopesは生成するCSSクラスの範囲とステップを定義するScopeオブジェクトの配列を表します。
 */
export type Entry = {
  name: string;     // 生成するCSSクラスの名前
  scopes: Scope[];  // 生成するCSSクラスの範囲とステップを定義するScopeオブジェクトの配列
  props: string[];  // 適用するCSSプロパティの配列
}
