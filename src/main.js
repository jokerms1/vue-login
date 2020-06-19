// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";

import axios from "axios";
import router from "./router";
import store from "./store";
// import element from "./plugins/element";
import element from "element-ui";
// import "./styles/index.less";
import Vuex from "vuex";
import "element-ui/lib/theme-chalk/index.css";
import "./styles/index.less";

Vue.use(element);
Vue.use(Vuex);

// axios.defaults.baseURL = "http://114.115.207.169:9085";
// axios.defaults.withCredentials = true;
Vue.prototype.$http = axios;
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  store,
  router,
  components: { App },
  template: "<App/>"
});
