'use strict';

var vue = require('vue');
var DEFINE = require('./DEFINE.js');

var DockerControl = vue.defineComponent({
  setup: function setup(_, _ref) {
    var slots = _ref.slots;
    var setControlSlot = vue.inject(DEFINE.DEFINE_PROVIDER.SET_CONTROL_SLOT);
    setControlSlot(function () {
      return slots["default"] && slots["default"]();
    });
    return function () {
      return vue.createVNode("template", null, null);
    };
  }
});

exports.DockerControl = DockerControl;
