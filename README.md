# kurage-css

https://github.com/kiyotd/kurage-css/assets/41136135/8bb05726-5747-4538-9abc-764ff57c4fc3

Class utility to specify responsive font size, margins, and padding. It is generic and can be incorporated into a variety of projects.

It can also be used with frameworks such as Tailwind CSS, Bootstrap, etc.

Breakpoints are also supported, allowing you to add your own breakpoints; based on a PC-first design philosophy, it uses media queries based on max-width (~ or less). Responsive design that adapts to various device sizes can be realized.

```html

<link rel="stylesheet" href="./your-style.css">
<link rel="stylesheet" href="./kurage-css/dist/min/kurage.min.css">
<!-- Breakpoints are read in order of size -->
<link rel="stylesheet" href="./kurage-css/dist/min/kurage-tab-834.min.css">
<link rel="stylesheet" href="./kurage-css/dist/min/kurage-sp-576.min.css">

<!-- Example of font size -->
<p class="rfs-1-8 rfs-sp-1-6">
  The font size is 1.8rem on a PC and 1.6rem on a smartphone.
  Moreover, it is resized in responsive.
</p>
```

---

レスポンシブ対応のフォントサイズ、マージン、パディングを指定できるクラスユーティリティ。汎用的で様々なプロジェクトに組み込めます。

Tailwind CSS, Bootstrap 等のフレームワークとも併用できます。

ブレイクポイントにも対応しており、独自のブレイクポイントを追加可能です。PCファーストの設計思想に基づいており、max-width (〜以下) によるメディアクエリを使用しています。さまざまなデバイスサイズに適応したレスポンシブなデザインを実現可能です。

```html

<link rel="stylesheet" href="./your-style.css">
<link rel="stylesheet" href="./kurage-css/dist/min/kurage.min.css">
<!-- ブレイクポイントは大きい順に読み込む -->
<link rel="stylesheet" href="./kurage-css/dist/min/kurage-tab-834.min.css">
<link rel="stylesheet" href="./kurage-css/dist/min/kurage-sp-576.min.css">

<!-- フォントサイズの例 -->
<p class="rfs-1-8 rfs-sp-1-6">
  PCでは 1.8rem、スマートフォンでは 1.6remのフォントサイズ。
  しかも、レスポンシプでサイズ変更されます。
</p>
```

## Font size

| Class   | Description          |
|---------|----------------------|
| `rfs-*` | Responsive font size |

## Margin

| Class   | Description                                      |
|---------|--------------------------------------------------|
| `rmt-*` | Responsive margin top                            |
| `rmb-*` | Responsive margin bottom                         |
| `rml-*` | Responsive margin left                           |
| `rmr-*` | Responsive margin right                          |
| `rmx-*` | Responsive margin on the x-axis (left and right) |
| `rmy-*` | Responsive margin on the y-axis (top and bottom) |

## Padding

| Class   | Description                                       |
|---------|---------------------------------------------------|
| `rpt-*` | Responsive padding top                            |
| `rpb-*` | Responsive padding bottom                         |
| `rpl-*` | Responsive padding left                           |
| `rpr-*` | Responsive padding right                          |
| `rpx-*` | Responsive padding on the x-axis (left and right) |
| `rpy-*` | Responsive padding on the y-axis (top and bottom) |

## Breakpoints

### src/breakpoints.ts

You can set your own breakpoint names and value arrays.
See src/variables.ts for the generated ranges and number of steps.

独自のブレイクポイント名と値の配列を設定できます。

```typescript
/**
 * breakpointsは、ブレークポイントの名前と値の配列を定義したオブジェクトです。
 * @media (max-width: <値>px) のメディアクエリが定義されます。
 */
export const breakpoints: Breakpoint = {
  "sp": [430, 576],
  "sm": [576],
  "md": [768],
  "tab": [768, 834],
  "lg": [992],
  "xl": [1200],
  "xxl": [1400],
};
```

### src/variables.ts

Generation range and number of steps

生成範囲やステップ数

```typescript
/**
 * rfsScopesは、rfsに関連するCSSクラスを生成するための範囲とステップを定義した配列です。
 */
export const rfsScopes: Scope[] = [
  { startNum: 0.5, endNum: 4, step: 0.025 },
  { startNum: 4, endNum: 8, step: 0.1 },
  { startNum: 8, endNum: 12, step: 0.25 },
  { startNum: 12, endNum: 16, step: 0.5 }
];

/**
 * commonScopesは、一般的なCSSクラス（rm*とrp*）を生成するための範囲とステップを定義した配列です。
 */
export const commonScopes: Scope[] = [
  { startNum: 0, endNum: 4, step: 0.125 },
  { startNum: 4, endNum: 8, step: 0.25 },
  { startNum: 8, endNum: 12, step: 0.5 },
  { startNum: 12, endNum: 16, step: 1 }
];
```

## Important Class

If a class name ends with `! `, the class is given `!important`.

クラス名の最後に `!` を付けると、そのクラスは `!important` が付与されます。

```html

<p class="rmb-sp-0!">
  このクラスはスマートフォンで margin-bottom: 0 !important; が付与されます。
</p>
```

## Build SCSS

```
yarn build:scss
```

It will be generated in the `scss` folder.

`scss` フォルダに生成されます。

## Build CSS

```
yarn build
```

It is generated in the `dist` folder.

`dist` フォルダに生成されます。

## License

MIT
