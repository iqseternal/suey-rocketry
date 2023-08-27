import { defineComponent, inject, createVNode } from 'vue';
import { DEFINE_PROVIDER } from './DEFINE.js';

var DockerMain = defineComponent({
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    var setMainSlot = inject(DEFINE_PROVIDER.SET_MAIN_SLOT);
    setMainSlot(function () {
      return slots["default"] && slots["default"]();
    });
    return function () {
      return createVNode("template", null, null);
    };
  }
});

export { DockerMain };
