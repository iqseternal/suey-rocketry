'use strict';

var vue = require('vue');
var DEFINE = require('./DEFINE.js');
var index_module = require('../styles/index.module.scss.js');

var Docker = vue.defineComponent({
  props: {
    driverNums: {
      type: Number,
      "default": 4
    },
    driverEffectWidth: {
      type: Number,
      "default": 400
    },
    driverMaxI: {
      type: Number,
      "default": 2
    },
    autoDriver: {
      type: Boolean,
      "default": true
    },
    autoHidden: {
      type: Boolean,
      "default": true
    },
    driverHidenTimer: {
      type: Number,
      "default": 2000
    } // 自动隐藏 docker 的时间
  },
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    var footer = vue.ref();
    var docker = vue.ref();
    var mainSlot = DEFINE.useSlotProvide(DEFINE.DEFINE_PROVIDER.SET_MAIN_SLOT);
    var controlSlot = DEFINE.useSlotProvide(DEFINE.DEFINE_PROVIDER.SET_CONTROL_SLOT);
    var hidden = vue.ref(false);
    var _useTimeout = DEFINE.useTimeout(),
      cancelTimeout = _useTimeout.cancelTimeout,
      perTimeout = _useTimeout.perTimeout;
    function baseCurve(x) {
      if (x < 0) return 0;
      if (x > 1) return 0;
      return Math.sin(x * Math.PI);
    }
    function createCurve(baseX) {
      var effectR = props.driverEffectWidth / 2;
      // 以baseX为中心展开
      // 300 / 2 = 150 为中心值
      return function (curX) {
        if (curX > baseX + effectR) return 0;
        if (curX < baseX - effectR) return 0;
        return baseCurve((curX - (baseX - effectR)) / props.driverEffectWidth) * props.driverMaxI;
      };
    }
    var vNode = slots["default"] && slots["default"]();
    function makeDockerItem() {
      if (Array.isArray(vNode)) {
        if (controlSlot.value) {
          return vue.createVNode(vue.Fragment, null, [vNode, vue.createVNode("div", {
            "class": index_module.driverLine
          }, null), controlSlot.value()]);
        }
        if (vNode.length >= props.driverNums) {
          var last = vNode.pop();
          return vue.createVNode(vue.Fragment, null, [vNode, vue.createVNode("div", {
            "class": index_module.driverLine
          }, null), last]);
        }
      }
      return vNode;
    }
    vue.onMounted(function () {
      var root = document.querySelector(':root');
      function elToCenter(e) {
        return e.offsetLeft + parseFloat(getComputedStyle(root).getPropertyValue('--layout-docker-item-size').replace('px', '')) / 2;
      }
      function elToRight(e) {
        return e.offsetLeft + parseFloat(getComputedStyle(root).getPropertyValue('--layout-docker-item-size').replace('px', ''));
      }
      function layout(fn) {
        var childrenList = docker.value.querySelectorAll("section.".concat(index_module.dockerItem));
        childrenList.forEach(function (child, index) {
          if (childrenList.length >= props.driverNums && index === childrenList.length - 1) return;
          var i = fn(elToCenter(child));
          child.style.setProperty('--i', i.toString());
          if (i == 0) {
            child.style.width = 'var(--layout-docker-item-size)';
            child.style.height = 'var(--layout-docker-item-size)';
          } else {
            child.style.width = "calc(var(--layout-docker-item-size) * ".concat(i / props.driverMaxI / 3 + 1, ")");
            child.style.height = "calc(var(--layout-docker-item-size) * ".concat(i / props.driverMaxI / 3 + 1, ")");
          }
        });
      }
      docker.value.addEventListener('mousemove', function (e) {
        var childrenList = docker.value.querySelectorAll("section.".concat(index_module.dockerItem));
        var curX = e.clientX - docker.value.offsetLeft;
        var distEl = void 0;
        for (var i = 0; i < childrenList.length; i++) {
          if (childrenList.length >= props.driverNums) {
            if (i === childrenList.length - 1) {
              layout(function () {
                return 0;
              });
              return;
            }
          }
          var el = childrenList[i];
          if (curX >= el.offsetLeft - 15 && curX <= elToRight(el) + 15) {
            distEl = el;
            break;
          }
        }
        if (!distEl) {
          layout(function () {
            return 0;
          });
          return;
        }
        var curve = createCurve(elToCenter(distEl));
        layout(curve);
      });
      docker.value.addEventListener('mouseleave', function (e) {
        layout(function () {
          return 0;
        });
      });
    });
    vue.onMounted(function () {
      footer.value.offsetTop;
      if (props.autoHidden) {
        autoHidden();
        perTimeout(function () {
          hidden.value = true;
        }, props.driverHidenTimer);
      }
    });
    function autoHidden() {
      window.addEventListener('mousemove', function (e) {
        var _document$body, _footer$value;
        if (!document.body || !footer.value || !document.body.clientHeight || !footer.value.clientHeight) {
          cancelTimeout();
          hidden.value = false;
        }
        if (((_document$body = document.body) === null || _document$body === void 0 ? void 0 : _document$body.clientHeight) - e.clientY <= ((_footer$value = footer.value) === null || _footer$value === void 0 ? void 0 : _footer$value.clientHeight)) {
          cancelTimeout();
          if (hidden.value) hidden.value = false;
        }
      });
      footer.value.addEventListener('mouseleave', function (_) {
        perTimeout(function () {
          hidden.value = true;
        }, props.driverHidenTimer);
      });
    }
    return function () {
      return vue.createVNode("div", {
        "class": index_module.view
      }, [vue.createVNode("main", {
        "class": index_module.content
      }, [mainSlot.value && mainSlot.value()]), vue.createVNode("footer", {
        "class": hidden.value ? "".concat(index_module.footer, " ").concat(index_module.hidden) : "".concat(index_module.footer),
        "ref": footer
      }, [vue.createVNode("div", {
        "class": index_module.docker,
        "ref": docker
      }, [vue.createVNode("div", {
        "class": index_module.back
      }, null), makeDockerItem()])])]);
    };
  }
});

module.exports = Docker;
