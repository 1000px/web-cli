# web-cli
web ui front base cli webpack
## 项目说明
...

## 获取源码
git clone ...

## 安装依赖
terminal or cmd 进入项目根目录，执行 npm/cnpm install

## 运行项目并开发
npm/cnpm run dev

## 打包压缩源码
npm/cnpm run build
最终产出的代码在项目根目录下的dist文件夹中

## 项目结构说明

* /build /config /.babelrc /.editorconfig /.eslintignore /.eslintrc.js /.gitignore /.postcssrc.js /package.json
以上目录和文件属于项目配置文件，不需要改动

* /src
src为源码文件，所有开发逻辑在这里完成
1. /src/assets 自定义样式相关代码、图片、字体库等
2. /src/common 项目公共逻辑，目前有ajax相关逻辑与设置
3. /components 公共组件
4. /config 公共配置，目前没用，可扩展
5. /lang 语言包配置，项目中所有用到的文字信息，除存储在数据库中的信息，都需要可配置，方便后期进行语言包替换
6. /router 路由控制
7. /service restful接口，即数据服务，从服务器获取数据，建议根据模块来拆分文件。
8. /store 全局状态数据 vuex
9. /utils 工具类方法
10. /view 页面相关，建议按项目模块分，比如学生管理模块分列表页和详情页
11. /App.vue 项目入口，一级路由入口
12. /main.js 项目入口，初始化项目相关配置和加载依赖逻辑

* /static
static中用于存放一些不参与webpack打包的第三方插件

* /test
单元测试相关

