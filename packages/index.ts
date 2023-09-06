/**
 * ******************
 * 组件以大写字母 R 开头, 仅为某组件提供服务的函数 r 开头
 *
 * 导出的类型以 Rt_ 开头
 *
 * 通用函数正常驼峰标识
 * ******************
 */
import type { Plugin } from 'vue';
import { RMacDocker, RMacDockerItem } from './components/docker';

export { getCssVar, setCssVar, setCssVars } from './pack-utils';
export { getCssVarForRoot, setCssVarForRoot, setCssVarsForRoot } from './pack-utils';
export { getStyleProperty, setStyleProperty, setStyleProperties } from './pack-utils';

export { useEventListener, useCssVar, useCssVarForRoot } from './pack-utils';

export { RMacDocker, RMacDockerItem } from './components/docker';
export type { Rt_MacDockerCssVarProps } from './components/docker';
export { rSetMacDockerCssVar, rSetMacDockerCssVars } from './components/docker';

export default <Plugin>{
  install(app) {
    app.component('RMacDocker', RMacDocker);
    app.component('RMacDockerItem', RMacDockerItem);
  }
}


