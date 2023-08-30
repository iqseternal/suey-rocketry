
基于VUE3的一款个人组件库

pnpm

组件已经可以正常使用, RMacDocker, RMacDockerItem, RMacDockerControl
文档正在编写中, 目前仅给出一个使用样例

```vue
<template>
  <RMacDocker>
    <RMacDockerMain>RouterView</RMacDockerMain>

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
import { RMacDocker, RMacDockerItem, RMacDockerControl, RMacDockerMain } from 'packages';

const descriptor = `关于样式的配置会在文档中说明.`;

</script>
```
