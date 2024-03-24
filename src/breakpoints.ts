import type { Breakpoints } from "./types";

/**
 * breakpointsは、ブレークポイントの名前と値の配列を定義したオブジェクトです。
 * @media (max-width: <値>px) のメディアクエリが定義されます。
 * モバイルファースト (min-width) のフレームワーク Tailwind CSS, Bootstrap のブレイクポイントに
 * 対応するため -1 した値も定義しています。
 */
export const breakpoints: Breakpoints = {
  sp: [430, 576],
  sm: [575, 576, 639, 640],
  md: [767, 768],
  tab: [768, 834],
  lg: [991, 992, 1023, 1024],
  xl: [1199, 1200, 1279, 1280],
  xxl: [1399, 1400],
  "2xl": [1535, 1536],
};
