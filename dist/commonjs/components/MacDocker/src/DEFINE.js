'use strict';

var vue = require('vue');

var DEFINE_PROVIDER = {
  SET_MAIN_SLOT: '__setMainSlot__',
  SET_CONTROL_SLOT: '__setControlSlot__',
  SET_SLOT_FN: function SET_SLOT_FN(slot) {
    return void 0;
  }
};
var useSlotProvide = function useSlotProvide(provideKey) {
  var slot = vue.ref(void 0);
  vue.provide(provideKey, function (slotFn) {
    return slot.value = slotFn;
  });
  return slot;
};
var useTimeout = function useTimeout() {
  var timer = vue.ref(void 0);
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
  vue.onBeforeMount(function () {
    cancelTimeout();
  });
  vue.onBeforeUnmount(function () {
    cancelTimeout();
  });
  return {
    perTimeout: perTimeout,
    timer: timer,
    cancelTimeout: cancelTimeout
  };
};

exports.DEFINE_PROVIDER = DEFINE_PROVIDER;
exports.useSlotProvide = useSlotProvide;
exports.useTimeout = useTimeout;
