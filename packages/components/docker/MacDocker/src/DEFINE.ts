
import { provide, ref, onBeforeMount, onBeforeUnmount } from 'vue';

import type { Slot } from 'vue';


export const DEFINE_PROVIDER = {
  SET_MAIN_SLOT: '__setMainSlot__',
  SET_CONTROL_SLOT: '__setControlSlot__',
  SET_SLOT_FN: (slot: Slot) => void 0
};

export const cssVars = {
  '--r-mac-docker-main-background': `url('https://images.unsplash.com/photo-1682685797769-481b48222adf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')`,

  '--r-mac-docker-divider-line-style': '1px solid white', // 分割线样式
  '--r-mac-docker-bottom': '20px',
  '--r-mac-docker-box-reflect-distance': '-20px',
  '--r-mac-docker-padding': '11px', // docer 的内 padding 值

  '--r-mac-docker-redius': '40px', // docer 的圆角属性值
  '--r-mac-docker-bg': 'rgba(255, 255, 255, 1)', // 背景色, 这个会被做出毛玻璃效果
  '--r-mac-docker-bg-blur': '64px', // 毛玻璃像素
  '--r-mac-docker-margin-bottom': '15px', // margin-bottom, 与屏幕底部之间的间隙
  '--r-mac-docker-hidden-bg': 'linear-gradient(to right, blue, red)', // 被隐藏了之后的背景颜色

  '--r-mac-docker-item-size': '45px', // item 大小
  '--r-mac-docker-item-radius': '50% 40%', // item 的圆角属性值
  '--r-mac-docker-item-padding': '12px', // 内部padding大小
  '--r-mac-docker-item-margin': '20px', // margin 值
  '--r-mac-docker-item-margin-bottom': '15px', // 偏移初始量
};

export type Rt_CssVarsProps = Partial<typeof cssVars>;
