# 快速开始

本节将介绍如何在您的项目中使用 Rocketry.

## 用法

### 按需导入

在这里，我不推荐使用全局导入，推荐采用局部导入。如果你确实喜欢全局组件的使用方式, 本包也提供了全局引入组件的插件式安装.

首先你需要导入组件所需要的样式。

```typescript
import { createApp } from 'vue'
import router from './router';
import App from './App.vue';

// 导入样式文件
import '@suey/rocktry/index.css';

;(async () => {
  const app = createApp(App);

  router.isReady().then(() => {
    app.mount('#app');
  });
})();
```

```vue
// xxx.vue
<template>
  <RMacDocker>
    <template #main></template>

    <template #default>
      <template v-for="(src, index) in list" :key="index"><RMacDockerItem :src="src" /></template>
    </template>

    <template #control>
      <RMacDockerItem src="https://tse3-mm.cn.bing.net/th/id/OIP-C.HKngSDiahYfSyociRrS4KwAAAA?w=143&h=150&c=7&r=0&o=5&pid=1.7" />
    </template>
  </RMacDocker>
</template>

<script lang="ts" setup>
import { RMacDocker, RMacDockerItem } from 'packages';
const list = [
  'https://tse4-mm.cn.bing.net/th/id/OIP-C.wPY2_PJMnXtLAUKPUAlwlAAAAA?w=152&h=140&c=7&r=0&o=5&pid=1.7',
  'https://tse3-mm.cn.bing.net/th/id/OIP-C.Xhuf16W9uzvkQPj6NhDDRAAAAA?w=130&h=130&c=7&r=0&o=5&pid=1.7',
  'https://tse1-mm.cn.bing.net/th/id/OIP-C.hlviKjBLfMuQ9Fr7J2cWzwAAAA?w=140&h=150&c=7&r=0&o=5&pid=1.7',
  'https://tse2-mm.cn.bing.net/th/id/OIP-C.bkdDrOZ9W9bnZH62pIiZqgAAAA?w=150&h=150&c=7&r=0&o=5&pid=1.7',
  'https://tse2-mm.cn.bing.net/th/id/OIP-C.HVYqci_hok3widKduq_EawAAAA?w=141&h=150&c=7&r=0&o=5&pid=1.7',
  'https://tse4-mm.cn.bing.net/th/id/OIP-C.wPY2_PJMnXtLAUKPUAlwlAAAAA?w=152&h=140&c=7&r=0&o=5&pid=1.7',
  'https://tse4-mm.cn.bing.net/th/id/OIP-C.wPY2_PJMnXtLAUKPUAlwlAAAAA?w=152&h=140&c=7&r=0&o=5&pid=1.7',
  'https://tse4-mm.cn.bing.net/th/id/OIP-C.wPY2_PJMnXtLAUKPUAlwlAAAAA?w=152&h=140&c=7&r=0&o=5&pid=1.7',
  'https://tse4-mm.cn.bing.net/th/id/OIP-C.wPY2_PJMnXtLAUKPUAlwlAAAAA?w=152&h=140&c=7&r=0&o=5&pid=1.7',
];
</script>
```

你会得到像下面的效果

<img src="/RMacDocker_1.jpg" style="width: 100%;" />

### 全局导入

如果你是在是喜欢全局引入注册的方式, 那么你可以修改你的入口文件, 让他像这样：

```typescript
import { createApp } from 'vue'
import router from './router';
import App from './App.vue';

// 导入组件对象
import Rocktry from '@suey/rocktry';

// 导入样式文件
import '@suey/rocktry/index.css';

;(async () => {
  const app = createApp(App);

  // use, 将会为你自动化注册全局组件
  app.use(Rocktry);

  router.isReady().then(() => {
    app.mount('#app');
  });
})();
```
```vue
// xxx.vue
<template>
  <RMacDocker>
    <template #main></template>

    <template #default>
      <template v-for="(src, index) in list" :key="index"><RMacDockerItem :src="src" /></template>
    </template>

    <template #control>
      <RMacDockerItem src="https://tse3-mm.cn.bing.net/th/id/OIP-C.HKngSDiahYfSyociRrS4KwAAAA?w=143&h=150&c=7&r=0&o=5&pid=1.7" />
    </template>
  </RMacDocker>
</template>

<script lang="ts" setup>
// 你的导入将可以忽略
const list = [
  'https://tse4-mm.cn.bing.net/th/id/OIP-C.wPY2_PJMnXtLAUKPUAlwlAAAAA?w=152&h=140&c=7&r=0&o=5&pid=1.7',
  'https://tse3-mm.cn.bing.net/th/id/OIP-C.Xhuf16W9uzvkQPj6NhDDRAAAAA?w=130&h=130&c=7&r=0&o=5&pid=1.7',
  'https://tse1-mm.cn.bing.net/th/id/OIP-C.hlviKjBLfMuQ9Fr7J2cWzwAAAA?w=140&h=150&c=7&r=0&o=5&pid=1.7',
  'https://tse2-mm.cn.bing.net/th/id/OIP-C.bkdDrOZ9W9bnZH62pIiZqgAAAA?w=150&h=150&c=7&r=0&o=5&pid=1.7',
];
</script>
```


## 开始吧

你已经成功的构建处理你的第一个程序，接下来查看[组件](/zh/components/docker/RMacDocker.md)文档进行使用吧~
