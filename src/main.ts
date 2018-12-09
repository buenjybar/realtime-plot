import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueSocketIO from "vue-socket.io-extended";
import io from "socket.io-client";

Vue.config.productionTip = false;

// import socket io application
const SOCKET_URL = "http://localhost:3000";
Vue.use(VueSocketIO, io(SOCKET_URL), { store });

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");
