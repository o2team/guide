title: 图片格式
---

## 图片格式

常见的图片格式有 GIF、PNG8、PNG24、JPEG、WEBP，根据图片格式的特性和场景需要选取适合的图片格式。

### GIF 

> GIF图象是基于颜色列表的（存储的数据是该点的颜色对应于颜色列表的索引值），最多只支持8位（256色）。GIF文件内部分成许多存储块，用来存储多幅图象或者是决定图象表现行为的控制块，用以实现动画和交互式应用。GIF文件还通过LZW压缩算法压缩图象数据来减少图象尺寸

#### 特性

* 优秀的压缩算法使其在一定程度上保证图像质量的同时将体积变得很小。
* 可插入多帧，从而实现动画效果。
* 可设置透明色以产生对象浮现于背景之上的效果。
* 由于采用了8位压缩，最多只能处理256种颜色，故不宜应用于真彩色图片。

更多关于GIF：

[维基百科 - GIF](https://zh.wikipedia.org/wiki/GIF)

[GIF文档](http://dev.gameres.com/Program/Visual/Other/GIFDoc.htm)

### PNG

> PNG是20世纪90年代中期开始开发的图像文件存储格式，其目的是企图替代GIF和TIFF文件格式，同时增加一些GIF文件格式所不具备的特性。流式网络图形格式(Portable Network Graphic Format，PNG)名称来源于非官方的“PNG's Not GIF”，是一种位图文件(bitmap file)存储格式，读成“ping”。PNG用来存储灰度图像时，灰度图像的深度可多到16位，存储彩色图像时，彩色图像的深度可多到48位，并且还可存储多到16位的α通道数据。PNG使用从LZ77派生的无损数据压缩算法。

#### 特性

* 支持256色调色板技术，文件体积小。
* 无损压缩
* 最高支持48位真彩色图像以及16位灰度图像。
* 支持Alpha通道的透明/半透明特性。
* 支持图像亮度的Gamma校准信息。
* 支持存储附加文本信息，以保留图像名称、作者、版权、创作时间、注释等信息。
* 渐近显示和流式读写，适合在网络传输中快速显示预览效果后再展示全貌。
* 使用CRC防止文件出错。
* 最新的PNG标准允许在一个文件内存储多幅图像。

更多关于PNG：

[PNG官方站 - PNG General Information](http://www.libpng.org/pub/png/)

[PNG格式](http://dev.gameres.com/Program/Visual/Other/PNGFormat.htm)

[维基百科 - PNG](https://zh.wikipedia.org/wiki/PNG)

### JPEG

> JPEG是一种针对照片视频而广泛使用的一种有损压缩标准方法。这个名称代表Joint Photographic Experts Group（联合图像专家小组）。此团队创立于公元1986年，1992年发布了JPEG的标准而在1994年获得了ISO 10918-1的认定

#### 特性

* 适用于储存24位元全采影像
* 采取的压缩方式通常为有损压缩
* 不支持透明或动画
* 压缩比越高影像耗损越大，失真越严重
* 压缩比在10左右肉眼无法辨出压缩图与原图的差别

更多关于JPEG：

[维基百科 - JPEG](https://zh.wikipedia.org/wiki/JPEG)

### WEBP

> WebP，是一种同时提供了有损压缩与无损压缩的图片文件格式，派生自视频编码格式 VP8，是由Google在购买On2 Technologies后发展出来。WebP最初在2010年发布，2011年11月8日，Google开始让WebP支持无损压缩和透明色的功能，而在2012年8月16日的参考实做libwebp 0.2.0中正式支持

#### 特性

* 同时提供有损压缩和无损压缩两种图片文件格式
* 文件体积小，无损压缩后，比 PNG 文件少了 45％ 的文件大小；有损压缩后，比 JPEG 文件少了 25% - 34% 文件大小
* 浏览器兼容差，目前只支持客户端 Chrome 和 Opera 浏览器以及安卓原生浏览器(Andriod 4.0+)，[WebP兼容性](https://developers.google.com/speed/webp/faq#which_web_browsers_natively_support_webp)

更多关于WebP：

[维基百科 - WEBP](https://zh.wikipedia.org/wiki/WebP)

[WEBP探寻之路](http://isux.tencent.com/introduction-of-webp.html)



## 团队约定 

### 内容图

内容图多以商品图等照片类图片形式存在，颜色较为丰富，文件体积较大

* 优先考虑 JPEG 格式，条件允许的话优先考虑 WebP 格式
* 尽量不使用PNG格式，PNG8 色位太低，PNG24 压缩率低，文件体积大

### 背景图

背景图多为图标等颜色比较简单、文件体积不大、起修饰作用的图片

* PNG 与 GIF 格式，优先考虑使用 PNG 格式,PNG格式允许更多的颜色并提供更好的压缩率
* 图像颜色比较简单的，如纯色块线条图标，优先考虑使用 PNG8 格式，避免不使用 JPEG 格式
* 图像颜色丰富而且图片文件不太大的（40KB 以下）或有半透明效果的优先考虑 PNG24 格式
* 图像颜色丰富而且文件比较大的（40KB - 200KB）优先考虑 JPEG 格式
* 条件允许的，优先考虑 WebP 代替 PNG 和 JPEG 格式