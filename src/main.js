import Vue from "vue";
import router from "./router";
import App from "./components/App.vue";

const el = document.createElement("div");
el.id = "app";
document.body.appendChild(el);

new Vue({
  el,
  router,
  render: h => h(App)
});
