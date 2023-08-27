import { defineComponent, createVNode } from 'vue';
import style from '../styles/index.module.scss.js';

var DockerItem = defineComponent({
  props: {
    text: {
      type: String,
      "default": ''
    },
    src: {
      type: String,
      "default": ''
    }
  },
  emits: {
    itemClick: function itemClick() {
      return true;
    }
  },
  setup: function setup(props, _ref) {
    var emit = _ref.emit;
    return function () {
      return createVNode("section", {
        "class": style.dockerItem,
        "style": {
          '--i': 0,
          backgroundImage: "url(".concat(props.src, ")")
        },
        "onClick": function onClick() {
          return emit('itemClick');
        }
      }, [props.text]);
    };
  }
});

export { DockerItem };
