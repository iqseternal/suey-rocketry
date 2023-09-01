# 快速开始

本节将介绍如何在您的项目中使用 Rocketry.

## 用法

### 导入

在这里，我不推荐使用全局导入，推荐采用局部导入。

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
    <RMacDockerMain> D </RMacDockerMain>

    <RMacDockerItem src="https://tse4-mm.cn.bing.net/th/id/OIP-C.wPY2_PJMnXtLAUKPUAlwlAAAAA?w=152&h=140&c=7&r=0&o=5&pid=1.7"></RMacDockerItem>
    <RMacDockerItem src="https://tse3-mm.cn.bing.net/th/id/OIP-C.Xhuf16W9uzvkQPj6NhDDRAAAAA?w=130&h=130&c=7&r=0&o=5&pid=1.7"></RMacDockerItem>
    <RMacDockerItem src="https://tse1-mm.cn.bing.net/th/id/OIP-C.hlviKjBLfMuQ9Fr7J2cWzwAAAA?w=140&h=150&c=7&r=0&o=5&pid=1.7"></RMacDockerItem>
    <RMacDockerItem src="https://tse2-mm.cn.bing.net/th/id/OIP-C.HVYqci_hok3widKduq_EawAAAA?w=141&h=150&c=7&r=0&o=5&pid=1.7"></RMacDockerItem>
    <RMacDockerItem src="https://tse3-mm.cn.bing.net/th/id/OIP-C.HKngSDiahYfSyociRrS4KwAAAA?w=143&h=150&c=7&r=0&o=5&pid=1.7"></RMacDockerItem>

    <RMacDockerControl>
      <RMacDockerItem src="https://tse2-mm.cn.bing.net/th/id/OIP-C.bkdDrOZ9W9bnZH62pIiZqgAAAA?w=150&h=150&c=7&r=0&o=5&pid=1.7"></RMacDockerItem>
    </RMacDockerControl>
  </RMacDocker>
</template>

<script lang="ts" setup>
import { RMacDocker, RMacDockerItem, RMacDockerControl, RMacDockerMain } from '@suey/rocketry';
</script>
```

你会得到像下面的效果

<img src="/RMacDocker_1.jpg" style="width: 100%;" />

## 开始吧

你已经成功的构建处理你的第一个程序，接下来查看[组件](/zh/components/docker/RMacDocker.md)文档进行使用吧~
