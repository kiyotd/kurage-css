# kurage-css

Class utility to specify responsive font size, margins, and padding. It is generic and can be incorporated into a variety of projects.

It can also be used with frameworks such as Tailwind CSS, Bootstrap, etc.

Breakpoints are also supported, allowing you to add your own breakpoints; based on a PC-first design philosophy, it uses media queries based on max-width (~ or less). Responsive design that adapts to various device sizes can be realized.

```html

<link rel="stylesheet" href="./your-style.css">
<link rel="stylesheet" href="./kurage-css/dist/min/kurage.min.css">
<!-- Breakpoints are read in order of size -->
<link rel="stylesheet" href="./kurage-css/dist/min/kurage-md-767.min.css">
<link rel="stylesheet" href="./kurage-css/dist/min/kurage-sm-575.min.css">

<!-- Example of font size -->
<p class="rfs-32px rfs-sm-24px">
  The font size is 32px on a PC and 24px on a smartphone.
  it is resized in responsive.
</p>
```

---

レスポンシブ対応のフォントサイズ、マージン、パディングを指定できるクラスユーティリティ。汎用的で様々なプロジェクトに組み込めます。

Tailwind CSS, Bootstrap 等のフレームワークとも併用できます。

ブレイクポイントに対応しており、独自のブレイクポイントも追加可能です。PCファーストの設計思想に基づいており、max-width によるメディアクエリを使用しています。さまざまなデバイスサイズに適応したレスポンシブなデザインを実現可能です。

```html

<link rel="stylesheet" href="./your-style.css">
<link rel="stylesheet" href="./kurage-css/dist/min/kurage.min.css">
<!-- ブレイクポイントは大きい順に読み込む -->
<link rel="stylesheet" href="./kurage-css/dist/min/kurage-md-767.min.css">
<link rel="stylesheet" href="./kurage-css/dist/min/kurage-sm-575.min.css">

<!-- フォントサイズの例 -->
<p class="rfs-32px rfs-sm-24px">
  PCでは 32px、スマートフォンでは 24pxのフォントサイズ。
  レスポンシプでサイズ変更されます。
</p>
```

## Demo

[responsive font size changes](https://prjtest.com/kiyotd/kurage-css/demo/)

## Font size

| Class     | Description          |
|-----------|----------------------|
| `rfs-*px` | Responsive font size |

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
    "sm": [575, 576],
    "md": [767, 768],
    "lg": [991, 992],
    "xl": [1200],
    "xxl": [1400],
  };
```

### src/variables.ts

Generation range and number of steps

生成範囲やステップ数

```typescript
/**
 * commonScopesは、一般的なCSSクラス（rm*とrp*）を生成するための範囲とステップを定義した配列です。
 */
export const commonScopes: Scope[] = [
    { startNum: 0, endNum: 4, step: 0.125 },
    { startNum: 4, endNum: 8, step: 0.25 },
    { startNum: 8, endNum: 12, step: 0.25 },
    { startNum: 12, endNum: 16, step: 0.5 },
  ];
```

## Important Class

If a class name ends with `! `, the class is given `!important`.

クラス名の最後に `!` を付けると、そのクラスは `!important` が付与されます。

```html

<p class="rmb-sm-0!"></p>
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
