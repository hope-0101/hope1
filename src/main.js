import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// element-ui
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);
// import "./plugins/element.js";

// 导入全局css
import "@/assets/css/global.css";
// 导入字体库
import "@/assets/fonts/iconfont.css";

// axios
import axios from "axios";

axios.defaults.baseURL = "https://www.liulongbin.top:8888/api/private/v1/";
Vue.prototype.$http = axios;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
