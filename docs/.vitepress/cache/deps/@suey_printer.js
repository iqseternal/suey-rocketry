import {
  __publicField
} from "./chunk-2B2CG5KL.js";

// node_modules/.pnpm/@suey+printer@1.0.10/node_modules/@suey/printer/dist/esm/define/define.js
var _STYLE = class _STYLE {
  constructor() {
    __publicField(this, "NORMAL", _STYLE.NORMAL);
    __publicField(this, "BRIGHT", _STYLE.BRIGHT);
    __publicField(this, "GREY", _STYLE.GREY);
    __publicField(this, "ITALIC", _STYLE.ITALIC);
    __publicField(this, "UNDERLINE", _STYLE.UNDERLINE);
    __publicField(this, "FLICKER_FAST", _STYLE.FLICKER_FAST);
    __publicField(this, "FLICKER_SLOW", _STYLE.FLICKER_SLOW);
    __publicField(this, "HIDDEN", _STYLE.HIDDEN);
    __publicField(this, "BLACK", _STYLE.BLACK);
    __publicField(this, "RED", _STYLE.RED);
    __publicField(this, "GREEN", _STYLE.GREEN);
    __publicField(this, "YELLOW", _STYLE.YELLOW);
    __publicField(this, "BLUE", _STYLE.BLUE);
    __publicField(this, "MAGENTA", _STYLE.MAGENTA);
    __publicField(this, "CYAN", _STYLE.CYAN);
    __publicField(this, "WHITE", _STYLE.WHITE);
    __publicField(this, "BLACK_BG", _STYLE.BLACK_BG);
    __publicField(this, "RED_BG", _STYLE.RED_BG);
    __publicField(this, "GREEN_BG", _STYLE.GREEN_BG);
    __publicField(this, "YELLOW_BG", _STYLE.YELLOW_BG);
    __publicField(this, "BLUE_BG", _STYLE.BLUE_BG);
    __publicField(this, "MAGENTA_BG", _STYLE.MAGENTA_BG);
    __publicField(this, "CYAN_BG", _STYLE.CYAN_BG);
    __publicField(this, "WHITE_BG", _STYLE.WHITE_BG);
  }
};
__publicField(_STYLE, "NORMAL", "normal");
__publicField(_STYLE, "BRIGHT", "bright");
__publicField(_STYLE, "GREY", "grey");
__publicField(_STYLE, "ITALIC", "italic");
__publicField(_STYLE, "UNDERLINE", "underline");
__publicField(_STYLE, "FLICKER_FAST", "flicker:fast");
__publicField(_STYLE, "FLICKER_SLOW", "flicker:slow");
__publicField(_STYLE, "HIDDEN", "hidden");
__publicField(_STYLE, "BLACK", "black");
__publicField(_STYLE, "RED", "red");
__publicField(_STYLE, "GREEN", "green");
__publicField(_STYLE, "YELLOW", "yellow");
__publicField(_STYLE, "BLUE", "blue");
__publicField(_STYLE, "MAGENTA", "magenta");
__publicField(_STYLE, "CYAN", "cyan");
__publicField(_STYLE, "WHITE", "white");
__publicField(_STYLE, "BLACK_BG", "black:bg");
__publicField(_STYLE, "RED_BG", "red:bg");
__publicField(_STYLE, "GREEN_BG", "green:bg");
__publicField(_STYLE, "YELLOW_BG", "yellow:bg");
__publicField(_STYLE, "BLUE_BG", "blue:bg");
__publicField(_STYLE, "MAGENTA_BG", "magenta:bg");
__publicField(_STYLE, "CYAN_BG", "cyan:bg");
__publicField(_STYLE, "WHITE_BG", "white:bg");
var STYLE = _STYLE;
var keyToAnsi = {
  [STYLE.NORMAL]: "\x1B[0m",
  [STYLE.BRIGHT]: "\x1B[1m",
  [STYLE.GREY]: "\x1B[2m",
  [STYLE.ITALIC]: "\x1B[3m",
  [STYLE.UNDERLINE]: "\x1B[4m",
  [STYLE.FLICKER_SLOW]: "\x1B[5m",
  [STYLE.FLICKER_FAST]: "\x1B[6m",
  [STYLE.HIDDEN]: "\x1B[8m",
  [STYLE.BLACK]: "\x1B[30m",
  [STYLE.RED]: "\x1B[31m",
  [STYLE.GREEN]: "\x1B[32m",
  [STYLE.YELLOW]: "\x1B[33m",
  [STYLE.BLUE]: "\x1B[34m",
  [STYLE.MAGENTA]: "\x1B[35m",
  [STYLE.CYAN]: "\x1B[36m",
  [STYLE.WHITE]: "\x1B[37m",
  [STYLE.BLACK_BG]: "\x1B[40m",
  [STYLE.RED_BG]: "\x1B[41m",
  [STYLE.GREEN_BG]: "\x1B[42m",
  [STYLE.YELLOW_BG]: "\x1B[43m",
  [STYLE.BLUE_BG]: "\x1B[44m",
  [STYLE.MAGENTA_BG]: "\x1B[45m",
  [STYLE.CYAN_BG]: "\x1B[46m",
  [STYLE.WHITE_BG]: "\x1B[47m"
};
var DEFINE_MESSAGE = {
  PRINTER_MESSAGE_ARR_FLAG: "__suey_printer_process_id__",
  PRINTER_MESSAGE_CLEAR_FLAG: "__suey_printer_process_id__"
};

// node_modules/.pnpm/@suey+printer@1.0.10/node_modules/@suey/printer/dist/esm/core/core.js
function toPrintClear() {
  const clearMsg = keyToAnsi[STYLE.NORMAL];
  clearMsg.constructor.prototype.__process_id__ = DEFINE_MESSAGE.PRINTER_MESSAGE_CLEAR_FLAG;
  return clearMsg;
}
function toPrintType(target) {
  if (typeof target === "number")
    return "%f";
  if (typeof target === "undefined" || typeof target === "symbol" || typeof target === "string" || typeof target === "bigint" || typeof target === "boolean" || !target)
    return "%s";
  return "%O";
}
function toPrintStyle(style) {
  if (typeof style === "string")
    return keyToAnsi[style] ?? "";
  if (Array.isArray(style))
    return style.reduce((pre, cur) => pre + (keyToAnsi[cur] ?? ""), "");
  if (typeof style === "object") {
    let styleBuffer = "";
    for (const key in style) {
      if (key && style[key]) {
        styleBuffer += `${key.replace(/[A-Z]/g, (match) => {
          return "-" + match;
        })}:${style[key]};`;
      }
    }
    return styleBuffer;
  }
  return "";
}
function toPrintArr(arr) {
  arr.constructor.prototype.__process_id__ = DEFINE_MESSAGE.PRINTER_MESSAGE_ARR_FLAG;
  return arr;
}
function toColor(style, ...message) {
  const styleBufferArr = toPrintStyle(style);
  return toPrintArr([toPrintClear() + styleBufferArr, ...message]);
}
function print(...message) {
  const typeArr = [];
  const msgArr = [];
  message.forEach((ms) => {
    if (Array.isArray(ms) && ms.__process_id__ === DEFINE_MESSAGE.PRINTER_MESSAGE_ARR_FLAG) {
      let type = ms.shift();
      for (let i = 0; i < ms.length; i++)
        type += toPrintType(ms[i]);
      typeArr.push(type);
      if (ms.length)
        msgArr.push(...ms);
      return;
    }
    if (Array.isArray(ms)) {
      ms.forEach((m) => {
        typeArr.push(toPrintType(m));
        msgArr.push(m);
      });
    }
    if (typeof ms === "string" && (ms.startsWith("\x1B[") || ms.includes("%c") || ms.includes("%s"))) {
      typeArr.push(ms);
      return;
    }
    typeArr.push(toPrintType(ms));
    msgArr.push(ms);
  });
  console.log(typeArr.reduce((pre, cur) => pre + cur, ""), ...msgArr);
}

// node_modules/.pnpm/@suey+printer@1.0.10/node_modules/@suey/printer/dist/esm/decorator/decorator.js
function Effect(fn) {
  return (target, key) => {
    const f = target[key];
    if (typeof f !== "function")
      return;
    target[key] = (...args) => {
      fn(target, key);
      f.apply(target, ...args);
    };
  };
}

// node_modules/.pnpm/@suey+printer@1.0.10/node_modules/@suey/printer/dist/esm/printer/printer.js
var __decorate = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = function(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
    return Reflect.metadata(k, v);
};
function printClear() {
  console.log(toPrintClear());
  console.clear();
}
function printInfo(...message) {
  print(toColor("blue"), ...message);
}
function printWarn(...message) {
  print(toColor("yellow"), ...message);
}
function printError(...message) {
  print(toColor("red"), ...message);
}
function printTrace(...message) {
  print("还没写怎么打印调用栈");
}
var _Printer = class _Printer {
  constructor(middleWare) {
    __publicField(this, "print", print);
    __publicField(this, "printInfo", printInfo);
    __publicField(this, "printWarn", printWarn);
    __publicField(this, "printError", printError);
    __publicField(this, "printTrace", printTrace);
    _Printer.middleWare = middleWare;
  }
};
__publicField(_Printer, "middleWare", () => void 0);
var Printer = _Printer;
__decorate([
  Effect(Printer.middleWare),
  __metadata("design:type", Object)
], Printer.prototype, "print", void 0);
__decorate([
  Effect(Printer.middleWare),
  __metadata("design:type", Object)
], Printer.prototype, "printInfo", void 0);
__decorate([
  Effect(Printer.middleWare),
  __metadata("design:type", Object)
], Printer.prototype, "printWarn", void 0);
__decorate([
  Effect(Printer.middleWare),
  __metadata("design:type", Object)
], Printer.prototype, "printError", void 0);
__decorate([
  Effect(Printer.middleWare),
  __metadata("design:type", Object)
], Printer.prototype, "printTrace", void 0);
export {
  Effect,
  Printer,
  STYLE,
  keyToAnsi,
  print,
  printClear,
  printError,
  printInfo,
  printWarn,
  toColor,
  toPrintArr,
  toPrintClear,
  toPrintStyle,
  toPrintType
};
//# sourceMappingURL=@suey_printer.js.map
