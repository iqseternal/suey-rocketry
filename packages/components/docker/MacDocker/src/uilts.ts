
import type { Ref, Slot } from 'vue';
import { ref, onBeforeMount, onBeforeUnmount, provide } from 'vue';

import { cssVars } from './DEFINE';

/**
 * 将定义的 cssVars 变量转换为在 css 中使用的变量字符串 var(--xx-x--x)
 * @param cssVar
 * @returns
 */
export const toCssVarStr = (cssVar: keyof typeof cssVars) => `var(${cssVar})`;

/**
 * 转换为计算的 css 值
 * @param str
 * @returns
 */
export const toCssCalcStr = (str: string) => `calc(${str})`;


/**
 * sin 函数曲线
 * @param x
 * @returns
 */
export function baseCurve(x: number) {
  if (x < 0) return 0;
  if (x > 1) return 0;
  return Math.sin(x * Math.PI);
}

/**
 * sin 函数曲线的扩大扭曲
 * @param baseX
 * @param effectWidth
 * @param effectiHeight
 * @returns
 */
export function createCurve(baseX: number, effectWidth: number, effectiHeight: number) {
  const effectR = effectWidth / 2;
  // 以baseX为中心展开
  // 300 / 2 = 150 为中心值

  return (curX: number) => {
    if (curX > baseX + effectR) return 0;
    if (curX < baseX - effectR) return 0;
    return baseCurve((curX - (baseX - effectR)) / effectWidth) * effectiHeight;
  }
}

/**
 * timeout 的封装函数
 * @returns
 */
export const useTimeout = () => {
  const timer = ref<number | undefined>(void 0);

  const cancelTimeout = () => {
    if (timer.value) {
      clearTimeout(timer.value);
      timer.value = void 0;
    }
  }

  const perTimeout = (callback: (args: void) => void, ms?: number) => {
    cancelTimeout();
    timer.value = setTimeout(callback, ms);
  };

  onBeforeMount(() => {
    cancelTimeout();
  });

  onBeforeUnmount(() => {
    cancelTimeout();
  });

  return { perTimeout, timer, cancelTimeout };
};


/**
 * 插槽的响应式
 * @param provideKey
 * @returns
 */
export const useSlotProvide = (provideKey: string) => {
  const slot = ref<undefined | Slot>(void 0);
  provide(provideKey, (slotFn: Slot) => (slot.value = slotFn));
  return slot;
};

