'use strict';

var vue = require('vue');
var DEFINE = require('./DEFINE.js');

var DockerMain = vue.defineComponent({
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    var setMainSlot = vue.inject(DEFINE.DEFINE_PROVIDER.SET_MAIN_SLOT);
    setMainSlot(function () {
      return slots["default"] && slots["default"]();
    });
    return function () {
      return vue.createVNode("template", null, null);
    };
  }
});

exports.DockerMain = DockerMain;
