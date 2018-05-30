import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./components/Home.vue";
import Example1 from "./static/example1.html";
import Example2 from "./components/Example2";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    { path: "/", component: Home },
    { path: "/example1", component: { template: Example1 } },
    { path: "/example2", component: Example2 }
  ]
});
