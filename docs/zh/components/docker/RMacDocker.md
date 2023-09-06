# RMacDocker

## 容器

Mac容器将为你提供一个类似于Mac的布局效果。你只需要关心主视窗内容的书写即可。

就像这样, 你可以自行定义`RMacDockerItem`, 并且可以自定义一些样式参数。

<preview path="../../../examples/docker/RMacDocker.vue" />

## 主要容器

主要容器将在展示页面时为你预置一个展示自定义内容的插槽行为，你的内容将在指定位置展示。但是插槽已经被隐藏了，建议使用```RMacDockerMain```作为子组件放入。

```vue
<template>
  <RMacDocker>
    <RMacDockerMain><RouterView /></RMacDockerMain>
  </RMacDocker>
</template>

<script lang="ts" setup>
import { RMacDocker, RMacDockerMain } from 'packages';
</script>
```

你的内容将会在 `RMacDocker` 的主要位置显示。

## 容器项

容器项则会像应用程序图标一样，放到屏幕的下方，你可以随意传入，当传入的 Item 数量大于了特定值的时候，会自动地产生```RMacDockerControl```来控制您的应用程序。

## 容器控制项

Vertical Menu with sub-menus.

demo You can use the el-menu-item-group component to create a menu group, and the name of the group is determined by the title prop or a named slot.

menu/vertical

## Collapse

Vertical Menu could be collapsed.

demo

menu/collapse



## Menu Attributes

| Name                    | Description                                                                                                                                                           | Type    | Accepted Values       | Default  |
| ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- | --------------------- | -------- |
| mode                    | menu display mode                                                                                                                                                     | string  | horizontal / vertical | vertical |
| collapse                | whether the menu is collapsed (available only in vertical mode)                                                                                                       | boolean | —                     | false    |
| ellipsis                | whether the menu is ellipsis (available only in horizontal mode)                                                                                                      | boolean | —                     | true     |
| background-color        | background color of Menu (hex format) (deprecated, use `--bg-color` instead)                                                                                          | string  | —                     | #ffffff  |
| text-color              | text color of Menu (hex format) (deprecated, use `--text-color` instead)                                                                                              | string  | —                     | #303133  |
| active-text-color       | text color of currently active menu item (hex format) (deprecated, use `--active-color` instead)                                                                      | string  | —                     | #409EFF  |
| default-active          | index of active menu on page load                                                                                                                                     | string  | —                     | —        |
| default-openeds         | array that contains indexes of currently active sub-menus                                                                                                             | Array   | —                     | —        |
| unique-opened           | whether only one sub-menu can be active                                                                                                                               | boolean | —                     | false    |
| menu-trigger            | how sub-menus are triggered, only works when `mode` is 'horizontal'                                                                                                   | string  | hover / click         | hover    |
| router                  | whether `vue-router` mode is activated. If true, index will be used as 'path' to activate the route action. Use with `default-active` to set the active item on load. | boolean | —                     | false    |
| collapse-transition     | whether to enable the collapse transition                                                                                                                             | boolean | —                     | true     |
| popper-effect ^(2.2.26) | Tooltip theme, built-in theme: `dark` / `light` when menu is collapsed                                                                                                | string  | dark / light          | dark     |

## Menu Methods

| Methods Name | Description               | Parameters                            |
| ------------ | ------------------------- | ------------------------------------- |
| open         | open a specific sub-menu  | index: index of the sub-menu to open  |
| close        | close a specific sub-menu | index: index of the sub-menu to close |

## Menu Events

| Name   | Description                               | Parameters                                                                                                                                                                 |
| ------ | ----------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| select | callback function when menu is activated  | index: index of activated menu, indexPath: index path of activated menu, item: the selected menu item, routeResult: result returned by `vue-router` if `router` is enabled |
| open   | callback function when sub-menu expands   | index: index of expanded sub-menu, indexPath: index path of expanded sub-menu                                                                                              |
| close  | callback function when sub-menu collapses | index: index of collapsed sub-menu, indexPath: index path of collapsed sub-menu                                                                                            |

## Menu Slots

| Name | Description               | Subtags                               |
| ---- | ------------------------- | ------------------------------------- |
| —    | customize default content | SubMenu / Menu-Item / Menu-Item-Group |

## SubMenu Attributes

| Name                              | Description                                                                                                                                   | Type                  | Accepted Values | Default                                         |
| --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- | --------------- | ----------------------------------------------- |
| index                             | unique identification                                                                                                                         | string                | —               | —                                               |
| popper-class                      | custom class name for the popup menu                                                                                                          | string                | —               | —                                               |
| show-timeout                      | timeout before showing a sub-menu                                                                                                             | number                | —               | 300                                             |
| hide-timeout                      | timeout before hiding a sub-menu                                                                                                              | number                | —               | 300                                             |
| disabled                          | whether the sub-menu is disabled                                                                                                              | boolean               | —               | false                                           |
| popper-append-to-body(deprecated) | whether to append the popup menu to body. If the positioning of the menu is wrong, you can try setting this prop                              | boolean               | —               | level one SubMenu: true / other SubMenus: false |
| teleported                        | whether popup menu is teleported to the body                                                                                                  | boolean               | —               | level one SubMenu: true / other SubMenus: false |
| popper-offset                     | offset of the popper                                                                                                                          | number                | —               | 6                                               |
| expand-close-icon                 | Icon when menu are expanded and submenu are closed, `expand-close-icon` and `expand-open-icon` need to be passed together to take effect      | `string \| Component` | —               | —                                               |
| expand-open-icon                  | Icon when menu are expanded and submenu are opened, `expand-open-icon` and `expand-close-icon` need to be passed together to take effect      | `string \| Component` | —               | —                                               |
| collapse-close-icon               | Icon when menu are collapsed and submenu are closed, `collapse-close-icon` and `collapse-open-icon` need to be passed together to take effect | `string \| Component` | —               | —                                               |
| collapse-open-icon                | Icon when menu are collapsed and submenu are opened, `collapse-open-icon` and `collapse-close-icon` need to be passed together to take effect | `string \| Component` | —               | —                                               |

## SubMenu Slots

| Name  | Description               | Subtags                               |
| ----- | ------------------------- | ------------------------------------- |
| —     | customize default content | SubMenu / Menu-Item / Menu-Item-Group |
| title | customize title content   | —                                     |

## Menu-Item Attributes

| Name     | Description           | Type        | Accepted Values | Default |
| -------- | --------------------- | ----------- | --------------- | ------- |
| index    | unique identification | string/null | —               | null    |
| route    | Vue Router object     | object      | —               | —       |
| disabled | whether disabled      | boolean     | —               | false   |

## Menu-Item Events

| Name  | Description                                 | Parameters             |
| ----- | ------------------------------------------- | ---------------------- |
| click | callback function when menu-item is clicked | el: menu-item instance |

## Menu-Item Slots

| Name  | Description               |
| ----- | ------------------------- |
| —     | customize default content |
| title | customize title content   |

## Menu-Item-Group Attributes

| Name  | Description | Type   | Accepted Values | Default |
| ----- | ----------- | ------ | --------------- | ------- |
| title | group title | string | —               | —       |

## Menu-Item-Group Slots

| Name  | Description               | Subtags   |
| ----- | ------------------------- | --------- |
| —     | customize default content | Menu-Item |
| title | customize group title     | —         |
