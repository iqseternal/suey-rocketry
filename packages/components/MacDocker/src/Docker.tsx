import { defineComponent, h, ref, inject, provide, onMounted } from 'vue';
import type { Ref } from 'vue';
import { DEFINE_PROVIDER, useSlotProvide, useTimeout } from './DEFINE';
import style from '../styles/index.module.scss';

export const Docker = defineComponent({
  props: {
    driverNums: { type: Number, default: 4 }, // 当数量超过这么多个的时候, 自动设置 control
    driverEffectWidth: { type: Number, default: 400 }, // 曲线影响的距离
    driverMaxI: { type: Number, default: 2 }, // 最大曲线弧度
    autoDriver: { type: Boolean, default: true }, // 是否自动设置 control
    autoHidden: { type: Boolean, default: true }, // 是否自动影藏 docker
    driverHidenTimer: { type: Number, default: 2000 }, // 自动隐藏 docker 的时间
  },
  setup(props, { slots }) {
    const footer = ref<HTMLElement>() as Ref<HTMLElement>;
    const docker = ref<HTMLElement>() as Ref<HTMLElement>;

    const mainSlot = useSlotProvide(DEFINE_PROVIDER.SET_MAIN_SLOT);
    const controlSlot = useSlotProvide(DEFINE_PROVIDER.SET_CONTROL_SLOT);

    const hidden = ref(false);
    const { cancelTimeout, perTimeout } = useTimeout();
    let offsetTop: number = 0;

    function baseCurve(x: number) {
      if (x < 0) return 0;
      if (x > 1) return 0;
      return Math.sin(x * Math.PI);
    }
    function createCurve(baseX: number) {
      const effectR = props.driverEffectWidth / 2;
      // 以baseX为中心展开
      // 300 / 2 = 150 为中心值

      return (curX: number) => {
        if (curX > baseX + effectR) return 0;
        if (curX < baseX - effectR) return 0;
        return baseCurve((curX - (baseX - effectR)) / props.driverEffectWidth) * props.driverMaxI;
      }
    }
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
      const root = document.querySelector(':root') as Element;

      function elToCenter(e: HTMLElement) {
        return e.offsetLeft + parseFloat(getComputedStyle(root).getPropertyValue('--layout-docker-item-size').replace('px', '')) / 2;
      }

      function elToRight(e: HTMLElement) {
        return e.offsetLeft + parseFloat(getComputedStyle(root).getPropertyValue('--layout-docker-item-size').replace('px', ''));
      }

      function layout(fn: typeof baseCurve) {
        const childrenList = docker.value.querySelectorAll(`section.${style.dockerItem}`);
        (childrenList as unknown as HTMLElement[]).forEach((child, index) => {
          if (childrenList.length >= props.driverNums && index === childrenList.length - 1) return;

          const i = fn(elToCenter(child));

          child.style.setProperty('--i', i.toString());
          if (i == 0) {
            child.style.width = 'var(--layout-docker-item-size)';
            child.style.height = 'var(--layout-docker-item-size)';
          }
          else {
            child.style.width = `calc(var(--layout-docker-item-size) * ${i / props.driverMaxI / 3 + 1})`;
            child.style.height = `calc(var(--layout-docker-item-size) * ${i / props.driverMaxI / 3 + 1})`;
          }
        });
      }

      docker.value.addEventListener('mousemove', (e) => {
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

          if (curX >= el.offsetLeft - 15 && curX <= elToRight(el) + 15) {
            distEl = el;
            break;
          }
        }

        if (!distEl) {
          layout(() => 0);
          return;
        }

        const curve = createCurve(elToCenter(distEl));
        layout(curve);
      });

      docker.value.addEventListener('mouseleave', (e) => {
        layout(() => 0);
      });
    });

    onMounted(() => {
      offsetTop = footer.value.offsetTop;
      if (props.autoHidden) {
        autoHidden();

        perTimeout(() => {
          hidden.value = true;
        }, props.driverHidenTimer);
      }
    });

    function autoHidden() {
      window.addEventListener('mousemove', (e) => {
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
      <div class={style.view}>
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

