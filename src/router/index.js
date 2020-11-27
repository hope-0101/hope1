import Vue from "vue";
import Router from "vue-router";
import Login from "../views/Login.vue";

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/",
      name: "Login",
      component: Login
    },
    {
      path: "/admin",
      name: "Admin",
      component: () => import("../views/Admin.vue"),
      // children: [

      // ]
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