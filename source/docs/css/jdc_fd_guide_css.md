## CSS规范

### 代码规范

#### 编码规范

CSS样式表是一个序列通用字符集，传输和存储过程中，这些字符必须由支持 US-ASCII（例如 UTF-8, ISO 8859-x, SHIFT JIS 等）字符编码方式编译

##### 文档内嵌样式表编码

> When a style sheet is embedded in another document, such as in the STYLE element or "style" attribute of HTML, the style sheet shares the character encoding of the whole document.

当样式出现在其它文档，如 HTML 的 STYLE 标签或标签属性 "style"，样式的编码由文档的决定。

##### 文档外链样式表编码

> When a style sheet resides in a separate file, user agents must observe the following priorities when determining a style sheet's character encoding (from highest priority to lowest):

> 1. An HTTP "charset" parameter in a "Content-Type" field (or similar parameters in other protocols)
> 2. BOM and/or @charset 
> 3. <link charset=""> or other metadata from the linking mechanism (if any)
> 4. charset of referring style sheet or document (if any)
> 5. Assume UTF-8

文档外链样式表的编码可以由以下各项按照由高到低的优先级顺序决定：

1. HTTP “Content-Type” 字段参数 “charset”（或其它协议相似的参数）
2. BOM（byte-order mark）和（或）@charset
3. Link 中的元数据设置（如果有的话）
4. 引用样式表字符集或文档编码（如果有的话）
5. 假定为 UTF-8 编码

##### 关于 @charset

> Authors using an @charset rule must place the rule at the very beginning of the style sheet, preceded by no characters. (If a byte order mark is appropriate for the encoding used, it may precede the @charset rule.)

> @charset must be written literally, i.e., the 10 characters '@charset "' (lowercase, no backslash escapes), followed by the encoding name, followed by '";'.


* @charset规则一定要在样式文件的第一行首个字符位置开始，否则的话就会有机会让 BOM 设置生效（如果有设置 BOM 的话）而优于 @charset 作为样式表的编码
* `@charset "";` 一定要写上，并且用小写字母，不能出现转义符

##### 团队约定

* 样式文件必须写上 @charset 规则，并且一定要在样式文件的第一行首个字符位置开始写，编码名用 “UTF-8”
* 字符 `@charset "";` 都用小写字母，不能出现转义符，编码名允许大小混写
* 考虑到在使用“UTF-8”编码情况下 BOM 对代码的污染和编码显示的问题，在可控范围下，坚决不使用 BOM。（更多关于 BOM 可参考 [BOM的介绍](https://zh.wikipedia.org/wiki/%E4%BD%8D%E5%85%83%E7%B5%84%E9%A0%86%E5%BA%8F%E8%A8%98%E8%99%9F) 和 [「带 BOM 的 UTF-8」和「无 BOM 的 UTF-8」有什么区别？](http://www.zhihu.com/question/20167122) ）

*推荐：*

```
@charset "UTF-8";

.jdc{}
```

*不推荐：*

```
/**
 * @desc File Info
 * @author Author Name
 * @date 2015-10-10
 */
 
/* @charset规则不在文件首行首个字符开始 */
@charset "UTF-8";

.jdc{}
```

```
@CHARSET "UTF-8";
/* @charset规则没有用小写 */

.jdc{}
```

```
/* 无@charset规则 */
.jdc{}
```

更多关于样式编码：[CSS style sheet representation](http://www.w3.org/TR/2011/REC-CSS2-20110607/syndata.html#charset)

#### 代码风格

##### 代码格式化

样式书写一般有两种：一种是紧凑格式 (Compact)

```
.jdc{ display: block;width: 50px;}
```

一种是展开格式（Expanded）

```
.jdc{
    display: block;
    width: 50px;
}
```

**团队约定**

统一使用展开格式书写样式



##### 代码大小写

样式选择器，属性名，属性值关键字全部使用小写字母书写，属性字符串允许使用大小写。
	
	/* 推荐 */
	.jdc{
		display:block;
	}
	
	/* 不推荐 */
	.JDC{
		DISPLAY:BLOCK;
	}

##### 选择器

* 尽量少用通用选择器 `*`
* 不使用 ID 选择器
* 不使用无具体语义定义的标签选择器
  
```	
/* 推荐 */
 .jdc {...}
 .jdc li {...}
 .jdc li p{...}
	
/* 不推荐 */
 *{...}
 #jdc {...}
 .jdc div{...}
```
	
##### 代码缩进

统一使用四个空格进行代码缩进，使得各编辑器表现一致（各编辑器有相关配置）

```
.jdc {
    width: 100%;
    height: 100%;
}
```

##### 分号

每个属性声明末尾都要加分号；

```
.jdc {
    width: 100%;
    height: 100%;
}
```

##### 代码易读性

左括号与类名之间一个空格，冒号与属性值之间一个空格

*推荐：*

```
.jdc { 
    width: 100%; 
} 
```

*不推荐：*

```
.jdc{ 
    width:100%;
} 
```


逗号分隔的取值，逗号之后一个空格

*推荐：*

```
.jdc {
    box-shadow: 1px 1px 1px #333, 2px 2px 2px #ccc;
}
```

*不推荐：*

```
.jdc {
    box-shadow: 1px 1px 1px #333,2px 2px 2px #ccc;
}
```

为单个css选择器或新申明开启新行

*推荐：*

```
.jdc,
.jdc_logo,
.jdc_hd {
	...
}
.nav{
	...
}
```

*不推荐：*

```
.jdc,jdc_logo,.jdc_hd {
	...
}.nav{
	...
}
```

颜色值 `rgb()` `rgba()` `hsl()` `hsla()` `rect()` 中不需有空格，且取值不要带有不必要的 0

*推荐：*

```
.jdc {
    color: rgba(255,255,255,.5);
}
```

*不推荐：*

```
.jdc {
    color: rgba( 255, 255, 255, 0.5 );
}
```

属性值十六进制数值能用简写的尽量用简写

*推荐：*

```
.jdc {
    color: #fff;
}
```

*不推荐：*

```
.jdc {
    color: #ffffff;
}
```

不要为 `0` 指明单位

*推荐：*

```
.jdc {
    margin: 0 10px;
}
```

*不推荐：*

```
.jdc {
    margin: 0px 10px;
}
```

##### 属性值引号

css属性值需要用到引号时，统一使用单引号

```
/* 推荐 */
.jdc { 
	font-family: 'Hiragino Sans GB';
}

/* 不推荐 */
.jdc { 
	font-family: "Hiragino Sans GB";
}
```

##### 属性书写顺序

建议遵循以下顺序：

1. 布局定位属性：display / position / float / clear  / visibility / overflow 
2. 自身属性：width / height / margin / padding / border / background
3. 文本属性：color / font / text-decoration / text-align / vertical-align / white- space / break-word
4. 其他属性（CSS3）：content / cursor / border-radius / box-shadow / text-shadow / background:linear-gradient ...

```
.jdc {
	display: block;
	position: relative;
	float: left;
	width: 100px;
	height: 100px;
	margin: 0 10px;
	padding: 20px 0;
	font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;
	color: #333;
	background: rgba(0,0,0,.5);
	-webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    -o-border-radius: 10px;
    -ms-border-radius: 10px;
    border-radius: 10px;
}
```


[mozilla官方属性顺序推荐](https://www.mozilla.org/css/base/content.css)

##### CSS3浏览器私有前缀写法

CSS3 浏览器私有前缀在前，标准前缀在后

```
.jdc {
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    -o-border-radius: 10px;
    -ms-border-radius: 10px;
    border-radius: 10px;
}
```
更多关于浏览器私有前辍写法：[#Vendor-specific extensions](http://www.w3.org/TR/2011/REC-CSS2-20110607/syndata.html#vendor-keywords)

### 注释规范

> Comments begin with the characters `/*` and end with the characters `*/`. They may occur anywhere outside other tokens, and their contents have no influence on the rendering. Comments may not be nested.

* 注释以字符 `/*` 开始，以字符 `*/` 结束
* 注释不能被嵌套

```
/*Comment Text*/
```

#### 团队约定 

##### 单行注释

注释内容第一个字符和最后一个字符都是一个空格字符，单独占一行，行与行之间相隔一行

*推荐：*

```
/* Comment Text */
.jdc{}

/* Comment Text */
.jdc{}
```

*不推荐：*

```
/*Comment Text*/
.jdc{
	display: block;
}
.jdc{
	display: block;/*Comment Text*/
}
```

##### 模块注释

注释内容第一个字符和最后一个字符都是一个空格字符，`/*` 与 模块信息描述占一行，多个横线分隔符`-`与`*/`占一行，行与行之间相隔两行

*推荐：*

```
/* Module A
---------------------------------------------------------------- */
.mod_a {}


/* Module B
---------------------------------------------------------------- */
.mod_b {}
```

*不推荐：*

```
/* Module A ---------------------------------------------------- */
.mod_a {}
/* Module B ---------------------------------------------------- */
.mod_b {}
```

##### 文件信息注释

在样式文件编码声明 `@charset` 语句下面注明页面名称、作者、创建日期等信息

```
@charset "UTF-8";
/**
 * @desc File Info
 * @author Author Name
 * @date 2015-10-10
 */
```




更多关于CSS注释：[#Comments](http://www.w3.org/TR/2011/REC-CSS2-20110607/syndata.html#comments)


### SASS规范

#### 语法选用

SASS有两种语法格式，一种是 SCSS (Sassy CSS)，另一种是缩进格式（Indented Syntax），有时称之为 Sass。

##### SCSS

SCSS语法基于 CSS 语法扩展，每一个有效的 CSS 文件都是一个有效的具有相同含义的 SCSS 文件，换种说法就是 SCSS 能识别大多数的 CSS hacks 写法和浏览器前缀写法以及早期的 IE 滤镜写法，这种格式以 .scss 作为扩展名。

##### Sass

Sass 使用 “缩进” 代替 “花括号” 表示属性属于某个选择器，用 “换行” 代替 “分号” 分隔属性，很多人认为这样做比 SCSS 更容易阅读，书写也更快速。缩进格式也可以使用 Sass 的全部功能，只是与 SCSS 相比个别地方采取了不同的表达方式，具体请查看 [the indented syntax reference](http://sass-lang.com/documentation/file.INDENTED_SYNTAX.html)。这种格式以 .sass 作为拓展名。

更详细的用法请阅读 SASS 官网文档：[DOCUMENTATION](http://sass-lang.com/documentation/file.SASS_REFERENCE.html)

##### 团队约定

考虑到 SCSS 语法对 CSS 语法友好的兼容性和扩展性，我们在使用 SASS 编写样式的时候，统一使用 SCSS 语法

#### 编码格式

> When running on Ruby 1.9 and later, Sass is aware of the character encoding of documents. Sass follows the CSS spec to determine the encoding of a stylesheet, and falls back to the Ruby string encoding. This means that it first checks the Unicode byte order mark, then the @charset declaration, then the Ruby string encoding. If none of these are set, it will assume the document is in UTF-8.

当在 Ruby1.9或更新的版本运行的时候，SASS 能识辨文档的字符编码。SASS 遵循 CSS 规范去确定样式文件的编码，进而转回 Ruby 字符串编码。这意味着SASS编译的时候会首先检测 BOM，然后到 @charset 声明，再到 Ruby 字符串编码，如果以上都没有设置，SASS 会假定文档的编码为 UTF-8

##### 团队约定

严格遵守上面 “代码规范” 中的 “编码规范”

更多关于 SASS 编码：[SASS Encodings](http://sass-lang.com/documentation/file.SASS_REFERENCE.html)

#### SASS注释规范

SASS支持 CSS 标准的多行注释 `/* */`，同时也支持单行注释 `//`。

* 多行注释在使用非 Compressed 模式进行编译后的输出文件中会保留下来，单行注释 `//` 侧会被移除
* 多行注释和单行注释在 SASS 编译后输出的压缩 CSS 文件都会被移除
* 当多行注释内容第一个字符是感叹号 “!” 的时候，即 `/*! */`，SASS 无论用哪一种编译方式编译注释都会保留
* 注释内容可以加入 SASS 变量

##### 团队约定

SCSS 文件内

* 全部遵循 CSS 注释规范
* 不使用 `/*! */` 注释方式
* 注释内不放 SASS 变量

标准的注释规范如下：

```
@charset "UTF-8";

/**
 * @desc File Info
 * @author liqinuo
 * @date 2015-10-10
 */

/* Module A
----------------------------------------------------------------*/
.mod_a {}

/* module A logo */
.mod_a_logo {}

/* module A nav */
.mod_a_nav {}

/* Module B
----------------------------------------------------------------*/
.mod_b {}

/* module B logo */
.mod_b_logo {}

/* module B nav */
.mod_b_nav {}
```

#### 嵌套规范

##### 选择器嵌套

```
// CSS
.jdc {}
body .jdc {}

// SCSS
.jdc {
    body & {}
}
```

```
// CSS
.jdc {}
.jdc_cover {}
.jdc_info {}
.jdc_info_name {}

// SCSS
.jdc {
    &_cover {}
    &_info {
        &_name {}
    }
}
```
##### 属性嵌套

```
// CSS
.jdc {
    background-color: red;
    background-repeat: no-repeat;
    background-image: url(/img/icon.png);
    background-position: 0 0;
}

// SCSS
.jdc {
    background: {
        color: red;
        repeat: no-repeat;
        image: url(/img/icon.png);
        position: 0 0;
    }
}
```

#### 变量

可复用属性尽量抽离为页面变量，易于统一维护

```
// CSS
.jdc {
    color: red;
    border-color: red;
}

// SCSS
$color: red;
.jdc {
    color: $color;
    border-color: $color;
}
```

#### 混合(mixin)

根据功能定义模块，然后在需要使用的地方通过 `@include` 调用，避免编码时重复输入代码段

```
// CSS
.jdc_1 {
    -webkit-border-radius: 5px;
    border-radius: 5px;
}
.jdc_2 {
    -webkit-border-radius: 10px;
    border-radius: 10px;
}

// SCSS
@mixin radius($radius:5px) {
    -webkit-border-radius: $radius;
    border-radius: $radius;
}
.jdc_1 {
    @include radius; //参数使用默认值
}
.jdc_2 {
    @include radius(10px);
}
```

```
// CSS
.jdc_1 {
    background: url(/img/icon.png) no-repeat -10px 0;
}
.jdc_2 {
    background: url(/img/icon.png) no-repeat -20px 0;
}

// SCSS
@mixin icon($x:0, $y:0) {
    background: url(/img/icon.png) no-repeat $x, $y;
}
.jdc_1 {
    @include icon(-10px, 0);
}
.jdc_2 {
    @include icon(-20px, 0);
}
```	

#### 占位选择器 %

如果不调用则不会有任何多余的 css 文件，占位选择器以 `%` 标识定义，通过 `@extend` 调用

```
//scss
%borderbox {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
.jdc {
    @extend %borderbox;
}
```

#### @extend 继承

```
// CSS
.jdc_1 {
    font-size: 12px;
    color: red;
}
.jdc_2 {
    font-size: 12px;
    color: red;
    font-weight: bold;
}

// SCSS
.jdc_1 {
    font-size: 12px;
    color: red;
}
.jdc_2 {
    @extend .jdc_1;
    font-weight: bold;
}

// 或者
%font_red {
    font-size: 12px;
    color: red;
}
.jdc_1 {
    @extend %font_red;
}
.jdc_2 {
    @extend %font_red;
    font-weight: bold;
}
```

#### @for 循环

```
// CSS
.jdc_1 {background-position: 0 -20px;}
.jdc_2 {background-position: 0 -40px;}
.jdc_3 {background-position: 0 -60px;}

// SCSS
@for $i from 1 through 3 {
    .jdc_#{$i} {
        background-position: 0 (-20px) * $i;
    }
}
```
注意：`#{}` 是连接符，变量连接使用时需要依赖

#### @each 循环

```
// CSS
.jdc_list {
    background-image: url(/img/jdc_list.png);
}
.jdc_detail {
    background-image: url(/img/jdc_detail.png);
}

// SCSS
@each $name in list, detail {
    .jdc_#{$name} {
        background-image: url(/img/jdc_#{$name}.png);
    }
}
```

```
// CSS
.jdc_list {
    background-image: url(/img/jdc_list.png);
    background-color: red;
}
.jdc_detail {
    background-image: url(/img/jdc_detail.png);
    background-color: blue;
}

// SCSS
@each $name, $color in (list, red), (detail, blue) {
    .jdc_#{$name} {
        background-image: url(/img/jdc_#{$name}.png);
        background-color: $color;
    }
}
```

#### @function 函数

```
@function pxToRem($px) {
    @return $px / 10px * 1rem;
}
.jdc {
    font-size: pxToRem(12px);
}
```

#### 运算规范

运算符之间空出一个空格

```
.jdc {
    width: 100px - 50px;
    height: 30px / 5;
}
```

注意运算单位，单位同时参与运算，所以 10px 不等于 10，乘除运算时需要特别注意

```
// 正确的运算格式
.jdc {
    width: 100px - 50px;
    width: 100px + 50px;
    width: 100px * 2;
    width: 100px / 2;
}
```

### 重置样式

#### 移动端

```
* { -webkit-tap-highlight-color: transparent; outline: 0; margin: 0; padding: 0; vertical-align: baseline; }
body, h1, h2, h3, h4, h5, h6, hr, p, blockquote, dl, dt, dd, ul, ol, li, pre, form, fieldset, legend, button, input, textarea, th, td { margin: 0; padding: 0; vertical-align: baseline; }
img { border: 0 none; vertical-align: top; }
i, em { font-style: normal; }
ol, ul { list-style: none; }
input, select, button, h1, h2, h3, h4, h5, h6 { font-size: 100%; font-family: inherit; }
table { border-collapse: collapse; border-spacing: 0; }
a { text-decoration: none; color: #666; }
body { margin: 0 auto; min-width: 320px; max-width: 640px; height: 100%; font-size: 14px; font-family: Helvetica, STHeiti STXihei, Microsoft JhengHei, Microsoft YaHei, Arial; line-height: 1.5; color: #666; -webkit-text-size-adjust: 100% !important; text-size-adjust: 100% !important; }
input[type="text"], textarea { -webkit-appearance: none; -moz-appearance: none; appearance: none; }
```

#### PC端

```
html, body, div, h1, h2, h3, h4, h5, h6, p, dl, dt, dd, ol, ul, li, fieldset, form, label, input, legend, table, caption, tbody, tfoot, thead, tr, th, td, textarea, article, aside, audio, canvas, figure, footer, header, mark, menu, nav, section, time, video { margin: 0; padding: 0; }
h1, h2, h3, h4, h5, h6 { font-size: 100%; font-weight: normal }
article, aside, dialog, figure, footer, header, hgroup, nav, section, blockquote { display: block; }
ul, ol { list-style: none; }
img { border: 0 none; vertical-align: top; }
blockquote, q { quotes: none; }
blockquote:before, blockquote:after, q:before, q:after { content: none; }
table { border-collapse: collapse; border-spacing: 0; }
strong, em, i { font-style: normal; font-weight: normal; }
ins { text-decoration: underline; }
del { text-decoration: line-through; }
mark { background: none; }
input::-ms-clear { display: none !important; }
body { font: 12px/1.5 \5FAE\8F6F\96C5\9ED1, \5B8B\4F53, "Hiragino Sans GB", STHeiti, "WenQuanYi Micro Hei", "Droid Sans Fallback", SimSun, sans-serif; background: #fff; }
a { text-decoration: none; color: #333; }
a:hover { text-decoration: underline; }
```

### 媒体查询

设备尺寸参考 ：[Mobile devices](http://mydevice.io/devices/)

媒体查询类型浏览器支持情况：[CSS3 Media Queries overview](http://cssmediaqueries.com/overview.html)

#### 常用查询语句

判断设备横竖屏

```
/* 横屏 */
@media all and (orientation :landscape) {

} 

/* 竖屏 */
@media all and (orientation :portrait) {

}
```

判断设备宽高

```
/* 设备宽度大于 320px 小于 640px */
@media all and (min-width:320px) and (max-width:640px) {
    
} 
```

判断设备像素比

```
/* 设备像素比为 1 */
@media only screen and (-webkit-min-device-pixel-ratio: 1), only screen and (min-device-pixel-ratio: 1) {
    
}

/* 设备像素比为 1.5 */
@media only screen and (-webkit-min-device-pixel-ratio: 1.5), only screen and (min-device-pixel-ratio: 1.5) {
    
}

/* 设备像素比为 2 */
@media only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min-device-pixel-ratio: 2) {
    
}
```

#### 常用设备设置

##### iPhones

```
/* ----------- iPhone 4 and 4S ----------- */

/* Portrait and Landscape */
@media only screen 
  and (min-device-width: 320px) 
  and (max-device-width: 480px)
  and (-webkit-min-device-pixel-ratio: 2) {

}

/* Portrait */
@media only screen 
  and (min-device-width: 320px) 
  and (max-device-width: 480px)
  and (-webkit-min-device-pixel-ratio: 2)
  and (orientation: portrait) {
}

/* Landscape */
@media only screen 
  and (min-device-width: 320px) 
  and (max-device-width: 480px)
  and (-webkit-min-device-pixel-ratio: 2)
  and (orientation: landscape) {

}

/* ----------- iPhone 5 and 5S ----------- */

/* Portrait and Landscape */
@media only screen 
  and (min-device-width: 320px) 
  and (max-device-width: 568px)
  and (-webkit-min-device-pixel-ratio: 2) {

}

/* Portrait */
@media only screen 
  and (min-device-width: 320px) 
  and (max-device-width: 568px)
  and (-webkit-min-device-pixel-ratio: 2)
  and (orientation: portrait) {
}

/* Landscape */
@media only screen 
  and (min-device-width: 320px) 
  and (max-device-width: 568px)
  and (-webkit-min-device-pixel-ratio: 2)
  and (orientation: landscape) {

}

/* ----------- iPhone 6 ----------- */

/* Portrait and Landscape */
@media only screen 
  and (min-device-width: 375px) 
  and (max-device-width: 667px) 
  and (-webkit-min-device-pixel-ratio: 2) { 

}

/* Portrait */
@media only screen 
  and (min-device-width: 375px) 
  and (max-device-width: 667px) 
  and (-webkit-min-device-pixel-ratio: 2)
  and (orientation: portrait) { 

}

/* Landscape */
@media only screen 
  and (min-device-width: 375px) 
  and (max-device-width: 667px) 
  and (-webkit-min-device-pixel-ratio: 2)
  and (orientation: landscape) { 

}

/* ----------- iPhone 6+ ----------- */

/* Portrait and Landscape */
@media only screen 
  and (min-device-width: 414px) 
  and (max-device-width: 736px) 
  and (-webkit-min-device-pixel-ratio: 3) { 

}

/* Portrait */
@media only screen 
  and (min-device-width: 414px) 
  and (max-device-width: 736px) 
  and (-webkit-min-device-pixel-ratio: 3)
  and (orientation: portrait) { 

}

/* Landscape */
@media only screen 
  and (min-device-width: 414px) 
  and (max-device-width: 736px) 
  and (-webkit-min-device-pixel-ratio: 3)
  and (orientation: landscape) { 

}
```

##### Galaxy Phones

```
/* ----------- Galaxy S3 ----------- */

/* Portrait and Landscape */
@media screen 
  and (device-width: 320px) 
  and (device-height: 640px) 
  and (-webkit-device-pixel-ratio: 2) {

}

/* Portrait */
@media screen 
  and (device-width: 320px) 
  and (device-height: 640px) 
  and (-webkit-device-pixel-ratio: 2) 
  and (orientation: portrait) {

}

/* Landscape */
@media screen 
  and (device-width: 320px) 
  and (device-height: 640px) 
  and (-webkit-device-pixel-ratio: 2) 
  and (orientation: landscape) {

}

/* ----------- Galaxy S4 ----------- */

/* Portrait and Landscape */
@media screen 
  and (device-width: 320px) 
  and (device-height: 640px) 
  and (-webkit-device-pixel-ratio: 3) {

}

/* Portrait */
@media screen 
  and (device-width: 320px) 
  and (device-height: 640px) 
  and (-webkit-device-pixel-ratio: 3) 
  and (orientation: portrait) {

}

/* Landscape */
@media screen 
  and (device-width: 320px) 
  and (device-height: 640px) 
  and (-webkit-device-pixel-ratio: 3) 
  and (orientation: landscape) {

}

/* ----------- Galaxy S5 ----------- */

/* Portrait and Landscape */
@media screen 
  and (device-width: 360px) 
  and (device-height: 640px) 
  and (-webkit-device-pixel-ratio: 3) {

}

/* Portrait */
@media screen 
  and (device-width: 360px) 
  and (device-height: 640px) 
  and (-webkit-device-pixel-ratio: 3) 
  and (orientation: portrait) {

}

/* Landscape */
@media screen 
  and (device-width: 360px) 
  and (device-height: 640px) 
  and (-webkit-device-pixel-ratio: 3) 
  and (orientation: landscape) {

}
```

##### HTC Phones

```
/* ----------- HTC One ----------- */

/* Portrait and Landscape */
@media screen 
  and (device-width: 360px) 
  and (device-height: 640px) 
  and (-webkit-device-pixel-ratio: 3) {

}

/* Portrait */
@media screen 
  and (device-width: 360px) 
  and (device-height: 640px) 
  and (-webkit-device-pixel-ratio: 3) 
  and (orientation: portrait) {

}

/* Landscape */
@media screen 
  and (device-width: 360px) 
  and (device-height: 640px) 
  and (-webkit-device-pixel-ratio: 3) 
  and (orientation: landscape) {

}
```

##### iPads

```
/* ----------- iPad mini ----------- */

/* Portrait and Landscape */
@media only screen 
  and (min-device-width: 768px) 
  and (max-device-width: 1024px) 
  and (-webkit-min-device-pixel-ratio: 1) {

}

/* Portrait */
@media only screen 
  and (min-device-width: 768px) 
  and (max-device-width: 1024px) 
  and (orientation: portrait) 
  and (-webkit-min-device-pixel-ratio: 1) {

}

/* Landscape */
@media only screen 
  and (min-device-width: 768px) 
  and (max-device-width: 1024px) 
  and (orientation: landscape) 
  and (-webkit-min-device-pixel-ratio: 1) {

}

/* ----------- iPad 1 and 2 ----------- */

/* Portrait and Landscape */
@media only screen 
  and (min-device-width: 768px) 
  and (max-device-width: 1024px) 
  and (-webkit-min-device-pixel-ratio: 1) {

}

/* Portrait */
@media only screen 
  and (min-device-width: 768px) 
  and (max-device-width: 1024px) 
  and (orientation: portrait) 
  and (-webkit-min-device-pixel-ratio: 1) {

}

/* Landscape */
@media only screen 
  and (min-device-width: 768px) 
  and (max-device-width: 1024px) 
  and (orientation: landscape) 
  and (-webkit-min-device-pixel-ratio: 1) {

}

/* ----------- iPad 3 and 4 ----------- */

/* Portrait and Landscape */
@media only screen 
  and (min-device-width: 768px) 
  and (max-device-width: 1024px) 
  and (-webkit-min-device-pixel-ratio: 2) {

}

/* Portrait */
@media only screen 
  and (min-device-width: 768px) 
  and (max-device-width: 1024px) 
  and (orientation: portrait) 
  and (-webkit-min-device-pixel-ratio: 2) {

}

/* Landscape */
@media only screen 
  and (min-device-width: 768px) 
  and (max-device-width: 1024px) 
  and (orientation: landscape) 
  and (-webkit-min-device-pixel-ratio: 2) {

}
```