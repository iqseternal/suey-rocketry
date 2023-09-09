<h1 align="center">@suey/rocketry</h1>
<h2 align="center"><a href="https://iqseternal.github.io/suey-rocketry/" target="_blank">Document</a></h2>

# Install

## Compatibility

Rocketry's output file is used to build your own application in the framework, and this package uses a lot of new syntax. If you want to be compatible with more browsers, please add Babel and Polyfill yourself, and ensure that the build tool helps you to be compatible with lower versions of browsers.

| ![IE](https://cdn.jsdelivr.net/npm/@browser-logos/edge/edge_32x32.png) | ![Firefox](https://cdn.jsdelivr.net/npm/@browser-logos/firefox/firefox_32x32.png) | ![Chrome](https://cdn.jsdelivr.net/npm/@browser-logos/chrome/chrome_32x32.png) | ![Safari](https://cdn.jsdelivr.net/npm/@browser-logos/safari/safari_32x32.png) |
| ---------------------------------------------------------------------- | --------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| Edge ≥ 79                                                              | Firefox ≥ 78                                                                      | Chrome ≥ 64                                                                    | Safari ≥ 12                                                                    |

## Version

Rocketry is currently a personal component library that handles development iterations.

## Using Package Management Tools

**I recommend using the package management tool (NPM, [YARN])（ https://classic.yarnpkg.com/lang/en/ ）, [PNPM]（ https://pnpm.io/ ））Go install Rocketry**

This way, you can use the build tool [Vite]（ https://vitejs.dev ）And [webpack]（ https://webpack.js.org/ ）Or more.

```shell
# Choose your favorite build tool

# NPM
$ npm install @suey/rocketry --save

# Yarn
$ yarn add @suey/rocketry

# pnpm
$ pnpm install @suey/rocketry
```

If your network environment is not good, it is recommended to use the image source [cnpm]（ https://github.com/cnpm/cnpm ）Or [Alibaba]（ https://registry.npmmirror.com/ ）.

<hr />

The component is ready for normal use, and currently only one usage example is provided

## Example

```typescript
// main.ts
import '@suey/rocketry/index.css';
```



```vue
<template>
  <RMacDocker>
    <template #main>Dfffff</template>

    <template #default>
      <template v-for="(src, index) in list" :key="index"><RMacDockerItem :src="src" /></template>
    </template>

    <template #control>
      <RMacDockerItem src="https://tse3-mm.cn.bing.net/th/id/OIP-C.HKngSDiahYfSyociRrS4KwAAAA?w=143&h=150&c=7&r=0&o=5&pid=1.7" />
    </template>
  </RMacDocker>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import { RMacDocker, RMacDockerItem } from '@suey/rocketry';

const list = [
  'https://tse4-mm.cn.bing.net/th/id/OIP-C.wPY2_PJMnXtLAUKPUAlwlAAAAA?w=152&h=140&c=7&r=0&o=5&pid=1.7',
  'https://tse3-mm.cn.bing.net/th/id/OIP-C.Xhuf16W9uzvkQPj6NhDDRAAAAA?w=130&h=130&c=7&r=0&o=5&pid=1.7',
  'https://tse1-mm.cn.bing.net/th/id/OIP-C.hlviKjBLfMuQ9Fr7J2cWzwAAAA?w=140&h=150&c=7&r=0&o=5&pid=1.7',
  'https://tse1-mm.cn.bing.net/th/id/OIP-C.hlviKjBLfMuQ9Fr7J2cWzwAAAA?w=140&h=150&c=7&r=0&o=5&pid=1.7',
  'https://tse1-mm.cn.bing.net/th/id/OIP-C.hlviKjBLfMuQ9Fr7J2cWzwAAAA?w=140&h=150&c=7&r=0&o=5&pid=1.7',
];
</script>
```
