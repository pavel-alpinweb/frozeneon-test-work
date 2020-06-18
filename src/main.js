import Vue from "vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import App from "./App.vue";
import store from "./store";

function dateFilter(value, type) {
  const date = new Date(value);
  if (type === "date") {
    return date.toLocaleDateString();
  } else if (type === "time") {
    return date.toLocaleTimeString();
  } else {
    return new Date(value).toLocaleString();
  }
}

Vue.filter("date", dateFilter);
Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
