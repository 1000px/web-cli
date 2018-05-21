Vue开发项目的脚手架
====
base基础架构1.0
----

## 目的
> 方便前端开发人员使用vue2.0进行项目开发。
> 规范项目开发架构
> 统一编码风格
> 规范前端开发流程
> 规范项目目录结构
> 简化项目构建流程
> 简化项目初始化过程

## 设计思路
* Web项目，开始开发阶段，前端开发人员需要进行技术选型，合适的mvc框架，合适的ui解决方案，还有打包压缩等工具，此间还涉及JavaScript的版本转换(es6转es5)、scss转css等，将这一切配置放到vue-base的脚手架中，通过webpack这款工具整合起来，简化项目配置和初始化工作。
* 合理的目录结构，合理的代码结构，可以减少开发过程中可能出现的不规范，增加代码可读性，规范多人协作开发过程中可能遇到的难点。
* 采用前后端分离开发模式，通过restful接口规范统一ajax数据结构，使用rap数据服务进行前后端并行开发，实现项目敏捷开发迭代。

## 脚手架目录
| 目录名称 | 作用|备注|
| ---- | ---- | -----|
|config|webpack配置文件||
|build|webpack脚本文件|可运行相应脚本进行打包、启动开发服务器等操作|
|src| 项目开发源码|业务逻辑在此进行开发|
|src/assets|样式、图片等静态文件|全局样式、字体图标库等|
|src/common|公共服务| 对ajax等公共服务进行二次封装与拦截处理|
|src/components|vue公共组件|页面之间重复使用的组件|
|src/config|公共配置|目前项目公共配置放到根目录static目录下，此处备用|
|src/lang|语言包|前端页面中可进行语言更换的所有文本键值对|
|src/router|vue路由|页面跳转逻辑|
|src/service|数据服务|通过axios提供的ajax获取数据服务|
|src/store|全局状态管理|vuex|
|src/utils|工具类函数|项目全局可通用的工具类函数|
|src/view|页面视图|根据实际项目需要进行开发的页面逻辑|
|src/App.vue|vue组件入口|可进行布局、路由入口等配置|
|src/main.js|项目入口文件|加载初始化数据、加载依赖等|
|static|静态引入|不参与打包的第三方插件，通过script标签引入入口index.html中|
|test|单元测试相关||
|index.html|html入口文件|webpack打包模板|
|package.json|项目配置文件|npm安装依赖时会根据这个文件进行查找需要的依赖|
|.babelrc|es版本转换配置||
|.editorconfig|编辑器配置||
|.eslintignore|eslint忽略文件或目录||
|.eslintrc.js|eslint配置||
|.gitignore|git忽略的文件或目录||
|.postcssrc.js|css自动补全配置||

*注意，项目全局，比如后端接口地址等信息，在static/global-config.json中配置*
*/build /config /.babelrc /.editorconfig /.eslintignore /.eslintrc.js /.gitignore /.postcssrc.js /package.json
以上目录和文件属于项目配置文件，不需要改动*

## 常用命令
1. 获取源码
确保PC上已有git
> git clone '地址后期提供'

2. 安装cnpm
有些依赖的仓库地址在国外，网速会比较慢，建议使用淘宝镜像
> npm install -g cnpm --registry=https://registry.npm.taobao.org

3. 安装依赖
确保PC上已经安装node.js
> cd '项目根目录'
> npm/cnpm install

4. 启动本地服务
运行如下命令可以在当前目录启用一个node.js服务器，开发人员在此服务中进行业务开发，实时预览浏览器中页面展现效果。
> npm/cnpm run dev

5. 打包源码
迭代结束，需要发布到stage环境，此时运行如下命令，项目最终输出的静态文件在dist目录中
> npm/cnpm run build

## 常见问题
* 为何需要配置global-config.json文件？
> 很多项目需要到客户现场搭建服务环境，代码在到达客户之前无法提前知道一些服务地址，这些地址需要写到一个独立于开发语言之外的文件里面，方便现场部署人员根据实际环境改动。
* 为何要引入eslint？
> 编码规范是减少人为失误的有效手段，通过eslint这种工具及时纠错，提高代码质量。
* 待续

## 参考资料
1. [Vue2.*] [https://cn.vuejs.org/v2/guide/]
2. [elementUI][http://element-cn.eleme.io/#/zh-CN]
3. [SCSS][https://www.sass.hk/]
4. [base-vue][wiki地址后期提供]
