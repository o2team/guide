title: 移动端常用私有属性
---

目前两大主流移动平台为 `iOS` 和 `Android`，有不少带 `-webkit-` 前辍的 CSS 私有属性以及一些 iOS only 属性，当中好些属性在日常需求中经常应用到。

`WebKit` CSS 属性中的一部分已经被包含在 CSS 规范草案中，并且可能成为最后的推荐标准，但目前仍然是试验性的属性，还有一些属性是不规范的属性，它们没有出现在跟踪规范中。
## -webkit-scrollbar

`-webkit-scrollbar` 是-webkit-私有的伪元素，用于对拥有overflow属性的区域 **自定义滚动条的样式**。

譬如，为了隐藏滚动条，你可以这么做：
```css
.scroll::-webkit-scrollbar {
    width: 0;
    height: 0;
}
```
除了对整个滚动条的控制外，Webkit还提供了控制对滚动条各组成部分的表现渲染的伪元素，甚至具体到滚动条的各种状态行为的伪类。

### 滚动条各块组成表现渲染的伪元素
一般而言，滚动条的主要组成部分包括：
- 滚动按钮 — 滚动按钮的夹角则被称为滚动角(corner)。
- 轨道 — 轨道(track)可以进一步分为轨枕(track pieces) 和滑块(thumb)。

Webkit则根据滚动条各组成部分，提供了不同的伪元素来自定义样式。
```
::-webkit-scrollbar              { /* 1 */ }
::-webkit-scrollbar-button       { /* 2 */ }
::-webkit-scrollbar-track        { /* 3 */ }
::-webkit-scrollbar-track-piece  { /* 4 */ }
::-webkit-scrollbar-thumb        { /* 5 */ }
::-webkit-scrollbar-corner       { /* 6 */ }
::-webkit-resizer                { /* 7 */ }
```
下图则是各伪元素对应的滚动条各部分：

![scrollbarparts.png](http://7xs2jo.com1.z0.glb.clouddn.com/215F9FF68F2CAE78957E1C112521A0A2.png)

`::-webkit-scrollbar`：滚动条整体部分。可设置width、height、background、border等。

`::-webkit-scrollbar-button`：滚动条两端的按钮。可以用display:none让其不显示，也可以添加背景图片，颜色改变显示效果。

`::-webkit-scrollbar-track`：轨道。可以用display:none让其不显示，也可以添加背景图片，颜色改变显示效果。

`::-webkit-scrollbar-track-piece`：轨枕，也就是除去滚动滑块的部分。

`::-webkit-scrollbar-thumb`：滚动滑块，也就是滚动条里面可以拖动的那部分。

`::-webkit-scrollbar-corner`：滚动按钮的夹角则被称为滚动角。

`::-webkit-resizer`：用于定义右下角拖动块的样式。

**需要注意的是**：若是水平滚动条，则width属性不起作用，height属性用来控制滚动条相应部分竖直方向高度；若是竖直滚动条，则height属性不起作用，width属性用来控制相应部分的宽度。

### 滚动条各块组成的伪元素
下面的伪类可以应用到上面的伪元素中。
`:horizontal`：选择水平方向的滚动条。

`:vertical`：选择垂直方向的滚动条。

`:decrement`：适用于滚动按钮和轨枕。选择能够使得视窗位置递减状态(例如，垂直滚动条向上滚动，水平滚动条向左滚动。)的滚动按钮或轨枕。

`:increment`：适用于滚动按钮和轨枕。选择能够使得视窗位置递增状态(例如，垂直滚动条向下滚动，水平滚动条向右滚动。)的滚动按钮或轨枕。

`:start`：适用于滚动按钮和轨枕。选择位于滚动滑块前边的滚动按钮和轨枕。

`:end`：适用于滚动按钮和轨枕。选择位于滚动滑块后边的滚动按钮和轨枕。

`:double-button`：适用于滚动按钮和轨枕。选中紧挨着一对按钮的轨枕以及位于滚动条某一端的一对按钮中的其中一个滚动按钮。

`:single-button`：适用于滚动按钮和轨枕。选中紧挨着仅一个按钮的轨枕以及位于滚动条某一端的仅它本身一个的滚动按钮。

`:no-button`：适用于轨枕。选中轨道结束位置没有按钮的轨枕。

`:corner-present`：适用于选中滚动角不存在的滚动条。

`:window-inactive`：适用于所有滚动条，选中焦点不在该视窗的滚动区域。

**另外，:enabled、:disabled、:hover、和:active等伪类同样在滚动条中适用。**
为了更好地理解，以下是几个伪元素组合伪类的应用例子：
```css
::-webkit-scrollbar-track-piece:start {
 /\*滚动条上半边或左半边\*/
}
::-webkit-scrollbar-thumb:window-inactive {
 /\*当焦点不在当前区域滑块的状态\*/

::-webkit-scrollbar-button:horizontal:decrement:hover {
 /\*当鼠标在水平滚动条下面的按钮上的状态\*/
```
或者，读者可以去阅读[官方例子](http://trac.webkit.org/export/41842/trunk/LayoutTests/scrollbars/overflow-scrollbar-combinations.html)

#### 参考资料：

- [Webkit-Styling Scrollbars](https://webkit.org/blog/363/styling-scrollbars/)
- [自定义浏览器滚动条的样式，打造属于你的滚动条风格](http://www.lyblog.net/detail/314.html)


## -webkit-touch-callout

`-webkit-touch-callout` 是一个不规范的属性（[unsupported WebKit property](https://developer.apple.com/library/safari/documentation/AppleApplications/Reference/SafariCSSRef/Articles/StandardCSSProperties.html)），它没有出现在 CSS 规范草案中。

当你触摸并按住触摸目标时候，禁止或显示系统默认菜单。在iOS上，当你触摸并按住触摸的目标，比如一个链接，Safari浏览器将显示链接有关的系统默认菜单，这个属性可以让你禁用系统默认菜单。

### 属性值

* `none`：系统默认菜单被禁用
* `inherit`：系统默认菜单不被禁用

### 兼容性

* iOS 2.0及更高版本的 Safari 浏览器可用
* Android 尚不明确

## -webkit-tap-highlight-color

`-webkit-tap-highlight-color` 是一个不规范的属性（[unsupported WebKit property](https://developer.apple.com/library/safari/documentation/AppleApplications/Reference/SafariCSSRef/Articles/StandardCSSProperties.html)），它没有出现在 CSS 规范草案中。

在 iOS Safari 上，当用户点击链接或具有 JavaScript 可点击脚本的元素，系统会为这些被点击元素加上一个默认的透明色值，该属性可以覆盖该透明值。

### 属性值

&lt;color&gt;：颜色值

### 兼容性

* iOS 1.1.1及更高版本的Safari浏览器可用
* 大部分安卓手机

## -webkit-overflow-scrolling

定义在具 `overflow:scroll` 属性的元素内是否采用原生样式滚动行为

### 属性值

* `auto`：默认值，单手滚动，滚动没有惯性效果
* `touch`：原生样式滚动，应用此属性值会产生**层叠上下文**（会影响定位参照物的属性，类似 `opacity`、`masks`、`transforms`属性，影响到 `position` 的效果，甚至影响到 `position:fixed` 的定位参照物，）

### 兼容性

* iOS 5.0 及更高版本
* 大部分安卓机


## -webkit-line-clamp

`-webkit-line-clamp` 是一个不规范的属性（[unsupported WebKit property](https://developer.apple.com/library/safari/documentation/AppleApplications/Reference/SafariCSSRef/Articles/StandardCSSProperties.html)），它没有出现在 CSS 规范草案中。

限制在一个块元素显示的文本的行数。 为了实现该效果，它需要组合其他外来的WebKit属性。

常见结合属性：

* `display: -webkit-box`：**必须结合的属性**，将对象作为弹性伸缩盒子模型显示。
* `-webkit-box-orient`：**必须结合的属性**，设置或检索伸缩盒对象的子元素的排列方式。
* `text-overflow`：可以用来多行文本的情况下，用省略号“...”隐藏超出范围的文本。

### 属性值

&lt;number&gt;：块元素显示的文本的行数

### 兼容性

* iOS
* Andriod

## -webkit-appearance

`-webkit-appearance` 是一个不规范的属性（[unsupported WebKit property](https://developer.apple.com/library/safari/documentation/AppleApplications/Reference/SafariCSSRef/Articles/StandardCSSProperties.html)），它没有出现在 CSS 规范草案中。

改变按钮和其他控件的外观，使其类似于原生控件。

### 属性值

* `none`：去除系统默认 appearance 的样式，常用于 iOS 下移除原生样式
* `button`：渲染成 button 的风格
* `checkbox`：渲染成 input checkbox 样式的复选框按钮
* `radio `：渲染成 radio 的风格
* ...

更多属性值参考 [mozilla：-webkit-appearance 属性](https://developer.mozilla.org/en-US/docs/Web/CSS/-moz-appearance)

### 兼容性

* iOS 2.0及更高版本的Safari浏览器可用
* Android 尚不明确

## -webkit-font-smoothing

字体平滑，该属性定义文本的平滑属性，但要**注意以下说明：**

> 非标准属性，**不建议用于网页上**，这个属性不能保证所有用户都能看到相同效果，这会使网站的字体渲染造成不一致，而此属性的渲染行为日后也有可能会改变

### 属性值

* `none`：去掉字体平滑效果，使字体带锯齿
* `antialiased`：使字体在像素级别更平滑更轻细
* `subpixel-antialiased`：在多数非 Retina 显示设备中字体将会更锐利。

**注意：以上属性在 Retina 设备上会有明显的效果，在非 Retina 设备上看不出差异**

### 兼容性

* 部分高清设备，如 Retina Mac


## -webkit-backface-visibility

`backface-visibility` 在 [W3文档](http://www.w3.org/TR/css3-transforms/#backface-visibility-property) 有定义描述

定义转换元素的背面是否显示

### 属性值

* `visible`：显示（默认值）
* `hidden`：隐藏

### 兼容性

* iOS 2.0 及更高版本的 Safari 浏览器可用
* 大部分 Android

## -webkit-mask

定义多样的蒙板效果属性（缩写属性，类似 `margin`）

### 使用语法

```
<mask-image> [<mask-repeat> || <mask-attachment> || <mask-position> || <mask-origin> || <mask-clip> || <mask-composite>]*
where 
<mask-position> = [ <percentage> | <length> | left | center | right ] [ <percentage> | <length> | top  | center | bottom ]?
```

默认值：

```css
-webkit-mask: none repeat scroll 0% 0% padding border add;
```

### 属性值

* &lt;mask-image&gt;：为元素设置蒙板图片，蒙板图片会根据图片的透明区域对元素可视部分进行裁剪
    * &lt;uri&gt;：图片链接作为蒙板图片
    * &lt;gradient&gt;：渐变函数 `-webkit-gradient` 作为蒙板图片
    * `none`：去掉蒙板图片

* &lt;mask-repeat&gt;：定义蒙板图片是否平铺或平铺的方式
    * `repeat`：默认值，水平和垂直方向平铺
    * `repeat-x`：水平方向平铺
    * `repeat-y`：垂直方向平铺
    * `no-repeat`：不平铺

* &lt;mask-attachment&gt;：如果 `-webkit-mask-image` 属性有设置，`attachment` 决定该图片是否相对视窗固定或随着其容器滚动
    * `scroll`：默认值，随容器滚动
    * `fixed`：相地视窗固定

* &lt;mask-position&gt;：定义蒙板图片的初始位置，书写格式类似 `background-position`----`<mask-position>[， <mask-position>]*`
    * &lt;percentage&gt;
    * &lt;length&gt;
    * `left`
    * `right`
    * `center`

* &lt;mask-origin&gt;：定义蒙板图片定位相对起点，与 `webkit-mask-position` 属性相关。当 `-webkit-mask-attachment:fixed` 的时候，该属性不生效。
    * `padding`：默认值，蒙板定位相对边距
    * `border`：蒙板定位相对边框
    * `content`：蒙板定位相对元素盒子内容
  
* &lt;mask-clip&gt;：如果 `-webkit-mask-image` 属性有设置，`-webkit-mask-clip` 将定义蒙板图片的裁剪区域
    * `border`：默认值，蒙板图片延伸到容器的边框
    * `padding`：蒙板图片延伸到容器的边距
    * `content`：蒙板图片裁剪到元素盒子内容范围
    * `text`：蒙板图片裁剪到元素文本范围
    
* &lt;mask-composite&gt;：定义蒙板图片重合的裁剪显示方式
    * `add`：默认值，图片重合不裁剪
    * `subtract`：去掉层级低的图形以及图片重合部分图形，只留层级高非重合部分图形
    * `intersect`：只留重合部分图形
    * `exclude`：只去掉重合部分图形

有关属性更详细描述请参考：

[w3 - css-masking](http://www.w3.org/TR/css-masking/)

[MDN - -webkit-mask](https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-mask)

[携程 UED - -webkit-mask](http://ued.ctrip.com/webkitcss/)

### 兼容性

* Safari 4.0 及更高版本
* iOS 4.0 及更高版本
* Android 2.1 及更高版本

## -webkit-user-select

定义用户是否能选中元素内容

### 属性值

* `auto`：可选中元素内容
* `none`：不能选中任何内容
* `text`：可选中元素内的文本

### 兼容性

* iOS 3.0 及更高版本的 Safari
* 大部分安卓手机

## -webkit-user-modify

定义用户是否可编辑元素内容

### 属性值

* `read-only`：只读
* `read-write`：可读可写，粘贴内容会保留富文本格式（ Android 机不保留富文本格式 ）
* `read-write-plaintext-only`：可读可写，粘贴内容所有富文本格式都会丢失

**注意：使用这个属性的时候，请不要出现 `-webkit-user-select: none`，文本无法选中的情况下，在 Safari 该属性不生效，不过在 Chrome 依然生效**

### 兼容性

* iOS 5.0 及更高版本
* Safari 3.0 及更高版本
* 大部分安卓手机

## -webkit-text-stroke

定义文本描边，可以设计描边的宽和颜色，一般与文本填充属性 `-webkit-text-fill-color` 共用。

### 属性值

* &lt;length&gt;：长度单位
* &lt;color&gt;：颜色值

### 兼容性

* iOS 2.0 及更高版本
* Safari 3.0 及更高版本
* 安卓尚不明确

## -webkit-text-fill-color

定义文本填充，一般与文本描边属性 `-webkit-text-stroke` 共用。

### 属性值

* &lt;color&gt;：颜色值
* `currentcolor `：元素 `color` 属性值
* `-webkit-activelink`：链接被点击时系统的默认颜色

更多属性值参考：[Safari CSS Reference -webkit-text-fill-color](https://developer.apple.com/library/safari/documentation/AppleApplications/Reference/SafariCSSRef/Articles/StandardCSSProperties.html)

### 兼容性

* iOS 2.0 及更高版本
* Safari 3.0 及更高版本
* 安卓尚不明确

## -webkit-text-size-adjust 

定义 iOS Safari 网页文本大小调整属性

### 属性值

* &lt;percentage&gt;：百分比值，字体显示调整值
* `auto`：字体自动调整
* `none`：字体不能自动调整

### 兼容性

* iOS 1.0 及更高版本
* Safari on iOS only
* 安卓尚不明确

## -webkit-marquee

定义滚动文本内容属性（缩写属性，类似`margin`）。

### 使用语法
`-webkit-marquee: direction increment repetition style speed`

### 属性值

* &lt;direction&gt;：滚动方向
    * `ahead`：从下到上滚动
    * `auto`：默认滚动方向
    * `backwards`：从右到左滚动
    * `down`：从上到下滚动
    * `forwards`：从左到右滚动
    * `left`：从右到左滚动
    * `reverse`：从上到下滚动
    * `right`：从左到右滚动
    * `up`：从下到上滚动
* &lt;increment&gt;：每次移动的距离
    * [&lt;percentage&gt; | &lt;length&gt;]
    * `large`：距离常量
    * `medium`：距离常量
    * `small`：距离常量
* &lt;repetition&gt;：文字滚动的重复次数
    * 非负整数
    * `infinite`：无限次
* &lt;style&gt;：文字滚动的方式
    * `alternate`：重复滚动
    * `none`：停止滚动
    * `scroll`：在定义方向上滚动
    * `slide`：定义方向上滚动，内容显示完毕或者内容滚动到滚动区域另一端边框时候都会停止下来
* &lt;speed&gt;：滚动或滑动的速度
    * 非负整数（毫秒单位）或带时间单位的非负整数
    * `fast`
    * `normal`
    * `slow`

### 兼容性

* iOS 1.0 及更高版本
* Safari 3.0 及更高版本
* 大部分安卓手机

## -webkit-filter

滤镜属性可以让元素本身内容（文本、背景等）及其子元素加上滤镜效果

### 属性值

* `blur(<length>)`：模糊，原始效果值为 `0px`，不接受负值

* `brightness([ <number> | <percentage> ])`：亮度，原始效果值为 `1` 或 `100%`，不接受负值

* `contrast([ <number> | <percentage> ])`：对比度，原始效果值为 `1` 或 `100%`，不接受负值

* `drop-shadow( <length>{2，4} <color>?)`：投影，原始效果值为所有长度值为 `0`，长度值至少2个，最多4个，

* `grayscale([ <number> | <percentage> ] )`：灰度，原始效果值为 `0`，最大值为 `1` 或 `100%`，不接受负值

* `hue-rotate( <angle>)`：相位，原始效果值为 `0deg`

* `invert( [ <number> | <percentage> ])`：反相，原始效果值为 `0`，最大值为 `1` 或 `100%`，不接受负值

* `opacity([ <number> | <percentage> ] )`：透明度，原始效果值为 `1`，最大值为 `1` 或 `100%`，不接受负值

* `saturate([ <number> | <percentage> ])`：饱和度，原始效果值为 `1`，不接受负值

* `sepia([ <number> | <percentage> ])`：乌贼墨，原始效果值为 `0`，最大值为 `1` 或 `100%`，不接受负值

关于  `-webkit-filter` 与 `-webkit-backdrop-filter` 的属性对比可以参考：

[What's New in Safari 9.0 - backdrop-filter ](http://aotu.io/notes/2015/12/23/new-safari-9/)

### 兼容性

* iOS 8.0 及更高版本
* Safari 8.0 及更高版本
* Android 4.4 及更高版本

## -webkit-backdrop-filter

背景滤镜属性可以让元素的背景或元素层级以下的元素加上滤镜效果

### 属性值

* `blur(<length>)`：模糊，原始效果值为 `0px`，不接受负值

* `brightness([ <number> | <percentage> ])`：亮度，原始效果值为 `1` 或 `100%`，不接受负值

* `contrast([ <number> | <percentage> ])`：对比度，原始效果值为 `1` 或 `100%`，不接受负值

* `drop-shadow( <length>{2，3} <color>?)`：投影，原始效果值为所有长度值为 `0`，长度值至少2个，最多3个，**注意：不支持投影扩展值和混合投影**

* `grayscale([ <number> | <percentage> ] )`：灰度，原始效果值为 `0`，最大值为 `1` 或 `100%`，不接受负值

* `hue-rotate( <angle>)`：相位，原始效果值为 `0deg`

* `invert( [ <number> | <percentage> ])`：反相，原始效果值为 `0`，最大值为 `1` 或 `100%`，不接受负值

* `opacity([ <number> | <percentage> ] )`：透明度，原始效果值为 `1`，最大值为 `1` 或 `100%`，不接受负值

* `saturate([ <number> | <percentage> ])`：饱和度，原始效果值为 `1`，不接受负值

* `sepia([ <number> | <percentage> ])`：乌贼墨，原始效果值为 `0`，最大值为 `1` 或 `100%`，不接受负值

关于 `-webkit-filter` 与 `-webkit-backdrop-filter` 的属性对比可以参考：

[What's New in Safari 9.0](http://aotu.io/notes/2015/12/23/new-safari-9/)

### 兼容性

* iOS 9.0 及更高版本
* Safari 9.0 及更高版本
* 安卓尚未明确

## position:-webkit-sticky

可以使得元素在页面没有滚动的情况下表现得像relative，在滚动条滚到该元素区域的时候根据top值的设置使元素固定离顶部的距离，表现像 `position:fixed`，也就是常见的吸顶需求效果。

### 特性

* 依赖父级元素滚动区域

* 定位参考物始终是 viewport，`transform` 等可以改变 `position:fixed` 定位参考物的属性也没办法改变 `position:-webkit-sticky` 的定位参考物

* `position:-webkit-sticky` 属性的元素固定区域只依赖其父元素的可滚动高度，如果其父元素高度小于元素本身的高度，fixed效果失效。

### 兼容性

* iOS 6.1 及更高版本
* iOS only


## -apple-system

苹果操作系统会从两种不同外观和大小的字体进行自动转换去调节系统新字体 “San Francisco”，可以通过 CSS 规则

```css
font-family: -apple-system , sans-serif;
```

让系统智能选择适配操作系统的字体，添加 `-apple-system` 可以使字体变得更圆润锐利。

关于 `-apple-system` 更详细的介绍可以参考：

[What's New in Safari 9.0](http://aotu.io/notes/2015/12/23/new-safari-9/)

### 兼容性

* iOS 9.0 及更高版本
* Safari 9.0 及更高版本
* iOS / OS X only

## 更多 WebKit CSS 属性

更多 `-webkit-` CSS 属性介绍请参考：

* [MDN文档 - Webkit Extensions ](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Reference/Webkit_Extensions)
* [携程 UED - webkitcss](http://ued.ctrip.com/webkitcss/)
