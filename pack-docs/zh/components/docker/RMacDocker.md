# RMacDocker

类似Mac桌面效果的容器

## 容器

Mac容器将为你提供一个类似于Mac的布局效果。你只需要关心主视窗内容的书写即可。

就像这样, 你可以自行定义`RMacDockerItem`, 并且可以自定义一些样式参数。

<preview path="../../../examples/docker/RMacDocker.vue" />


## 插槽

| 插槽名字 | 描述                      | 默认值 | 必须 |
| :------- | ------------------------- | ------ | ---- |
| main     | 主体内容展示              | —      | No   |
| default  | 默认插槽会展示在底部 Item | —      | No   |
| control  | 底部控制 Item 内容展示    | —      | No   |

## RMacDocker 参数

| 参数名              | 描述                                       | 类型                     | 默认值 | 必须 |
| ------------------- | ------------------------------------------ | ------------------------ | ------ | ---- |
| *driverNums*        | 底部Item数量超过改数会自动生成Control项    | `number`                 | 4      | No   |
| *driverEffectWidth* | 曲线函数影响的横向距离                     | `number`                 | 400    | No   |
| *driverMaxI*        | 曲线函数影响的纵向比例值(基于 SIN 函数)    | `number`                 | 2      | No   |
| *autoDriver*        | 当没有control插槽是否自动设置Control项目。 | `booleab`                | true   | No   |
| *autoHidden*        | 是否自动影藏底部导航项                     | `boolean`                | false  | No   |
| *autoHidenTimer*    | 自动影藏的时间, ms                         | `number`                 | 3000   | No   |
| *cssVars*           | 为组件设置CSS Var                          | `Record<string, string>` | {}     | No   |

## RMacDockerItem 参数

| 参数名 | 描述                     | 类型     | 默认值 | 必须 |
| ------ | ------------------------ | -------- | ------ | ---- |
| *src*  | 底部Item项的图片链接的值 | `string` | —      | Yes  |
| text   | 底部Item显示的文字值     | `string` | ‘’     | No   |

## CSS 变量

| 变量名                               | 描述                                                         | 默认值                                                       |
| ------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| --r-mac-docker-main-background       | 整个视窗的背景图                                             | url(<a target="_blank" href='https://images.unsplash.com/photo-1682685797769-481b48222adf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'>...</a>)  //太长了我链接显示 |
| --r-mac-docker-divider-line-style    | 分割线样式，分割内容为普通项和Control项                      | 3px solid rgba(255, 255, 255, .5)                            |
| --r-mac-docker-bottom                | docker对于底部的定位像素值                                   | 40px                                                         |
| --r-mac-docker-box-reflect-distance  | 底部倒影对应的距离                                           | 10px                                                         |
| --r-mac-docker-box-reflect-direction | 底部倒影的方向                                               | below                                                        |
| --r-mac-docker-box-reflect-gradlient | 底部倒影的渐变方式                                           | linear-gradient(bottom, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.05) 100%) |
| --r-mac-docker-padding-lr            | 每一项的左上的圆角属性                                       | 30px                                                         |
| --r-mac-docker-padding-tb            | 每一项的右下的圆角属性                                       | 15px                                                         |
| --r-mac-docker-radius                | docker容器的圆角属性                                         | 35px                                                         |
| --r-mac-docker-bg                    | docker的背景颜色                                             | rgba(255, 255, 255, 1)                                       |
| --r-mac-docker-bg-blur               | docker的背景的模糊值，用于制作毛玻璃效果                     | 64px                                                         |
| --r-mac-docker-hidden-bg             | docker被影藏之后的背景色                                     | linear-gradient(*to* right, blue, red)                       |
| --r-mac-docker-item-size             | 每个单项的默认大小                                           | 45px                                                         |
| --r-mac-docker-item-radius           | 每个单项的圆角属性                                           | 50% 35%                                                      |
| --r-mac-docker-item-padding          | 每个单项的padding，内部边距值                                | 12px                                                         |
| --r-mac-docker-item-margin           | 每个单项左右之间的间距，父容器被flex修饰，值在gap上          | 20px                                                         |
| -r-mac-docker-item-margin-bottom     | 每个单项的底部距离，这个属性会与曲线函数的`driverMaxI`相互作用 | 15px                                                         |

## 导出 Api

| 变量名                 | 描述                      | 类型                               | 批注                                |
| ---------------------- | ------------------------- | ---------------------------------- | ----------------------------------- |
| *rSetMacDockerCssVar*  | 设置CSS变量到Docker上     | `(string) => void`                 | :warning:请在组件已经挂载的时候调用 |
| *rSetMacDockerCssVars* | 设置多个CSS变量到Docker上 | `(Record<string, string>) => void` | :warning:请在组件已经挂载的时候调用 |

:::warning

部分Api需要在Vue的生命周期`onMounted`中使用

:::
