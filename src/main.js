import Vue from "vue";
import { LayoutPlugin } from "bootstrap-vue";
import { ModalPlugin } from "bootstrap-vue";
import { TablePlugin } from "bootstrap-vue";
import { FormInputPlugin } from "bootstrap-vue";
import { FormDatepickerPlugin } from "bootstrap-vue";
import { AlertPlugin } from "bootstrap-vue";
import { SpinnerPlugin } from "bootstrap-vue";
import { ButtonPlugin } from "bootstrap-vue";
import { ButtonGroupPlugin } from "bootstrap-vue";
import { PaginationPlugin } from "bootstrap-vue";
import { ImagePlugin } from "bootstrap-vue";
import { LinkPlugin } from "bootstrap-vue";
import { JumbotronPlugin } from "bootstrap-vue";
import { BadgePlugin } from "bootstrap-vue";
import { AvatarPlugin } from "bootstrap-vue";
import { ToastPlugin } from "bootstrap-vue";
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
Vue.use(LayoutPlugin);
Vue.use(ModalPlugin);
Vue.use(TablePlugin);
Vue.use(FormInputPlugin);
Vue.use(FormDatepickerPlugin);
Vue.use(AlertPlugin);
Vue.use(SpinnerPlugin);
Vue.use(ButtonPlugin);
Vue.use(ButtonGroupPlugin);
Vue.use(PaginationPlugin);
Vue.use(ImagePlugin);
Vue.use(LinkPlugin);
Vue.use(JumbotronPlugin);
Vue.use(BadgePlugin);
Vue.use(AvatarPlugin);
Vue.use(ToastPlugin);
export const eventBus = new Vue();
Vue.prototype.$eventBus = eventBus; // Global event bus

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
