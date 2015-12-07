# 前端开发编码规范

基于 [W3C](http://www.w3.org/)、[苹果开发者](https://developer.apple.com/) 等官方文档，并结合团队日常业务需求以及团队在日常开发过程中总结提炼出的经验而约定。

旨在增强团队开发协作、提高代码质量和打造开发基石的编码规范，是团队代码基本约定的内容，必须严格遵循。

## HTML规范

###代码规范

#### DOCTYPE 声明

一个DOCTYPE必须包含以下部分，并严格按照顺序出现：

> 1. A string that is an ASCII case-insensitive match for the string "<!DOCTYPE".
> 2. One or more space characters.
> 3. A string that is an ASCII case-insensitive match for the string "html".
> 4. Optionally, a DOCTYPE legacy string or an obsolete permitted DOCTYPE string (defined below).
> 5. Zero or more space characters.
> 6. A ">" (U+003E) character.

1. 一个ASCII字符串 "<!DOCTYPE" ，大小写不敏感
2. 一个或多个空白字符
3. 一个ASCII字符串"html"，大小写不敏感
4. 一个可选的历史遗留的DOCTYPE字符串 （[DOCTYPE legacy string](http://www.w3.org/TR/2014/REC-html5-20141028/syntax.html#doctype-legacy-string)），或者一个可选的已过时但被允许的DOCTYPE字符串 （[obsolete permitted DOCTYPE string](http://www.w3.org/TR/2014/REC-html5-20141028/syntax.html#obsolete-permitted-doctype-string)） 字符串
5. 一个或多个空白字符
6. 一个编码为 U+003E 的字符 “&gt;”

##### 团队约定

HTML文件必须加上 DOCTYPE 声明，并统一使用 HTML5 的文档声明：

	<!DOCTYPE html>

##### 更多关于 DOCTYPE声明
[#The DOCTYPE](http://www.w3.org/TR/2014/REC-html5-20141028/syntax.html#the-doctype)


#### 页面语言LANG

Lang属性的取值应该遵循互联网工程任务组--IETF（The Internet Engineering Task Force）制定的关于语言标签的文档 [BCP 47 - Tags for Identifying Languages](http://tools.ietf.org/html/bcp47)

##### 团队约定

推荐使用属性值 `cmn-Hans-CN`（简体, 中国大陆），但是考虑浏览器和操作系统的兼容性，目前仍然使用 `zh-CN` 属性值

	<html lang="zh-CN">
	
更多地区语言参考：

	zh-SG 中文 (简体, 新加坡)   对应 cmn-Hans-SG 普通话 (简体, 新加坡)
	zh-HK 中文 (繁体, 香港)     对应 cmn-Hant-HK 普通话 (繁体, 香港)
	zh-MO 中文 (繁体, 澳门)     对应 cmn-Hant-MO 普通话 (繁体, 澳门)
	zh-TW 中文 (繁体, 台湾)     对应 cmn-Hant-TW 普通话 (繁体, 台湾)
	
	
##### 已废弃不推荐使用的 Languages Tags

以下写法已于 2009 年废弃，请勿使用（cmn、wuu、yue、gan 等已由 2005 年的 extlang 升级到 2009 年的 language）：

	zh-cmn, zh-cmn-Hans, zh-cmn-Hant, zh-wuu, zh-yue, zh-gan
	
以下写法已于 2009 年废弃，不推荐使用：

	zh-Hans, zh-Hans-CN, zh-Hans-SG, zh-Hans-HK, zh-Hans-MO, zh-Hans-TW, 
	zh-Hant, zh-Hant-CN, zh-Hant-SG, zh-Hant-HK, zh-Hant-MO, zh-Hant-TW

更多已废弃 Languages Tags 参考 [IANA Language Subtag Registry](http://www.iana.org/assignments/language-subtag-registry/language-subtag-registry) 里面的 “Type: redundant“”

##### 更多关于 Languages Tags ：

[W3C Language tags in HTML and XML](http://www.w3.org/International/articles/language-tags/)


[网页头部的声明应该是用 lang="zh" 还是 lang="zh-cn"？](http://www.zhihu.com/question/20797118?utm_source=weibo&utm_medium=weibo_share&utm_content=share_question&utm_campaign=share_sidebar)



#### CHARSET

> Because the character sets in ISO-8859 was limited in size, and not compatible in multilingual environments, the Unicode Consortium developed the Unicode Standard.
> 
> The Unicode Standard covers (almost) all the characters, punctuations, and symbols in the world.
> 
> Unicode enables processing, storage, and transport of text independent of platform and language.
> 
> The default character encoding in HTML-5 is UTF-8.

因为 ISO-8859 中字符集大小是有限的，且在多语言环境中不兼容，所以 Unicode 联盟开发了 Unicode 标准。

Unicode 标准覆盖了（几乎）所有的字符、标点符号和符号。

Unicode 使文本的处理、存储和运输，独立于平台和语言。

HTML-5 中默认的字符编码是 UTF-8

参阅 [HTML Unicode (UTF-8) Reference](http://www.w3schools.com/charsets/ref_html_utf8.asp)

##### 团队约定

一般情况下统一使用 “UTF-8” 编码

	<meta charset="UTF-8">
	
由于历史原因，有些业务可能会使用 “GBK” 编码
	
	<meta charset="GBK">

请尽量统一写成标准的 “UTF-8”，不要写成 “utf-8” 或 “utf8” 或 “UTF8”。根据 [IETF对UTF-8的定义](http://www.ietf.org/rfc/rfc3629)，其编码标准的写法是 “UTF-8”；而 UTF8 或 utf8 的写法只是出现在某些编程系统中，如 .NET framework 的类 System.Text.Encoding 中的一个属性名就叫 UTF8。

##### 更多关于 

UTF-8写法: [UTF8 or UTF-8?](http://stackoverflow.com/questions/809620/utf8-or-utf-8) 

GBK：[Application of IANA Charset Registration for GBK](http://www.ietf.org/assignments/charset-reg/GBK)

Charset ：[character-encoding-declaration](http://www.w3.org/TR/html5/document-metadata.html#character-encoding-declaration) 


#### 元素及标签闭合

HTML元素共有以下5种：
 
* 空元素：area、base、br、col、command、embed、hr、img、input、keygen、link、meta、param、source、track、wbr
* 原始文本元素：script、style
* RCDATA元素：textarea、title
* 外来元素：来自MathML命名空间和SVG命名空间的元素。
* 常规元素：其他HTML允许的元素都称为常规元素。

元素标签的闭合应遵循以下原则：

> Tags are used to delimit the start and end of elements in the markup. Raw text, escapable raw text, and normal elements have a start tag to indicate where they begin, and an end tag to indicate where they end. The start and end tags of certain normal elements can be omitted, as described below in the section on optional tags. Those that cannot be omitted must not be omitted. Void elements only have a start tag; end tags must not be specified for void elements. Foreign elements must either have a start tag and an end tag, or a start tag that is marked as self-closing, in which case they must not have an end tag.

* 原始文本元素、RCDATA元素以及常规元素都有一个开始标签来表示开始，一个结束标签来表示结束。
* [某些元素的开始和结束标签是可以省略的](http://www.w3.org/TR/html5/syntax.html#optional-tags)，如果规定标签不能被省略，那么就绝对不能省略它。
* 空元素只有一个开始标签，且不能为空元素设置结束标签。
* 外来元素可以有一个开始标签和配对的结束标签，或者只有一个自闭合的开始标签，且后者情况下该元素不能有结束标签。

##### 团队约定

为了能让浏览器更好的解析代码以及能让代码具有更好的可读性，有如下约定：

* 所有具有开始标签和结束标签的元素都要写上起止标签，某些允许省略开始标签或和束标签的元素亦都要写上。
* 空元素标签都不加 “/” 字符


*推荐：*

	<div>
		<h1>我是h1标题</h1>
		<p>我是一段文字，我有始有终，浏览器能正确解析</p>
	</div>
	
	<br>
	
*不推荐：*

	<div>
		<h1>我是h1标题</h1>
		<p>我是一段文字，我有始无终，浏览器亦能正确解析
	</div>

	<br/>

更多关于元素及标签关闭：[#Elements](http://www.w3.org/TR/html5/syntax.html#elements-0)

#### 书写风格

##### HTML代码大小写

HTML标签名、类名、标签属性和大部分属性值统一用小写

*推荐：*

	<div class="demo"></div>
	
*不推荐：*

	<div class="DEMO"></div>
	
	<DIV CLASS="DEMO"></DIV>

HTML文本、CDATA、JavaScript、meta标签某些属性等内容可大小写混合
	
	<!-- 优先使用 IE 最新版本和 Chrome Frame -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>

	<!-- HTML文本内容 -->
	<h1>I AM WHAT I AM </h1>

	<!-- JavaScript 内容 -->
	<script type="text/javascript">
		var demoName = 'demoName';
		...
	</script>
	
	<!-- CDATA 内容 -->
	<script type="text/javascript"><![CDATA[
    ...
	]]></script>
	
##### 类型属性

不需要为 CSS、JS 指定类型属性，HTML5 中默认已包含

*推荐：*

	<link rel="stylesheet" href="" >
	<script src=""></script>
	
*不推荐：*

	<link rel="stylesheet" type="text/css" href="" >
	<script type="text/javascript" src="" ></script>
	
##### 元素属性

* 元素属性值使用双引号语法
* 元素属性值可以写上的都写上


*推荐：*

	<input type="text">
	
	<input type="radio" name="name" checked="checked" >
	
*不推荐：*

	<input type=text>	
	<input type='text'>
	
	<input type="radio" name="name" checked >
	
	
更多关于元素属性：[#Attributes](http://www.w3.org/TR/html5/syntax.html#attributes-0)

##### 特殊字符引用

> In certain cases described in other sections, text may be mixed with character references. These can be used to escape characters that couldn't otherwise legally be included in text.

文本可以和字符引用混合出现。这种方法可以用来转义在文本中不能合法出现的字符。


在 HTML 中不能使用小于号 “&lt;” 和大于号 “&gt;”特殊字符，浏览器会将它们作为标签解析，若要正确显示，在 HTML 源代码中使用字符实体

*推荐：*

	<a href="#">more&gt;&gt;</a>

*不推荐：*

	<a href="#">more>></a>
	
更多关于符号引用：[#Character references](http://www.w3.org/TR/html5/syntax.html#character-references)

##### 代码缩进

统一使用四个空格进行代码缩进，使得各编辑器表现一致（各编辑器有相关配置）

	<div class="jdc">
   	    <a href="#"></a>
    </div> 

##### 纯数字输入框

使用 type="tel" 而不是 type="number"
	
	<input type="tel">    

##### 代码嵌套

元素嵌套规范，每个块状元素独立一行，内联元素可选

*推荐：*

	<div>
    	<h1></h1>
    	<p></p>
	</div>	
	<p><span></span><span></span></p>
	
*不推荐：*

	<div>
    	<h1></h1><p></p>
	</div>	
	<p> 
		<span></span>
		<span></span>
	</p>
	
段落元素与标题元素只能嵌套内联元素

*推荐：*
	
	<h1><span></span></h1>
	<p><span></span><span></span></p>
	
*不推荐：*

	<h1><div></div></h1>
	<p><div></div><div></div></p>
				
###注释规范

HTML注释规范写法应该遵循以下标准：

> Comments must start with the four character sequence U+003C LESS-THAN SIGN, U+0021 EXCLAMATION MARK, U+002D HYPHEN-MINUS, U+002D HYPHEN-MINUS (&lt;!--). Following this sequence, the comment may have text, with the additional restriction that the text must not start with a single "&gt;" (U+003E) character, nor start with a U+002D HYPHEN-MINUS character (-) followed by a "&gt;" (U+003E) character, nor contain two consecutive U+002D HYPHEN-MINUS characters (--), nor end with a U+002D HYPHEN-MINUS character (-). Finally, the comment must be ended by the three character sequence U+002D HYPHEN-MINUS, U+002D HYPHEN-MINUS, U+003E GREATER-THAN SIGN (--&gt;).

* 必须以4个有序字符开始：编码为 U+003C LESS-THAN SIGN 的小于号, 编码为 U+0021 EXCLAMATION MARK 的感叹号, 编码为 U+002D HYPHEN-MINUS 横线, 编码为 U+002D HYPHEN-MINUS横线 ，即 “&lt;!--”
* 在此之后是注释内容，注释的内容有以下限制：
	* 不能以单个 "&gt;" (U+003E) 字符开始
	* 不能以由 “-“（U+002D HYPHEN-MINUS）和 ”&gt;” (U+003E) 组合的字符开始，即 “-&gt;”
	* 不能包含两个连续的 U+002D HYPHEN-MINUS 字符，即 “--”
	* 不能以一个 U+002D HYPHEN-MINUS 字符结束，即 “-”
* 必须以3个有序字符结束：U+002D HYPHEN-MINUS, U+002D HYPHEN-MINUS, U+003E GREATER-THAN SIGN，即 “--&gt;”

标准写法：

	<!--Comment Text-->
	
错误的写法：

	<!-->The Wrong Comment Text-->

	<!--->The Wrong Comment Text-->

	<!--The--Wrong--Comment Text-->

	<!--The Wrong Comment Text--->
	
参考 www.w3.org [#Comments](http://www.w3.org/TR/2014/REC-html5-20141028/syntax.html#comments) 


	
#### 团队约定

##### 单行注释 

一般用于简单的描述，如某些状态描述、属性描述等

注释内容前后各一个空格字符，注释位于要注释代码的上面，单独占一行

*推荐：*

	<!-- Comment Text -->
	<div>...</div>
	
*不推荐：*
	
	<div>...</div><!-- Comment Text -->	
	
	<div><!-- Comment Text -->
	...
	</div>

##### 模块注释

一般用于描述模块的名称以及模块开始与结束的位置

注释内容前后各一个空格字符，`<!-- S Comment Text -->` 表示模块开始，`<!-- E Comment Text -->` 表示模块结束，模块与模块之间相隔一行

*推荐写法：*

	<!-- S Comment Text A -->	
	<div class="mod_a">
		...
	</div>
	<!-- E Comment Text A -->
	
	<!-- S Comment Text B -->	
	<div class="mod_b">
		...
	</div>
	<!-- E Comment Text B -->
	
*不推荐写法：*

	<!-- S Comment Text A -->
	<div class="mod_a">
		...
	</div>
	<!-- E Comment Text A -->
	<!-- S Comment Text B -->	
	<div class="mod_b">
		...
	</div>
	<!-- E Comment Text B -->
	
##### 嵌套模块注释

当模块注释内再出现模块注释的时候，为了突出主要模块，嵌套模块不再使用 

	<!-- S Comment Text -->
	<!-- E Comment Text -->
	
而改用 

	<!-- /Comment Text -->

注释写在模块结尾标签底部，单独一行。

	<!-- S Comment Text A -->
	<div class="mod_a">
			
		<div class="mod_b">
			...
		</div>
		<!-- /mod_b -->
			
		<div class="mod_c">
			...
		</div>
		<!-- /mod_c -->
			
	</div>
	<!-- E Comment Text A -->

### WebApp Meta 标签设置(iOS)

> A web application is designed to look and behave in a way similar to a native application—for example, it is scaled to fit the entire screen on iOS. You can tailor your web application for Safari on iOS even further, by making it appear like a native application when the user adds it to the Home screen. You do this by using settings for iOS that are ignored by other platforms.

WebApp目的在于使其界面和行为在某种程度上类似于原生APP应用。例如，WebApp 可以在 iOS 设备上通过缩放去适配设备屏幕。当用户将WebApp程序添加到主屏幕后，会使得它看上去像原生APP一样，以此，你可以进一步为 Safari 定制自己的 WebApp，而使用某些专为 iOS 平台设定的设置就可以做到。

WebApp可以通过设置 meta 标签来改变页面的一些表现，有些 meta 设置在 Safari 应用或原生 App 的内嵌网页中都可以生效，而有些设置侧需要将应用添加到主屏幕的时候才会生效。


#### Viewport Meta Tag

通用类设置：

	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
	
* width -- viewport的宽度
* height -- viewport的高度
* initial-scale -- 初始的缩放比例
* minimum-scale -- 允许用户缩放到的最小比例
* maximum-scale -- 允许用户缩放到的最大比例
* user-scalable -- 是否允许用户缩放

其中 Safari on iOS viewport：

> The width of the viewport in pixels. The default is 980. The range is from 200 to 10,000.
> 
> The minimum-scale and maximum-scale properties also affect the behavior when changing orientations. The range of these property values is from >0 to 10.0. The default value for minimum-scale is 0.25 and maximum-scale is 5.0

> user-scalable -- The default is yes.
Setting user-scalable to no also prevents a webpage from scrolling when entering text in an input field.


* 默认宽度是 980px，范围从 200px 到 10000px
* initial-scale 缩放比例范围值是 从 >0 到 10 之间
* minimum-scale 默认值是 0.25
* maximum-scale 默认值是 5
* user-scalable -- 默认值是 yes，设置 no 还可以在文本框输入文本的时候阻止页面滚动

	
更多关于 Safari on iOS viewport 的设置:

[Configuring the Viewport](https://developer.apple.com/library/ios/documentation/AppleApplications/Reference/SafariWebContent/UsingtheViewport/UsingtheViewport.html#//apple_ref/doc/uid/TP40006509-SW19)

[Safari HTML Reference](https://developer.apple.com/library/safari/documentation/AppleApplications/Reference/SafariHTMLRef/Articles/MetaTags.html)



#### Apple-Specific Meta Tag Keys

##### apple-mobile-web-app-capable

设置 WebApp 是否进入全屏模式，该设置需要添加到主屏幕才生效

	<meta name="apple-mobile-web-app-capable" content="yes">
		
> If content is set to yes, the web application runs in full-screen mode;otherwise, it does not. The default behavior is to use Safari to display web content.You can determine whether a webpage is displayed in full-screen mode using the window.navigator.standalone read-only Boolean JavaScript property.

* content设置 yes 进入全屏模式
* 默认会启动 Safari 应用，使用 Safari 应用浏览
* 通过检测 window.navigator.standalone 的 Boolean 值可以判断 web 应用是否处于全屏模式

##### apple-mobile-web-app-status-bar-style

为 webapp 设置状态栏样式

	<meta name="apple-mobile-web-app-status-bar-style" content="black">
	
> This meta tag has no effect unless you first specify full-screen mode as described in apple-apple-mobile-web-app-capable.
> 
If content is set to default, the status bar appears normal. If set to black, the status bar has a black background. If set to black-translucent, the status bar is black and translucent. If set to default or black, the web content is displayed below the status bar. If set to black-translucent, the web content is displayed on the entire screen, partially obscured by the status bar. The default value is default.

* 此 meta 设置只在全屏模式生效
* 默认值是 default
* content="black"，状态栏背景黑色，网页内容在状态栏下面
* content="black-translucent"，状态栏半透明，背景黑色，网页内容占满全屏

*该设置在 iOS6 和 iOS7 表现还可以，但到了 iOS8 后会出现各种问题，而且在 iOS9 中并没有生效。参阅：[iOS 8: web app status bar position and resizing problems](http://stackoverflow.com/questions/25884806/ios-8-web-app-status-bar-position-and-resizing-problems)*

##### format-detection

自动识别页面中有可能是电话格式的数字 

	<meta name="format-detection" content="telephone=no">
	
> By default, Safari on iOS detects any string formatted like a phone number and makes it a link that calls the number. Specifying telephone=no disables this feature.

iOS中的 Safari 会默认识别与电话格式相似的数字并生成一个可以拉起电话应用并将该数字作为电话号码拨打的链接。定义 telephone=no 可以屏蔽该功能

更多 WebApp 设置参考 [Configuring Web Applications](https://developer.apple.com/library/ios/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html#//apple_ref/doc/uid/TP40002051-CH3-SW4)

###HTML模版

HTML模版指的是团队使用的初始化HTML文件，里面会根据不同平台而采用不一样的设置，一般主要不同的设置就是 mata 标签的设置，以下是 PC 和移动端的 HTML 模版

#### HTML5最简结构标准模版：

	<!DOCTYPE html>
	<html lang="zh-CN">
	<head>
	<meta charset="UTF-8">
	<title>HTML5最简结构标准模版</title>
	</head>
	<body>
	
	</body>
	</html> 
	
#### 团队约定的HTML模版

##### 移动端

	<!DOCTYPE html>
	<html lang="zh-CN">
	<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" >
	<meta name="format-detection" content="telephone=no" >
	<title>移动端HTML模版</title>
  	
  	<!-- S DNS预解析 -->
  	<link rel="dns-prefetch" href="">
  	<!-- E DNS预解析 --> 

  	<!-- S 线上样式页面片，开发请直接取消注释引用 -->
	<!-- #include virtual="" -->
	<!-- E 线上样式页面片 -->

	<!-- S 本地调试，根据开发模式选择调试方式，请开发删除 --> 
	<link rel="stylesheet" href="css/index.css" >
	<!-- /本地调试方式 -->

	<link rel="stylesheet" href="http://srcPath/index.css" >
	<!-- /开发机调试方式 -->
	<!-- E 本地调试 -->
    
	</head>
	<body>
	
	</body>
	</html>
		
##### PC端

	<!DOCTYPE html>
	<html lang="zh-CN">
	<head>
	<meta charset="UTF-8">
    <meta name="keywords" content="your keywords">
    <meta name="description" content="your description">
    <meta name="author" content="author,email address">
    <meta name="robots" content="index,follow">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1">
    <meta name="renderer" content="ie-stand">
	<title>PC端HTML模版</title>
    
    <!-- S DNS预解析 --> 
    <link rel="dns-prefetch" href="">
    <!-- E DNS预解析 --> 

	<!-- S 线上样式页面片，开发请直接取消注释引用 -->
	<!-- #include virtual="" -->
	<!-- E 线上样式页面片 -->

	<!-- S 本地调试，根据开发模式选择调试方式，请开发删除 --> 
	<link rel="stylesheet" href="css/index.css" >
	<!-- /本地调试方式 -->

	<link rel="stylesheet" href="http://srcPath/index.css" >
	<!-- /开发机调试方式 -->
	<!-- E 本地调试 -->
    
	</head>
	<body>
	
	</body>
	</html>