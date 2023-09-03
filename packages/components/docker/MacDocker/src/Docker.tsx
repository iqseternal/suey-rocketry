import { defineComponent, h, ref, inject, provide, onMounted } from 'vue';
import type { Component, ComponentCustomProps, PropType, Ref } from 'vue';
import { DEFINE_PROVIDER, cssVars } from './DEFINE';
import type { Rt_CssVarsProps } from './DEFINE';

import { useTimeout } from '@suey/packages/hooks';
import { registerCssVar, useCssVar, useCssVarForRoot, setCssVar, getCssVar, setStyleProperty, setStyleProperties, registerCssVarForRoot, getCssVarForRoot } from 'pack-utils';

import { createCurve, baseCurve, useSlotProvide, toCssVarStr } from './uilts';

import style from '../styles/index.module.scss';

const props = {
  driverNums: { type: Number, default: 4 }, // 当数量超过这么多个的时候, 自动设置 control
  driverEffectWidth: { type: Number, default: 400 }, // 曲线影响的距离
  driverMaxI: { type: Number, default: 2 }, // 最大曲线弧度
  autoDriver: { type: Boolean, default: true }, // 是否自动设置 control
  autoHidden: { type: Boolean, default: false }, // 是否自动影藏 docker
  driverHidenTimer: { type: Number, default: 2000 }, // 自动隐藏 docker 的时间
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

    // onMounted(() => registerCssVar(view.value, cssVars));
    // registerCssVarForRoot(cssVars);

    const mainSlot = useSlotProvide(DEFINE_PROVIDER.SET_MAIN_SLOT); // 注册插槽
    const controlSlot = useSlotProvide(DEFINE_PROVIDER.SET_CONTROL_SLOT);

    const hidden = ref(false);
    const { cancelTimeout, perTimeout } = useTimeout();

    const vNode = slots.default && slots.default();
    function makeDockerItem() {
      if (Array.isArray(vNode)) {
        if (controlSlot.value) {
          return (<>{vNode}<div class={style.driverLine}></div>{controlSlot.value()}</>);
        }

        if (vNode.length >= props.driverNums) {
          const last = vNode.pop();
          return (<>{vNode}<div class={style.driverLine}></div>{last}</>);
        }
      }
      return vNode;
    }

    onMounted(() => {
      const elToCenter = (e: HTMLElement) => e.offsetLeft + parseFloat(getCss('--r-mac-docker-item-size').replace('px', '')) / 2;
      const elToRight = (e: HTMLElement) => e.offsetLeft + parseFloat(getCss('--r-mac-docker-item-size').replace('px', ''));

      function layout(fn: typeof baseCurve) {
        (docker.value.querySelectorAll(`section.${style.dockerItem}`) as unknown as HTMLElement[]).forEach((child, index, childrenList) => {
          if (childrenList.length >= props.driverNums && index === childrenList.length - 1) return;

          const i = fn(elToCenter(child));

          setCssVar(child, '--i', i.toString());

          i === 0
            ? setStyleProperties(child, { width: toCssVarStr('--r-mac-docker-item-size'), height: toCssVarStr('--r-mac-docker-item-size') })
            : setStyleProperties(child, {
              width: `calc(${toCssVarStr('--r-mac-docker-item-size')} * ${i / props.driverMaxI / 3 + 1})`,
              height: `calc(${toCssVarStr('--r-mac-docker-item-size')} * ${i / props.driverMaxI / 3 + 1})`
            })
        });
      }

      let timer
      docker.value.addEventListener('mousemove', (e) => {
        if (timer) {
          return;
        }
        timer = setTimeout(() => {
          timer = void 0;
        }, 10);

        const childrenList = docker.value.querySelectorAll(`section.${style.dockerItem}`);
        const curX = e.clientX - docker.value.offsetLeft;
        let distEl: HTMLElement | undefined = void 0;

        for (let i = 0;i < childrenList.length;i ++) {
          if (childrenList.length >= props.driverNums) {
            if (i === childrenList.length - 1) {
              layout(() => 0);
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
          layout(() => 0);
          return;
        }

        const curve = createCurve(elToCenter(distEl), props.driverEffectWidth, props.driverMaxI);
        layout(curve);
      });

      docker.value.addEventListener('mouseleave', (e) => {
        layout(() => 0);
      });
    });

    onMounted(() => {
      if (props.autoHidden) {
        autoHidden();

        perTimeout(() => {
          hidden.value = true;
        }, props.driverHidenTimer);
      }
    });

    function autoHidden() {
      footer.value.addEventListener('mousemove', (e) => {
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
      });
      footer.value.addEventListener('mouseleave', _ => {
        perTimeout(() => {
          hidden.value = true;
        }, props.driverHidenTimer);
      });
    }

    return () => (
      <div class={style.view} ref={view}>
        <main class={style.content}>{mainSlot.value && mainSlot.value()}</main>

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

