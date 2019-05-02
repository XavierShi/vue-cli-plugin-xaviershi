# 说明

此 vue-cli3 插件在初始化完普通的 vue 项目之后安装，用于对初始化的项目进行组织目录、依赖包、配置等做一些更改，模板来源于[wangyupo/vue-vuex-router](https://github.com/wangyupo/vue-vuex-router),但是基于此模板做了一些小的修改。

1. 去掉 node-sass 和 sass-loader 改为加入 less 和 less-loader 支持并且默认是使用 stylus

# 使用方法

`vue create test`  
 `Manually select features`(手动选择特性)  
 不需要选择装 vuex 和 vue-router，因为插件自带 vuex 和 vue-router 并且相应的组织结构也有变化。  
 个人推荐使用`ESLint + Standard config`规范
`cd test`  
`vue add @xaviershi/xaviershi-phone`

# 资料

关于插件模板具体使用说明、推荐规范、常见问题 [参考 ReadMe](https://github.com/wangyupo/vue-vuex-router/blob/master/README.md?1556770278320)
