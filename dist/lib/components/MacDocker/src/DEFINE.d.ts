import type { Slot } from 'vue';
export declare const DEFINE_PROVIDER: {
    SET_MAIN_SLOT: string;
    SET_CONTROL_SLOT: string;
    SET_SLOT_FN: (slot: Slot) => any;
};
export declare const useSlotProvide: (provideKey: string) => import("vue").Ref<Slot>;
export declare const useTimeout: () => {
    perTimeout: (callback: (args: void) => void, ms?: number) => void;
    timer: import("vue").Ref<number>;
    cancelTimeout: () => void;
};
