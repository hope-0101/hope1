"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _App = _interopRequireDefault(require("./App.vue"));

var _router = _interopRequireDefault(require("./router"));

var _store = _interopRequireDefault(require("./store"));

var _elementUi = _interopRequireDefault(require("element-ui"));

require("element-ui/lib/theme-chalk/index.css");

require("@/assets/css/global.css");

require("@/assets/fonts/iconfont.css");

var _axios = _interopRequireDefault(require("axios"));

var _vueTableWithTreeGrid = _interopRequireDefault(require("vue-table-with-tree-grid"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// element-ui
_vue["default"].use(_elementUi["default"]); // import "./plugins/element.js";
// 导入全局css


_axios["default"].defaults.baseURL = "https://www.liulongbin.top:8888/api/private/v1/";

_axios["default"].interceptors.request.use(function (config) {
  // console.log(config)
  config.headers.Authorization = window.sessionStorage.getItem('token');
  return config;
});

_vue["default"].prototype.$http = _axios["default"]; // tree-table

_vue["default"].component('tree-table', _vueTableWithTreeGrid["default"]);

_vue["default"].config.productionTip = false;
new _vue["default"]({
  router: _router["default"],
  store: _store["default"],
  render: function render(h) {
    return h(_App["default"]);
  }
}).$mount("#app");