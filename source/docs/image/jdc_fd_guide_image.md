## 图片规范

### 图片格式

常见的图片格式有 GIF、PNG8、PNG24、JPEG、WEBP，根据图片格式的特性和场景需要选取适合的图片格式


#### GIF

> GIF图象是基于颜色列表的（存储的数据是该点的颜色对应于颜色列表的索引值），最多只支持8位（256色）。GIF文件内部分成许多存储块，用来存储多幅图象或者是决定图象表现行为的控制块，用以实现动画和交互式应用。GIF文件还通过LZW压缩算法压缩图象数据来减少图象尺寸

##### 特性

* 优秀的压缩算法使其在一定程度上保证图像质量的同时将体积变得很小。
* 可插入多帧，从而实现动画效果。
* 可设置透明色以产生对象浮现于背景之上的效果。
* 由于采用了8位压缩，最多只能处理256种颜色，故不宜应用于真彩色图片。

更多关于GIF：

[维基百科 - PNG](https://zh.wikipedia.org/wiki/GIF)

[GIF文档](http://dev.gameres.com/Program/Visual/Other/GIFDoc.htm)

#### PNG

> PNG是20世纪90年代中期开始开发的图像文件存储格式，其目的是企图替代GIF和TIFF文件格式，同时增加一些GIF文件格式所不具备的特性。流式网络图形格式(Portable Network Graphic Format，PNG)名称来源于非官方的“PNG's Not GIF”，是一种位图文件(bitmap file)存储格式，读成“ping”。PNG用来存储灰度图像时，灰度图像的深度可多到16位，存储彩色图像时，彩色图像的深度可多到48位，并且还可存储多到16位的α通道数据。PNG使用从LZ77派生的无损数据压缩算法。

##### 特性

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

[PNG官方站 - PNG General Information
](http://www.libpng.org/pub/png/)

[PNG格式](http://dev.gameres.com/Program/Visual/Other/PNGFormat.htm)

[维基百科 - PNG](https://zh.wikipedia.org/wiki/PNG)

#### JPEG

> JPEG是一种针对照片视频而广泛使用的一种有损压缩标准方法。这个名称代表Joint Photographic Experts Group（联合图像专家小组）。此团队创立于公元1986年，1992年发布了JPEG的标准而在1994年获得了ISO 10918-1的认定

##### 特性

* 适用于储存24位元全采影像
* 采取的压缩方式通常为有损压缩
* 不支持透明或动画
* 压缩比越高影像耗损越大，失真越严重
* 压缩比在10左右肉眼无法辨出压缩图与原图的差别

更多关于JPEG：

[维基百科 - JPEG](https://zh.wikipedia.org/wiki/JPEG)

#### WEBP

> WebP，是一种同时提供了有损压缩与无损压缩的图片文件格式，派生自视频编码格式 VP8，是由Google在购买On2 Technologies后发展出来。WebP最初在2010年发布，2011年11月8日，Google开始让WebP支持无损压缩和透明色的功能，而在2012年8月16日的参考实做libwebp 0.2.0中正式支持

##### 特性

* 同时提供有损压缩和无损压缩两种图片文件格式
* 文件体积小，无损压缩后，比 PNG 文件少了 45％ 的文件大小；有损压缩后，比 JPEG 文件少了 25% - 34% 文件大小
* 浏览器兼容差，目前只支持客户端 Chrome 和 Opera 浏览器以及安卓原生浏览器(Andriod 4.0+)，[WebP兼容性](https://developers.google.com/speed/webp/faq#which_web_browsers_natively_support_webp)

更多关于WebB：

[维基百科](https://zh.wikipedia.org/wiki/WebP)

[WebP探寻之路](http://isux.tencent.com/introduction-of-webp.html)


#### 团队约定 

##### 内容图

内容图多以商品图等照片类图片形式存在，颜色较为丰富，文件体积较大

* 优先考虑 JPEG 格式，条件允许的话优先考虑 WebP 格式
* 尽量不使用PNG格式，PNG8 色位太低，PNG24 压缩率低，文件体积大

##### 背景图

背景图多为图标等颜色比较简单、文件体积不大、起修饰作用的图片

* PNG 与 GIF 格式，优先考虑使用 PNG 格式,PNG格式允许更多的颜色并提供更好的压缩率
* 图像颜色比较简单的，如纯色块线条图标，优先考虑使用 PNG8 格式，避免不使用 JPEG 格式
* 图像颜色丰富而且图片文件不太大的（40KB 以下）或有半透明效果的优先考虑 PNG24 格式
* 图像颜色丰富而且文件比较大的（40KB - 200KB）优先考虑 JPEG 格式
* 条件允许的，优先考虑 WebP 代替 PNG 和 JPEG 格式

### 图片大小

#### 全国网速现状

##### 固定网络

据文章 [《2015年Q3中国宽带速率状况报告》](http://www.199it.com/archives/399272.html)，2015第三季全国平均速度整体情况：

![image](http://labs.qiang.it/h5/guide/2015q3speed.jpg)



中国固定宽带互联网网络平均网络下载速率达到7.90 Mbit/s，用户进行网页浏览的平均首屏呈现时间为2.18s，平均视频下载速率为6.41Mbit/s

##### 移动网络


3G网络传输速率理论峰值在3.5Mbps，4G网络传输速率理论上可达到20Mbps，最高可以达到100Mbps。根据 `128KB/s=128×8(Kb/s)=1024Kb/s=1Mb/s` 的转换来算，3G网络的理论传输速率可达到450KB/s，4G网络的理论传输速率可达到 2.5MB/s ~ 12.5MB/s

受用户计算机性能、网络设备质量、资源使用情况、网络高峰期、网站服务能力、线路衰耗、信号衰减等多因素影响，3G和4G的实际平均传输速率约为：

* 3G：最高值100KB/s，平均值40～50KB/s
* 4G：最高值2.75MB/s，平均500～1000KB/s



#### 3G/4G用户占比


2015年8月移动宽带（3G/4G）用户占比各省分布情况：

![image](http://labs.qiang.it/h5/guide/Img421935146.jpg)

据文章 [《工信部：2015年7月底中国4G用户累计超过2.5亿》](http://www.199it.com/archives/393838.html) 介绍：

> 截至2015年7月底，中国4G用户累计超过2.5亿（全球LTE用户超过7.9亿，全球TD-LTE用户超过2.78亿），已建设4G基站超过153万个，其中完成TD-LTE基站建设超过100万个，多载波聚合等TD-LTE演进技术逐步商用，4G智能手机已经占到国内智能手机市场的82.7%。



#### 团队约定

中国普通家庭的宽带基本能达到8Mbps，实际速率大约为500---900KB/s，全国3G/4G用户占有比超过了50%，为了保证图片能更好地加载展示给用户看，团队约定：

**PC平台单张的图片的大小不应大于 200KB。**

**移动平台单张的图片的大小不应大于 100KB。**

*（图片的大小约定标准随全国网速的改变而改变）*


### 图片质量

* 上线的图片都应该经过压缩处理，压缩后的图片不应该出现肉眼可感知的失真区域
* 60质量的JPEG格式图片与质量大于60的相比，肉眼已看不出明显的区别，因此保存 JPEG 图的时候，质量一般控制在60，若保真度要求高的图片可适量提高到 80，图片大小控制在 200KB 以内

### 图片引入

测试内容图应该写上表明图片尺寸的占位图，可以用线上占位图生成服务，如：

```
http://placeholder.qiniudn.com/300x200
```

![image](http://placeholder.qiniudn.com/300x200)



HTML 中图片引入不需添加 width、height 属性，alt 属性应该写上

*推荐：*

```
<img src="" alt="" >
```

*不推荐：*

```
<img src="" width="" height="" >
```

CSS 中图片引入不需要引号

```
.jdc {
    background-image: url(icon.png);
}
```

### CSS Sprites VS Data URIs

#### CSS Sprites特点

* 减少请求数
* 加速图片的显示
* 维护更新成本大
* 更多的内存消耗，特别是大体积或有过多空白的 Sprites 图 
* 图片渗漏，相邻的不需展示的图片有可能出现在展示元素中，特别是在高清设备移动设备上

#### Data URIs（base64编码）

* 减少请求数
* 转换文件体积大，大约比原始的二进制大33%
* IE6 / IE7 不支持
* 图片显示相对较慢，需要更多的CPU消耗



更多关于 CSS Sprites 和 Data URIs 可以阅读：

[《When to Base64 Encode Images (and When Not To)》](http://davidbcalhoun.com/2011/when-to-base64-encode-images-and-when-not-to/)

[《Data URI 最佳实践》](http://madscript.com/html5/datauri-best-practice/)

[《Data URI&MHTML: 用还是不用？》](http://www.99css.com/492/)

[CSS Sprites vs. Data URIs: Which is Faster on Mobile?](http://www.mobify.com/blog/css-sprites-vs-data-uris-which-is-faster-on-mobile/)

#### 团队约定

##### CSS Sprites 使用建议

* 适合使用频率高更新频率低的小图标
* 尽量不留太多的空白
* 体积较大的图片不合并
* 确保要合并的小图坐标数值和合并后的 Sprites 图尺寸均为偶数


##### Data URIs（base64编码）使用建议

* 合适更新频率高的小图片，如某些具备自定义功能的标题icon等
* 转换成 Base64 编码的图片应小于 2KB
* 移动端不使用 Base64 编码 
* 要兼容 IE6/IE7 的不使用














