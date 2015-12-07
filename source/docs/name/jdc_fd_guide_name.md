## 命名规范

由历史原因及个人习惯引起的 DOM 结构、命名不统一，导致不同成员在维护同一页面时，效率低下，迭代、维护成本极高。

### 目录命名

* 项目文件夹：your project name
* 样式文件夹：css
* 脚本文件夹：js
* 样式类图片文件夹：images

### HTML/CSS文件命名

确保命名总是以字母开头而不是数字，且字母一律小写，以下划线连接

	<!-- HTML -->
	jdc.html
	jdc_list.html
	jdc_detail.html

	<!-- SASS -->
	jdc.scss
	jdc_list.scss
	jdc_detail.scss
	
### 图片命名

#### 命名顺序

图片命名建议以以下顺序命名：

**图片业务(可选) +（mod_) 图片功能类别（必选）+ 图片模块名称（可选) + 图片精度（可选）**

* 图片业务：
	- pp_：拍拍
	- wx_：微信
	- sq_：手Q
	- jd_：京东商城
	- ...

* 图片功能类别：

	- mod_：是否公共，可选
	- icon：模块类固化的图标
	- logo：LOGO类
	- spr：单页面各种元素合并集合
	- btn：按钮
	- bg：可平铺或者大背景
	- ...
	
* 图片模块名称：

	- goodslist：商品列表 
	- goodsinfo：商品信息
	- userava	tar：用户头像
	- ...
	
* 图片精度：

	- 普清：@1x
	- Retina：@2x | @3x
	- ...

	
如下面例子：

	公共模块：
	wx_mod_btn_goodlist@2x.png
	wx_mod_btn_goodlist.png
	mod_btn_goodlist.png 
	
	非公共模块：
	wx_btn_goodlist@2x.png
	wx_btn_goodlist.png
	btn_goodlist.png

#### 交叉业务协作

业务交叉协作的时候，为了避免图片命名冲突，建议图片名加上业务和模块前辍，如拍拍侧和手Q侧的业务交叉合作时，侧栏导航icon雪碧图命名：

	推荐：
	pp_icon_mod_sidenav.png

	不推荐：
	icon_mod_sidenav.png

处理高清图片的时候，命名应该加上图片相应的精度说明

	推荐：
	jdc_logo@1x.png
	jdc_logo@2x.png

	不推荐：
	jdc_logo.png
	jdc_logo_retina.png

	
### ClassName命名

ClassName的命名应该尽量精短、明确，必须以**字母开头命名**，且**全部字母为小写**，单词之间**统一使用下划线** “_” 连接

#### 命名原则 

基于姓氏命名法（继承 + 外来），如下图：

![enter image description here](http://labs.qiang.it/ppguide/img/standard_jiapu.png)

祖先模块不能出现下划线，除了是全站公用模块，如 `mod_` 系列的命名：

**推荐：**

	<div class="modulename">
		<div class="modulename_info">
			<div class="modulename_son"></div>
			<div class="modulename_son"></div>
			...
		</div>
	</div>
	
	<!-- 这个是全站公用模块，祖先模块允许直接出现下划线 -->
	<div class="mod_info">
		<div class="mod_info_son"></div>
		<div class="mod_info_son"></div>
		...		
	</div>
	
**不推荐：**

	<div class="modulename_info">
		<div class="modulename_info_son"></div>
		<div class="modulename_info_son"></div>
		...		
	</div>	

在子孙模块数量可预测的情况下，严格继承祖先模块的命名前缀

	<div class="modulename">
    	<div class="modulename_cover"></div>
    	<div class="modulename_info"></div>
	</div>
		
当子孙模块超过4级或以上的时候，可以考虑在祖先模块内具有识辨性的独立缩写作为新的子孙模块

**推荐：**

	<div class="modulename">
    	<div class="modulename_cover"></div>
    	<div class="modulename_info">
        	<div class="modulename_info_user">
        		<div class="modulename_info_user_img">
        			<img src="" alt="">
        			<!-- 这个时候 jiui 为 modulename_info_user_img 首字母缩写-->
        			<div class="jiui_tit"></div>
        			<div class="jiui_txt"></div>
        			...
        		</div>
        	</div>
        	<div class="modulename_info_list"></div>
    	</div>
	</div>
	
**不推荐：**

	<div class="modulename">
    	<div class="modulename_cover"></div>
    	<div class="modulename_info">
        	<div class="modulename_info_user">
        		<div class="modulename_info_user_img">
        			<img src="" alt="">
        			<div class="modulename_info_user_img_tit"></div>
        			<div class="modulename_info_user_img_txt"></div>
        			...
        		</div>
        	</div>
        	<div class="modulename_info_list"></div>
    	</div>
	</div>
	
#### 模块命名

全站公共模块：以 `mod_` 开头

	<div class="mod_yours"></div>

业务公共模块：以 `业务名_mod_` 开头

	<div class="paipai_mod_yours"></div>

#### 常用命名推荐

**注意**：ad,baaner 等有机会和广告挂勾的字眠不建议直接用来做 ClassName，因为有些浏览器插件（Chrome的广告拦截插件等）会直接过滤这些类名，因此 

`<div class="ad"></div>` 这种情况不应该出现

另外，**敏感不和谐字眼**也不应该出现，如 

	<div class="fuck"></div>
	<div class="jer"></div>
	<div class="sm"></div>
	<div class="isis"></div> 
	<div class="KMT"></div> 
	...

| ClassName | 含义 |
| ------------ | ------------- | 
| about | 关于 |
| account | 账户 |
| arrow | 箭头图标 |
| article | 文章 |
| aside | 边栏 |
| audio | 音频 |
| avatar | 头像 |
| bg,background | 背景 |
| bar | 栏（工具类）|
| branding | 品牌化 |
| crumb,breadcrumbs | 面包屑 |
| btn,button | 按钮 | 
| caption | 标题，说明 |
| category | 分类 |
| chart | 图表 |
| clearfix | 清除浮动 |
| close | 关闭 |
| col,column | 列 |
| comment | 评论 | 
| community | 社区 |
| container | 容器 |
| content | 内容 | 
| copyright | 版权 | 
| current | 当前态，选中态 | 
| default | 默认 | 
| description | 描述 | 
| details | 细节 | 
| disabled | 不可用 | 
| entry | 文章，博文 | 
| error | 错误 | 
| even | 偶数，常用于多行列表或表格中 | 
| fail | 失败（提示） | 
| feature | 专题 | 
| fewer | 收起 | 
| field | 用于表单的输入区域 | 
| figure | 图 | 
| filter | 筛选 | 
| first | 第一个，常用于列表中 | 
| footer | 页脚 | 
| forum | 论坛 | 
| gallery | 画廊 | 
| group | 模块，清除浮动 | 
| header | 页头 | 
| help | 帮助 | 
| hide | 隐藏 | 
| hightlight | 高亮 | 
| home | 主页 | 
| icon | 图标 | 
| info,information | 信息 | 
| last | 最后一个，常用于列表中 | 
| links | 链接 | 
| login | 登录 | 
| logout | 退出 | 
| logo | 标志 | 
| main | 主体 | 
| menu | 菜单 | 
| meta | 作者、更新时间等信息栏，一般位于标题之下 | 
| module | 模块 | 
| more | 更多（展开） | 
| msg，message | 消息 | 
| nav,navigation | 导航 | 
| next | 下一页 | 
| nub | 小块 | 
| odd | 奇数，常用于多行列表或表格中 | 
| off | 鼠标离开 | 
| on | 鼠标移过 | 
| output | 输出 | 
| pagination | 分页 | 
| pop,popup | 弹窗 | 
| preview | 预览 | 
| previous | 上一页 | 
| primary | 主要 | 
| progress | 进度条 | 
| promotion | 促销 | 
| rcommd,recommendations | 推荐 | 
| reg,register | 注册 | 
| save | 保存 | 
| search | 搜索 | 
| secondary | 次要 | 
| section | 区块 | 
| selected | 已选 | 
| share | 分享 | 
| show | 显示 | 
| sidebar | 边栏，侧栏 | 
| slide | 幻灯片，图片切换 | 
| sort | 排序 | 
| sub | 次级的，子级的 | 
| submit | 提交 | 
| subscribe | 订阅 | 
| subtitle | 副标题 | 
| success | 成功（提示） | 
| summary | 摘要 | 
| tab | 标签页 | 
| table | 表格 | 
| txt,text | 文本 | 
| thumbnail | 缩略图 | 
| time | 时间 | 
| tips | 提示 | 
| title | 标题 | 
| video | 视频 | 
| wrap | 容器，包，一般用于最外层 | 
| wrapper | 容器，包，一般用于最外层 |  


















