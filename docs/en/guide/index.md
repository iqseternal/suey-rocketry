---
title: '指引'
---
什么是 VitePress？
警告

VitePress 是早期的 WIP！目前的重点首先是让 Vite 稳定和功能完善。目前，不推荐将其用于任何正式的场景。

VitePress 是 VuePress 小兄弟, 基于 Vite构建。

#Motivation
我们喜爱VuePress，但是它是基于 Webpack 构建。为了一个只有几个简单页面的简单文档站点启动开发服务器所需的时间正变得让人难以忍受。即使是HMR热更新也需要几秒钟的时间才能在浏览器中显示出来。

作为参考，Composition API RFC repo仅只有两个页面，但是它花费了 4 秒来启动服务器，并且任何修改都需要将近 2 秒钟的时间才能在浏览器中显示出来。

从根本上说，这是因为 VuePress 是 webpack 的一个应用程序。即使只有两页，这也是一个完整的 webpack 项目(包括所有的主题源文件)正在编译。当项目有很多页面时，情况会变得更糟：每个页面都必须先完全编译，然后服务器才能显示内容！

顺便说一句，Vite 很好地解决了这些问题：几乎立即启动服务器，只按需编译正在服务的页面，以及闪电般的快速 hmr。另外，随着时间的推移，我在 VuePress 中注意到了一些额外的设计问题，但是由于重构的数量，我从来没有时间去修复它。

现在，使用 Vite 和 Vue 3，是时候重新考虑“Vue 驱动的静态站点生成器”到底能是什么了。

#对 VuePress 的改进
从 VuePress 改进的地方有以下几点：

#使用 Vue 3
利用 Vue 3 改进的模板静态分析，它能尽可能的压缩静态内容。静态内容是以字符串的形式发送，而不是通过 JavaScript 渲染函数代码。因此 JS 负载更容易解析，hydration 也变得更快。

主要，在优化应用的同时，VitePress 仍然允许用户在 Markdown 内容中自由的混合 Vue 组件。编译器将自动的为你分离动态/静态内容，你不需要考虑这个。

#It Uses Vite Under The Hood
开发服务器启动更快
热更新更快
构建更快(内部使用 Rollup)
#Lighter Page Weight
Vue 3 tree-shaking + Rollup code splitting
不为每个请求发送元数据。这些 Page Weight 将从总页数中分离出来。每次请求只发送当前页面的元数据。客户端导航栏会一起获取新页面的组件和元数据。
不要使用 vue-router，因为 VitePress 的需求非常简单和具体，使用了一个简单的自定义路由器(小于 200 LOC)替代。
(WIP) i18n locale 数据也是按需获取。
#其他不同
VitePress 更多的是主观性的并且配置很少：VitePress 的目标是减少当前 VuePress 的复杂性，并回归到它的简约主义根源。

VitePress 是面向未来的：VitePress 仅适用于支持原生 ES 模块导入的浏览器，鼓励使用没有经过转换的原生 JavaScript 以及主题化中使用 CSS 变量。

#这会成为未来的下一个 VuePress 吗？
可能不是。它目前以不同的名称命名，这样我们就不会过度地致力于与当前 VuePress 生态系统(主要是主题和插件)的兼容性。我们将看到，在不损害上面列出的设计目标的情况下，我们可以取得多大的进展。但是总的想法是 VitePress 将有一个非常小的主题 API(更倾向于 JavaScript API 而不是文件布局约定)，而且很可能没有插件(所有定制都是在主题中完成)。
