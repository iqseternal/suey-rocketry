import { defineComponent, h, ref, inject, provide, onMounted, onUpdated } from 'vue';
import type { Component, ComponentCustomProps, PropType, Ref, RendererElement, VNode, RendererNode } from 'vue';
import { DEFINE_PROVIDER, cssVars } from './DEFINE';
import type { Rt_CssVarsProps } from './DEFINE';

import { useTimeout } from './uilts';
import { setCssVars, useCssVar, useCssVarForRoot, setCssVar, getCssVar, setStyleProperty, setStyleProperties, setCssVarsForRoot, getCssVarForRoot } from 'pack-utils';

import { createCurve, baseCurve, useSlotProvide, toCssVarStr, layout } from './uilts';

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

    // onMounted(() => setCssVars(view.value, cssVars));
    // setCssVarsForRoot(cssVars);
    const itemsVNode = slots.default && slots.default() as (VNode<RendererNode, RendererElement>[] | undefined);
    const controlVNode = slots.control && slots.control();

    const hidden = ref(false);
    const { cancelTimeout, perTimeout, timer: leaveTimer } = useTimeout();
    const { cancelTimeout: moveCancelTimeout, perTimeout: movePreTimeout, timer: moveTimer } = useTimeout();

    function makeDockerItem() {
      if (Array.isArray(itemsVNode)) {
        if (controlVNode) {
          return (<>{itemsVNode}<div class={style.driverLine}></div>{controlVNode}</>);
        }
        if ((itemsVNode[0].children as Array<any>).length >= props.driverNums) {
          const last = (itemsVNode[0].children as Array<any>).pop();

          return (<>{itemsVNode}<div class={style.driverLine}></div>{last}</>);
        }
      }
      return itemsVNode;
    }

    onMounted(() => {
      // 获取 dockerItem 元素位置的函数, 获得元素中间的 x 坐标
      const elToCenter = (e: HTMLElement) => e.offsetLeft + parseFloat(getCss('--r-mac-docker-item-size').replace('px', '')) / 2;
      const elToRight = (e: HTMLElement) => e.offsetLeft + parseFloat(getCss('--r-mac-docker-item-size').replace('px', ''));

      const resetLayout = () => layout(docker.value, () => 0, elToCenter, props.driverMaxI, props.driverNums);

      docker.value.addEventListener('mousemove', (e) => {
        if (moveTimer.value) return;
        movePreTimeout(() => {}, 20);

        const childrenList = docker.value.querySelectorAll(`section.${style.dockerItem}`);

        const curX = e.clientX - docker.value.offsetLeft;

        let distEl: HTMLElement | undefined = void 0;

        for (let i = 0;i < childrenList.length;i ++) {
          if (childrenList.length >= props.driverNums) {
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
      });

      docker.value.addEventListener('mouseleave', (e) => resetLayout());
    });

    onMounted(() => {
      if (props.autoHidden) {
        autoHidden();

        perTimeout(() => {
          hidden.value = true;
        }, props.autoHidenTimer);
      }
    });

    function autoHidden() {
      view.value.addEventListener('mousemove', (e) => {
        if (
          !document.body ||
          !footer.value ||
          !document.body.clientHeight || !footer.value.clientHeight
        ) {
          cancelTimeout();
          hidden.value = false;
        }

        if (document.body?.clientHeight - e.clientY <= footer.value?.clientHeight) {
          cancelTimeout();
          if (hidden.value) hidden.value = false;
        }
        else {

          // if (!hidden.value) {

          //   if (leaveTimer.value) return;

          //   perTimeout(() => {
          //     hidden.value = true;
          //   }, props.autoHidenTimer);
          // }
        }
      });

      footer.value.addEventListener('mouseleave', _ => {
        perTimeout(() => {
          hidden.value = true;
        }, props.autoHidenTimer);
      });
    }

    return () => (
      <div class={style.view} ref={view}>
        <main class={style.content}>{slots.main && slots.main()}</main>

        <footer class={hidden.value ? `${style.footer} ${style.hidden}` : `${style.footer}`} ref={footer}>
          <div class={style.docker} ref={docker}>
            <div class={style.back}></div>
            {makeDockerItem()}
          </div>
        </footer>
      </div>
    )
  }
})

