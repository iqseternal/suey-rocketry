
import type { Ref, Slot } from 'vue';
import { ref, onBeforeMount, onBeforeUnmount, provide } from 'vue';

import { cssVars } from './DEFINE';
import type { Rt_CssVarsProps } from './DEFINE';

import * as styles from './index.module.scss';
import { setCssVar, setCssVars, PrinterService, setStyleProperties, getCssVar } from 'pack-utils';

export const setDockerCssVar = (cssVar: keyof Rt_CssVarsProps, value: string) => {
  const dockerDom = document.querySelector(`div.${styles.view}`) as HTMLElement;
  if (!dockerDom) {
    PrinterService.printError('The element has not been mounted. Please try calling it in the onMounted cycle.');
    return;
  }
  setCssVar(dockerDom, cssVar, value);
}

export const setDockerCssVars = (cssVars: Rt_CssVarsProps) => {
  const dockerDom = document.querySelector(`div.${styles.view}`) as HTMLElement;
  if (!dockerDom) {
    PrinterService.printError('The element has not been mounted. Please try calling it in the onMounted cycle.');
    return;
  }
  setCssVars(dockerDom, cssVars);
}

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

  const perTimeout = (callback: () => void, ms?: number) => {
    cancelTimeout();
    timer.value = setTimeout(() => {
      callback();
      timer.value = void 0;
    }, ms);
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

/**
 * 为 docker 内的元素布局
 * @param el
 * @param fn
 * @param baseX
 * @param driverMaxI
 * @param driverNums
 */
export function layout(docker: HTMLElement, fn: typeof baseCurve, getCenterX: (child: HTMLElement) => number, driverMaxI: number, driverNums: number) {
  (docker.querySelectorAll(`section.${styles.dockerItem}`) as unknown as HTMLElement[]).forEach((child, index, childrenList) => {
    if (childrenList.length >= driverNums && index === childrenList.length - 1) return;

    const i = fn(getCenterX(child));

    setCssVar(child, '--i', i.toString());

    i === 0
      ? setStyleProperties(child, { width: toCssVarStr('--r-mac-docker-item-size'), height: toCssVarStr('--r-mac-docker-item-size') })
      : setStyleProperties(child, {
        width: `calc(${toCssVarStr('--r-mac-docker-item-size')} * ${i / driverMaxI / 3 + 1})`,
        height: `calc(${toCssVarStr('--r-mac-docker-item-size')} * ${i / driverMaxI / 3 + 1})`
      })
  });
}

/**
 * 查找一个元素的位置是否在 curX - spaing 到 curX + spacing 之间
 * @param docker
 * @param curX
 * @param spacing
 */
export function findElForXInRegion(docker: HTMLElement, curX: number, spacing: number): HTMLElement | undefined {
  const childrenList = (docker.querySelectorAll(`section.${styles.dockerItem}`) as unknown as HTMLElement[]);

  for (let i = 0;i < childrenList.length;i ++) {



  }

  return void 0;
}
