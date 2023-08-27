import { defineComponent, inject, createVNode } from 'vue';
import { DEFINE_PROVIDER } from './DEFINE.js';

var DockerControl = defineComponent({
  setup: function setup(_, _ref) {
    var slots = _ref.slots;
    var setControlSlot = inject(DEFINE_PROVIDER.SET_CONTROL_SLOT);
    setControlSlot(function () {
      return slots["default"] && slots["default"]();
    });
    return function () {
      return createVNode("template", null, null);
    };
  }
});

export { DockerControl };
