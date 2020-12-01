"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _Login = _interopRequireDefault(require("../views/Login.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

_vue["default"].use(_vueRouter["default"]);

var router = new _vueRouter["default"]({
  routes: [{
    path: "/",
    name: "Login",
    component: _Login["default"]
  }, {
    path: "/admin",
    name: "Admin",
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require("../views/Admin.vue"));
      });
    },
    redirect: '/hope',
    children: [// 主页
    {
      path: "/hope",
      name: "hope",
      component: function component() {
        return Promise.resolve().then(function () {
          return _interopRequireWildcard(require("@/inde/hope.vue"));
        });
      }
    }, // 用户列表页
    {
      path: "/users",
      name: "users",
      component: function component() {
        return Promise.resolve().then(function () {
          return _interopRequireWildcard(require("@/inde/users/users.vue"));
        });
      }
    }, // 角色列表页
    {
      path: "/roles",
      name: "roles",
      component: function component() {
        return Promise.resolve().then(function () {
          return _interopRequireWildcard(require("@/inde/power/roles.vue"));
        });
      }
    }, // 限权列表页
    {
      path: "/rights",
      name: "rights",
      component: function component() {
        return Promise.resolve().then(function () {
          return _interopRequireWildcard(require("@/inde/power/rights.vue"));
        });
      }
    }, // 商品列表
    {
      path: "/goods",
      name: "goods",
      component: function component() {
        return Promise.resolve().then(function () {
          return _interopRequireWildcard(require("@/inde/shop/goods.vue"));
        });
      }
    }, // 商品列表添加页
    {
      path: "/add",
      name: "add",
      component: function component() {
        return Promise.resolve().then(function () {
          return _interopRequireWildcard(require("@/inde/shop/add.vue"));
        });
      }
    }, // 分类参数
    {
      path: "/params",
      name: "params",
      component: function component() {
        return Promise.resolve().then(function () {
          return _interopRequireWildcard(require("@/inde/shop/params.vue"));
        });
      }
    }, // 商品分类
    {
      path: "/categories",
      name: "categories",
      component: function component() {
        return Promise.resolve().then(function () {
          return _interopRequireWildcard(require("@/inde/shop/categories.vue"));
        });
      }
    }, // 订单列表
    {
      path: "/orders",
      name: "orders",
      component: function component() {
        return Promise.resolve().then(function () {
          return _interopRequireWildcard(require("@/inde/order/orders.vue"));
        });
      }
    }, // 数据报表
    {
      path: "/reports",
      name: "reports",
      component: function component() {
        return Promise.resolve().then(function () {
          return _interopRequireWildcard(require("@/inde/data/reports.vue"));
        });
      }
    }]
  }]
}); // 挂载路由守卫

router.beforeEach(function (to, from, next) {
  if (to.path === "/") return next();
  var tokenStr = window.sessionStorage.getItem("token");
  if (!tokenStr) return next("/");
  next();
});
var _default = router;
exports["default"] = _default;