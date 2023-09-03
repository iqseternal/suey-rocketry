
import type { Ref } from 'vue';

import { ref, watch } from 'vue';

import { setCssVar, setCssVarForRoot, getCssVar, getCssVarForRoot, cssRoot } from './dom';

interface USE_CSS_VAR_OPTIONS<T> { defaultValue?: string;get: (str: string) => T;set: (val: T) => string; }

export const useCssVar = <T>(el: HTMLElement, cssVar: string, options: USE_CSS_VAR_OPTIONS<T> = {
  get(str: string) { return str as unknown as T; },
  set(val: T) { return val as string; }
}) => {
  const cssVarData = ref(options.defaultValue ?? options.get(getCssVar(el, cssVar))) as Ref<T>;
  watch(() => cssVarData.value, (cur, pre) => setCssVar(el, cssVar, options.set(cur)));
  return cssVarData;
}

export const useCssVarForRoot = <T>(cssVar: string, options: USE_CSS_VAR_OPTIONS<T> = {
  get(str: string) { return str as unknown as T; },
  set(val: T) { return val as string; }
}) => useCssVar(cssRoot, cssVar, options);
