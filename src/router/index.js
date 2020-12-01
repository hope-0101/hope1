import Vue from "vue";
import Router from "vue-router";
import Login from "../views/Login.vue";

Vue.use(Router);

const router = new Router({
  routes: [{
      path: "/",
      name: "Login",
      component: Login
    },
    {
      path: "/admin",
      name: "Admin",
      component: () => import("../views/Admin.vue"),
      redirect:'/hope',
      children: [
        // 主页
        {
          path: "/hope",
          name: "hope",
          component: () => import("@/inde/hope.vue"),
        },
        // 用户列表页
        {
          path: "/users",
          name: "users",
          component: () => import("@/inde/users/users.vue"),
        },
        // 角色列表页
        {
          path: "/roles",
          name: "roles",
          component: () => import("@/inde/power/roles.vue"),
        },
        // 限权列表页
        {
          path: "/rights",
          name: "rights",
          component: () => import("@/inde/power/rights.vue"),
        },
        // 商品列表
        {
          path: "/goods",
          name: "goods",
          component: () => import("@/inde/shop/goods.vue"),
        },
        // 商品列表添加页
        {
          path: "/add",
          name: "add",
          component: () => import("@/inde/shop/add.vue"),
        },
        // 分类参数
        {
          path: "/params",
          name: "params",
          component: () => import("@/inde/shop/params.vue"),
        },
        // 商品分类
        {
          path: "/categories",
          name: "categories",
          component: () => import("@/inde/shop/categories.vue"),
        },
        // 订单列表
        {
          path: "/orders",
          name: "orders",
          component: () => import("@/inde/order/orders.vue"),
        },
        // 数据报表
        {
          path: "/reports",
          name: "reports",
          component: () => import("@/inde/data/reports.vue"),
        },
      ]
    },
  ]
});

// 挂载路由守卫
router.beforeEach((to, from, next) => {
  if (to.path === "/") return next();
  const tokenStr = window.sessionStorage.getItem("token");
  if (!tokenStr) return next("/");
  next();
});

export default router