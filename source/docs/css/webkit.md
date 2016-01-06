title: 移动平台常用私有属性
---

目前两大主流移动平台为 `iOS` 和 `Android`，有不少带 `-webkit-` 前辍的 CSS 私有属性以及一些 iOS only 属性，当中好些属性在日常需求中经常应用到。

`WebKit` CSS 属性中的一部分已经被包含在 CSS 规范草案中,并且可能成为最后的推荐标准,但目前仍然是试验性的属性，还有一些属性是不规范的属性,它们没有出现在跟踪规范中。

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
* `touch`：原生样式滚动，应用此属性会产生**层叠上下文**（会影响定位参照物的属性，类似 `opacity`、`masks`、`transforms`属性，影响到 `position` 的效果，甚至影响到 `position:fixed` 的定位参照物，）

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

`-webkit-line-clamp` 是一个不规范的属性（[unsupported WebKit property](https://developer.apple.com/library/safari/documentation/AppleApplications/Reference/SafariCSSRef/Articles/StandardCSSProperties.html)），它没有出现在 CSS 规范草案中。

改变按钮和其他控件的外观，使其类似于原生控件。

### 属性值

* `none`：去除系统默认 appearance 的样式,常用于 iOS 下移除原生样式
* `button`：渲染成 button 的风格
* `checkbox`：渲染成 input checkbox 样式的复选框按钮
* `radio `：渲染成 radio 的风格

更多属性值参考 [mozilla：-webkit-appearance 属性](https://developer.mozilla.org/en-US/docs/Web/CSS/-moz-appearance)

### 兼容性

* iOS 2.0及更高版本的Safari浏览器可用
* Android 尚不明确

## -webkit-font-smoothing

字体平滑,该属性定义文本的平滑属性，但要**注意以下说明：**

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


## -webkit-user-drag

设置整个元素而非它的内容可拖动，对应于标签属性 draggable，其中图片和链接默认为可拖动（draggable="true"），其他元素默认为不可拖动（draggable="false"）

### 属性值

* `auto`：使用默认的拖动行为。图片和链接默认为可拖动，其他元素默认为不可拖动。
* `element`：整个元素而非它的内容可拖动。
* `none`：元素不能被拖动。但可通过复制选中后拖动。
* `inherit`：父级继承值

### 兼容性

* Safari 3.0 及更高版本
* 大部分安卓手机

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

定义用户是否用编辑元素内容

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

定义文本填充，一般与文本描边属性 `webkit-text-stroke` 共用。

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
* `aotu`：字体自动调整
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

* `drop-shadow( <length>{2,4} <color>?)`：投影，原始效果值为所有长度值为 `0`，长度值至少2个，最多4个，

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

* `drop-shadow( <length>{2,3} <color>?)`：投影，原始效果值为所有长度值为 `0`，长度值至少2个，最多3个，**注意：不支持投影扩展值和混合投影**

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

## -apple-system

苹果操作系统会从两种不同外观和大小的字体进行自动转换去调节系统新字体 “San Francisco”，可以通过 CSS 规则

```css
font-family: -apple-system, sans-serif;
```

让系统智能选择适配操作系统的字体。

可以看一下下面两张在系统 OS X 10.11.1 下的对比图：

没有添加 `-apple-system` 属性值：

![image](http://aotu.io/assets/img/post/mihanX/safari-9/sys-font-no.png)

添加了 `-apple-system` 属性值：

![image](http://aotu.io/assets/img/post/mihanX/safari-9/sys-font-yes.png) 

可以看到添加了 `-apple-system`，字体变得更圆润锐利

关于 `-apple-system` 更详细的介绍可以参考：

[What's New in Safari 9.0](http://aotu.io/notes/2015/12/23/new-safari-9/)

### 兼容性

* iOS 9.0 及更高版本
* Safari 9.0 及更高版本
* iOS / OS X only

## 更多

更多 `-webkit-` CSS 属性介绍请参考：

* [MDN文档 - Webkit Extensions ](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Reference/Webkit_Extensions)
* [携程 UED - webkitcss](http://ued.ctrip.com/webkitcss/)
