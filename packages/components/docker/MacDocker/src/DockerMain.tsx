


import { defineComponent, inject } from 'vue';
import type { Slots, VNode } from 'vue';

import { DEFINE_PROVIDER } from './DEFINE';

export const DockerMain = defineComponent({
  setup: (props, { slots }: { slots: Slots }) => {
    const setMainSlot = inject(DEFINE_PROVIDER.SET_MAIN_SLOT) as typeof DEFINE_PROVIDER.SET_SLOT_FN;
    setMainSlot(() => (slots.default && slots.default()) as unknown as VNode[]);
    return () => (<template></template>);
  }
});
