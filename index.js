import Vue from "/web_modules/vue/dist/vue.esm.browser.js";
import VueRouter from "/web_modules/vue-router/dist/vue-router.esm.browser.js";
import httpVueLoader from "/web_modules/http-vue-loader/src/httpVueLoader.js";
import "/web_modules/aframe/dist/aframe-v0.9.2.min.js";
// import { parseAsYaml } from 'https://cdn.pika.dev/parse-yaml/v0.1';

import VueDrag from "/src/plugins/v-drag.js";
import VueTypeIt from "/src/plugins/typeit.js";
import VueRemarkable from "/src/plugins/remarkable.js";

Vue.use(VueRouter);
Vue.use(VueRemarkable);
Vue.use(VueTypeIt);
Vue.use(VueDrag);

const router = new VueRouter({
  routes: [
    { path: "/", component: httpVueLoader("./src/pages/home.vue") },
    { path: "/time/", component: httpVueLoader("./src/pages/time.vue") },
    { path: "/about/", component: httpVueLoader("./src/pages/about.vue") },
  ]
});

new Vue({
  router: router,
  template: "<router-view></router-view>"
}).$mount("#app");
