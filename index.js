import Vue from "/web_modules/vue/dist/vue.esm.browser.js";
import VueRouter from "/web_modules/vue-router/dist/vue-router.esm.browser.js";
import httpVueLoader from "/web_modules/http-vue-loader/src/httpVueLoader.js";

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
    { path: "/a1/", component: httpVueLoader("./src/pages/a1.vue") },
  ]
});

new Vue({
  router: router,
  template: "<router-view></router-view>"
}).$mount("#app");
