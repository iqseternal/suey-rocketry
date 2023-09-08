# Quick start

This section will introduce how to use Rocketry in your project

## Usage

### On demand import

I do not recommend using global imports here, but rather local imports. If you really like the way global components are used, this package also provides plug-in installation of global introduced components

Firstly, you need to import the styles required for the components.

```typescript
import { createApp } from 'vue'
import router from './router';
import App from './App.vue';

// Import Style File
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

You will get effects like the following

<img src="/RMacDocker_1.jpg" style="width: 100%;" />

### Global Import

If you prefer the global registration method, you can modify your entry file to look like this:

```typescript
import { createApp } from 'vue'
import router from './router';
import App from './App.vue';

// Import Component Objects
import Rocktry from '@suey/rocktry';

// Import Style File
import '@suey/rocktry/index.css';

;(async () => {
  const app = createApp(App);

  // use, We will automatically register global components for you
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
// Your import will be ignored
const list = [
  'https://tse4-mm.cn.bing.net/th/id/OIP-C.wPY2_PJMnXtLAUKPUAlwlAAAAA?w=152&h=140&c=7&r=0&o=5&pid=1.7',
  'https://tse3-mm.cn.bing.net/th/id/OIP-C.Xhuf16W9uzvkQPj6NhDDRAAAAA?w=130&h=130&c=7&r=0&o=5&pid=1.7',
  'https://tse1-mm.cn.bing.net/th/id/OIP-C.hlviKjBLfMuQ9Fr7J2cWzwAAAA?w=140&h=150&c=7&r=0&o=5&pid=1.7',
  'https://tse2-mm.cn.bing.net/th/id/OIP-C.bkdDrOZ9W9bnZH62pIiZqgAAAA?w=150&h=150&c=7&r=0&o=5&pid=1.7',
];
</script>
```


## Let's get started

You have successfully built and processed your first program. Next, take a look at the [Components] (/zh/components/docker/RemacDocker. md) document to use it~
