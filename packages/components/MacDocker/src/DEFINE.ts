import { provide, ref, onBeforeMount, onBeforeUnmount } from 'vue';
import type { Slot } from 'vue';

export const DEFINE_PROVIDER = {
  SET_MAIN_SLOT: '__setMainSlot__',
  SET_CONTROL_SLOT: '__setControlSlot__',
  SET_SLOT_FN: (slot: Slot) => void 0
};

export const useSlotProvide = (provideKey: string) => {
  const slot = ref<undefined | Slot>(void 0);
  provide(provideKey, (slotFn: Slot) => (slot.value = slotFn));
  return slot;
};

export const useTimeout = () => {
  const timer = ref<number | undefined>(void 0);

  const cancelTimeout = () => {
    if (timer.value) {
      clearTimeout(timer.value);
      timer.value = void 0;
    }
  }

  const perTimeout = (callback: (args: void) => void, ms?: number) => {
    cancelTimeout();
    timer.value = setTimeout(callback, ms);
  };

  onBeforeMount(() => {
    cancelTimeout();
  });

  onBeforeUnmount(() => {
    cancelTimeout();
  });

  return { perTimeout, timer, cancelTimeout };
};
