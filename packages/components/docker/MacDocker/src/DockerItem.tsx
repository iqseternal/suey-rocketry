import { defineComponent, inject, onUpdated } from 'vue';
import type { Slots, VNode } from 'vue';
import { DEFINE_PROVIDER } from './DEFINE';

import style from './index.module.scss';

export const DockerItem = defineComponent({
  props: {
    text: { type: String, default: '' },
    src: { type: String, default : '' }
  },
  emits: {
    itemClick: () => true
  },
  setup(props, { emit }) {
    return () => (<section class={style.dockerItem} style={{
      '--i': 0,
      backgroundImage: `url(${props.src})`
    }} onClick={() => emit('itemClick')}>{props.text}</section>);
  }
});
