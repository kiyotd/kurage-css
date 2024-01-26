# kurage-css

- Class utility that allows specifying responsive font size, margins, and padding.
- レスポンシプ対応のフォントサイズ、マージン、パディングを指定可能なクラスユーティリティ。

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

## Build SCSS

```
yarn build:scss
```

## Build CSS

```
yarn build
```

## Examples of usage

```html

<link rel="stylesheet" href="./css/kurage.css">

<!-- Breakpoints are read in order of size -->
<link rel="stylesheet" href="./css/kurage-tab-834.css">
<link rel="stylesheet" href="./css/kurage-sp-576.css">

<p class="rfs-2 rfs-tab-1-5 rfs-sp-1">
  テキスト
</p>
```

| Class         | Description                                              |
|---------------|----------------------------------------------------------|
| `rfs-2`       | Responsive font size `2rem`                              |
| `rfs-tab-1-5` | Responsive font size `1.5rem` for widths 834px and below |
| `rfs-sp-1`    | Responsive font size `1rem` for widths 576px and below   |

## License

MIT
