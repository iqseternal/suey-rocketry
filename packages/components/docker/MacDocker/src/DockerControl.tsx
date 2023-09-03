
import { defineComponent, inject } from 'vue';
import type { Slots, VNode } from 'vue';
import { DEFINE_PROVIDER } from './DEFINE';

export const DockerControl = defineComponent({
  setup: (_, { slots }: { slots: Slots }) => {
    const setControlSlot = inject(DEFINE_PROVIDER.SET_CONTROL_SLOT) as typeof DEFINE_PROVIDER.SET_SLOT_FN;
    setControlSlot(() => (slots.default && slots.default()) as unknown as VNode[]);
    return () => (<template></template>);
  }
});
