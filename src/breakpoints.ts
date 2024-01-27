import { Breakpoint } from "./types";

/**
 * breakpointsは、ブレークポイントの名前と値の配列を定義したオブジェクトです。
 * @media (max-width: <値>px) のメディアクエリが定義されます。
 */
export const breakpoints: Breakpoint = {
  "sp": [430, 576],
  "sm": [575, 576],
  "md": [767, 768],
  "tab": [768, 834],
  "lg": [991, 992],
  "xl": [1999, 1200],
  "xxl": [1399, 1400],
};
