title: 贡献
---
## 完善

[凹凸实验室](http://aotu.io) 的宗旨是 `面向开放 - Open Oriented`，所以十分欢迎大家一起参与完善我们的`全栈MAC装机指南`。本文档将帮助大家了解参与的具体过程。

### 开始之前

本指南使用[hexo](https://hexo.io)作为静态站点引擎，请先安装hexo的本地环境。

``` bash
npm i -g hexo-cli
```

### 如何做？

1. Fork 源码[o2team/mac].
2. 克隆Fork后的仓库至你的电脑，安装依赖包。

    {% code %}
    $ git clone https://github.com/<username>/mac.git
    $ cd mac
    $ npm install
    {% endcode %}

3. 创建一个特性分支.

    {% code %}
    $ git checkout -b new_feature
    {% endcode %}

4. 启动hexo服务，预览文档

    ``` bash
    hexo s -watch
    ```

    关于hexo更多的用法，请参考hexo官网。
   
5. 用你喜爱的编辑器在本地电脑进行文档的修改.
6. 提交分支:

    {% code %}
    $ git push origin new_feature
    {% endcode %}
    
7. 创建PR（pull request） 并描述具体的改动.


### 注意事项

- 别修改 `package.json` 中的版本号.
- 我们在收到PR时会第一时间审核并Merge你的改动，请确保改动的地方不存在排版等问题。


## 问题反馈

在使用`全栈MAC装机指南`过程中碰到任何问题，可以到 [GitHub](https://github.com/o2team/mac/issues) 上留言提问。

[o2team/mac]: https://github.com/o2team/mac

## 贡献者

排名不分先后。

- [mamboer](https://github.com/mamboer)
- [cnt1992](https://github.com/cnt1992)
