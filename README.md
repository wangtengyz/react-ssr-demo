# 服务端渲染ssr-Demo

# 背景

但是随着时间的变化，人们发现客户端渲染的seo非常差，另外首屏渲染时间也过长。而恰巧这些又是服务端渲染的优势，所以开始尝试在服务端去渲染React或者Vue的组件，最终nuxtjs、nextjs这类的服务端渲染框架应运而生了。

主要目的不是去介绍这些服务端渲染框架，而是介绍其思路，并且在不借助这些服务端渲染框架的情况下，自己动手搭建一个简单的服务端渲染项目，这里我们以React为例

# 同构

简单来说就是“同种结构的不同表现形态”。在这里我们用更通俗的大白话来解释react同构就是：
> 同一份react代码在服务端执行一遍，再在客户端执行一遍。

# 流程步骤

服务端根据React代码渲染成Html -> 将Html发送客户端进行解析 -> 加载Css、Js等资源 -> 执行Js文件，完成hydrate操作 -> 客户端接管页面

# 前后端路由同构

# redux数据的获取和注入

# node层接口代理

# 处理css样式

# react-helmet

react-helmet支持服务端渲染项目title和meta的修改；

# 注意
服务端渲染时用ReactDOM.hydrate()来取代ReactDOM.render()

# 项目启动
## 编译资源
```
yarn build
```

## 启动服务
```
yarn server
```

## 启动mock服务
```
yarn mock
```
