"use strict";
exports.id = 5472;
exports.ids = [5472];
exports.modules = {

/***/ 25472:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dyte_plugin_main: () => (/* binding */ DytePluginMain)
/* harmony export */ });
/* harmony import */ var _index_9f89d2b2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94196);
/* harmony import */ var _default_icon_pack_35359343_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67393);



const dytePluginMainCss = ":host{display:flex;height:100%;width:100%;flex-direction:column;overflow:hidden;border-radius:var(--dyte-border-radius-lg, 12px);font-family:var(--dyte-font-family, sans-serif);color:rgb(var(--dyte-colors-text-1000, 255 255 255))}header{display:flex;height:var(--dyte-space-8, 32px);align-items:center;justify-content:space-between;padding-left:var(--dyte-space-3, 12px);padding-right:var(--dyte-space-3, 12px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-900, 26 26 26) / var(--tw-bg-opacity))}header>div{display:flex;align-items:center}dyte-button{display:flex;height:var(--dyte-space-5, 20px);width:var(--dyte-space-5, 20px);flex-direction:column;align-items:center;border-radius:9999px}dyte-button dyte-icon{height:var(--dyte-space-3, 12px);width:var(--dyte-space-3, 12px)}iframe{display:block;flex:1 1 0%;margin:var(--dyte-space-0, 0px);border-width:var(--dyte-border-width-none, 0);border-style:none;padding:var(--dyte-space-0, 0px);outline:2px solid transparent;outline-offset:2px;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-video-bg, 24 24 24) / var(--tw-bg-opacity))}";

const DytePluginMain = class {
  constructor(hostRef) {
    (0,_index_9f89d2b2_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    /** Icon pack */
    this.iconPack = _default_icon_pack_35359343_js__WEBPACK_IMPORTED_MODULE_1__.d;
    this.canClosePlugin = false;
  }
  componentDidLoad() {
    this.meetingChanged(this.meeting);
    this.pluginChanged(this.plugin);
  }
  meetingChanged(meeting) {
    if (meeting != null) {
      (0,_index_9f89d2b2_js__WEBPACK_IMPORTED_MODULE_0__.w)(() => {
        this.canClosePlugin = meeting.self.permissions.plugins.canClose;
      });
    }
  }
  pluginChanged(plugin) {
    if (plugin != null) {
      plugin.addPluginView(this.iframeEl);
    }
  }
  render() {
    if (this.plugin == null)
      return null;
    return ((0,_index_9f89d2b2_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_9f89d2b2_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_9f89d2b2_js__WEBPACK_IMPORTED_MODULE_0__.h)("header", { part: "header" }, (0,_index_9f89d2b2_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", null, this.plugin.name), this.canClosePlugin && ((0,_index_9f89d2b2_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", null, (0,_index_9f89d2b2_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { kind: "icon", onClick: () => this.plugin.deactivate(), part: "button" }, (0,_index_9f89d2b2_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.dismiss }))))), (0,_index_9f89d2b2_js__WEBPACK_IMPORTED_MODULE_0__.h)("iframe", { ref: (el) => (this.iframeEl = el), part: "iframe" })));
  }
  static get watchers() { return {
    "meeting": ["meetingChanged"],
    "plugin": ["pluginChanged"]
  }; }
};
DytePluginMain.style = dytePluginMainCss;




/***/ })

};
;