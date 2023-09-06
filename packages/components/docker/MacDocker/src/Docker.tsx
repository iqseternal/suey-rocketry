import { defineComponent, h, ref, inject, provide, onMounted, onUpdated, onBeforeUnmount } from 'vue';
import type { Component, ComponentCustomProps, PropType, Ref, RendererElement, VNode, RendererNode } from 'vue';
import { DEFINE_PROVIDER, cssVars } from './DEFINE';
import type { Rt_CssVarsProps } from './DEFINE';

import { useTimeout } from './uilts';
import { setCssVars, useCssVar, useCssVarForRoot, setCssVar, getCssVar } from 'pack-utils';
import { useEventListener } from 'pack-utils';

import { createCurve, baseCurve, useSlotProvide, toCssVarStr, layout, makeDockerItem } from './uilts';

import style from './index.module.scss';

const props = {
  driverNums: { type: Number, default: 4 }, // 当数量超过这么多个的时候, 自动设置 control
  driverEffectWidth: { type: Number, default: 400 }, // 曲线影响的距离
  driverMaxI: { type: Number, default: 2 }, // 最大曲线弧度

  autoDriver: { type: Boolean, default: true }, // 是否自动设置 control
  autoHidden: { type: Boolean, default: false }, // 是否自动影藏 docker
  autoHidenTimer: { type: Number, default: 3000 }, // 自动隐藏 docker 的时间

  cssVars: { type: Object as PropType<Partial<Rt_CssVarsProps>>, default: () => ({} as Rt_CssVarsProps) }
};

export const Docker = defineComponent({
  props,
  setup(props, { slots }) {
    const view = ref() as Ref<HTMLElement>;
    const footer = ref() as Ref<HTMLElement>;
    const docker = ref() as Ref<HTMLElement>;

    const setCss = (cssVar: keyof Rt_CssVarsProps, value: string) => setCssVar(view.value, cssVar, value);
    const getCss = (cssVar: keyof Rt_CssVarsProps) => getCssVar(view.value, cssVar);
    onMounted(() => setCssVars(view.value, props.cssVars));

    const hidden = ref(false);
    const { cancelTimeout: autoHiddenCanelTimeout, perTimeout: autoHiddenPerTimeout, timer: leaveTimer } = useTimeout();
    const { cancelTimeout: moveCancelTimeout, perTimeout: movePreTimeout, timer: moveTimer } = useTimeout();

    const elToCenter = (e: HTMLElement) => e.offsetLeft + parseFloat(getCss('--r-mac-docker-item-size').replace('px', '')) / 2;
    const elToRight = (e: HTMLElement) => e.offsetLeft + parseFloat(getCss('--r-mac-docker-item-size').replace('px', ''));
    const resetLayout = () => layout(docker.value, () => 0, elToCenter, props.driverMaxI, props.driverNums);

    useEventListener(docker, {
      'mousemove': (e) => {
        if (moveTimer.value) return;
        movePreTimeout(() => {}, 8);

        const childrenList = docker.value.querySelectorAll(`section.${style.dockerItem}`);
        const curX = e.clientX - docker.value.getBoundingClientRect().left;

        let distEl: HTMLElement | undefined = void 0;

        for (let i = 0;i < childrenList.length;i ++) {
          if (slots.control || (props.autoDriver && childrenList.length >= props.driverNums)) {
            if (i === childrenList.length - 1) {
              resetLayout();
              return;
            }
          }

          const el = childrenList[i] as unknown as HTMLElement;
          const spacing = Number(getCss('--r-mac-docker-item-margin').replace('px', ''));

          if (curX >= el.offsetLeft - spacing && curX <= elToRight(el) + spacing) {
            distEl = el;
            break;
          }
        }

        if (!distEl) {
          resetLayout();
          return;
        }

        const curve = createCurve(elToCenter(distEl), props.driverEffectWidth, props.driverMaxI);
        layout(docker.value, curve, elToCenter, props.driverMaxI, props.driverNums);
      },
      'mouseleave': () => resetLayout()
    });

    if (props.autoHidden) {
      onMounted(() => autoHiddenPerTimeout(() => (hidden.value = true), props.autoHidenTimer));
      useEventListener(view, 'mousemove', (e) => {
        if (!footer.value || !footer.value.clientHeight) {
          autoHiddenCanelTimeout();
          hidden.value = false;
          return;
        }
        if (document.body?.clientHeight - e.clientY <= footer.value?.clientHeight) {
          autoHiddenCanelTimeout();
          if (hidden.value) hidden.value = false;
          return;
        }

        if (leaveTimer.value) return;
        autoHiddenPerTimeout(() => (hidden.value = true), props.autoHidenTimer);
      });

      useEventListener(footer, 'mouseleave', () => autoHiddenPerTimeout(() => (hidden.value = true), props.autoHidenTimer));
    }

    return () => (
      <div class={style.view} ref={view}>
        <main class={style.content}>{slots.main && slots.main()}</main>

        <footer class={hidden.value ? `${style.footer} ${style.hidden}` : `${style.footer}`} ref={footer}>
          <div class={style.docker} ref={docker}>
            <div class={style.back}></div>
            {makeDockerItem(slots.default && slots.default(), props.autoDriver, props.driverNums, slots.control && slots.control())}
          </div>
        </footer>
      </div>
    )
  }
})

