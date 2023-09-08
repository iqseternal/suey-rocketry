<template>
  <RMacDocker :style="{ width: '100%', height: 'unset', aspectRatio: '16 / 9' }" :driverMaxI="1.2">
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
import { Ref, onMounted, ref } from 'vue';
import { RMacDocker, RMacDockerItem, rSetMacDockerCssVars } from '@suey/rocketry';

onMounted(() => rSetMacDockerCssVars({
  '--r-mac-docker-item-margin-bottom': '8px'
}));

const list = [
  'https://tse4-mm.cn.bing.net/th/id/OIP-C.wPY2_PJMnXtLAUKPUAlwlAAAAA?w=152&h=140&c=7&r=0&o=5&pid=1.7',
  'https://tse3-mm.cn.bing.net/th/id/OIP-C.Xhuf16W9uzvkQPj6NhDDRAAAAA?w=130&h=130&c=7&r=0&o=5&pid=1.7',
  'https://tse1-mm.cn.bing.net/th/id/OIP-C.hlviKjBLfMuQ9Fr7J2cWzwAAAA?w=140&h=150&c=7&r=0&o=5&pid=1.7',
  'https://tse1-mm.cn.bing.net/th/id/OIP-C.hlviKjBLfMuQ9Fr7J2cWzwAAAA?w=140&h=150&c=7&r=0&o=5&pid=1.7',
  'https://tse1-mm.cn.bing.net/th/id/OIP-C.hlviKjBLfMuQ9Fr7J2cWzwAAAA?w=140&h=150&c=7&r=0&o=5&pid=1.7',
];
</script>

