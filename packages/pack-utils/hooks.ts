
import type { Ref } from 'vue';

import { onBeforeUnmount, onMounted, ref, watch } from 'vue';

import { setCssVar, setCssVarForRoot, getCssVar, getCssVarForRoot, cssRoot } from './dom';

interface USE_CSS_VAR_OPTIONS<T> {
  defaultValue?: string; // 维护默认值
  get: (str: string) => T; // 从 HTMLElement 元素中获取的样式的字符串值, 要求返回一个指定的格式维护
  set: (val: T) => string; // 你的指定格式的值被设置到 HTMLElement 元素中的时候, 需要进行格式化的操作
}

export const useCssVar = <KEY extends string, T>(el: HTMLElement, cssVar: KEY, options: USE_CSS_VAR_OPTIONS<T> = {
  get(str: string) { return str as unknown as T; },
  set(val: T) { return val as string; }
}) => {
  const cssVarData = ref(options.defaultValue ?? options.get(getCssVar(el, cssVar))) as Ref<T>;
  watch(() => cssVarData.value, (cur, pre) => setCssVar(el, cssVar, options.set(cur)));
  return cssVarData;
}

export const useCssVarForRoot = <KEY extends string, T>(cssVar: KEY, options: USE_CSS_VAR_OPTIONS<T> = {
  get(str: string) { return str as unknown as T; },
  set(val: T) { return val as string; }
}) => useCssVar(cssRoot, cssVar, options);


export function useEventListener<K extends keyof HTMLElementEventMap>(dom: Ref<HTMLElement>, evtKey: K, listener: (ev: HTMLElementEventMap[K]) => any): void;
export function useEventListener<K extends keyof HTMLElementEventMap>(dom: Ref<HTMLElement>, props: Record<K, (ev: HTMLElementEventMap[K]) => any>): void;
export function useEventListener<K extends keyof HTMLElementEventMap>(dom: Ref<HTMLElement>, props: K | Record<K, (ev: HTMLElementEventMap[K]) => any>, listener?: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any) {
  if (typeof props === 'string' && listener) {
    onMounted(() => {
      dom.value.addEventListener(props, listener);
    });
    onBeforeUnmount(() => {
      dom.value.removeEventListener(props, listener);
    })
    return;
  }

  onMounted(() => {
    Object.keys(props).forEach(evtKey => {
      dom.value.addEventListener(evtKey, props[evtKey]);
    });
  });

  onBeforeUnmount(() => {
    Object.keys(props).forEach(evtKey => {
      dom.value.removeEventListener(evtKey, props[evtKey]);
    });
  });
}

