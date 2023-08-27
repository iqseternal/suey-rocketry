import { ref, provide, onBeforeMount, onBeforeUnmount } from 'vue';

var DEFINE_PROVIDER = {
  SET_MAIN_SLOT: '__setMainSlot__',
  SET_CONTROL_SLOT: '__setControlSlot__',
  SET_SLOT_FN: function SET_SLOT_FN(slot) {
    return void 0;
  }
};
var useSlotProvide = function useSlotProvide(provideKey) {
  var slot = ref(void 0);
  provide(provideKey, function (slotFn) {
    return slot.value = slotFn;
  });
  return slot;
};
var useTimeout = function useTimeout() {
  var timer = ref(void 0);
  var cancelTimeout = function cancelTimeout() {
    if (timer.value) {
      clearTimeout(timer.value);
      timer.value = void 0;
    }
  };
  var perTimeout = function perTimeout(callback, ms) {
    cancelTimeout();
    timer.value = setTimeout(callback, ms);
  };
  onBeforeMount(function () {
    cancelTimeout();
  });
  onBeforeUnmount(function () {
    cancelTimeout();
  });
  return {
    perTimeout: perTimeout,
    timer: timer,
    cancelTimeout: cancelTimeout
  };
};

export { DEFINE_PROVIDER, useSlotProvide, useTimeout };
