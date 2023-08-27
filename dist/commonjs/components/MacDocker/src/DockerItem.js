'use strict';

var vue = require('vue');
var index_module = require('../styles/index.module.scss.js');

var DockerItem = vue.defineComponent({
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
      return vue.createVNode("section", {
        "class": index_module.dockerItem,
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

exports.DockerItem = DockerItem;
