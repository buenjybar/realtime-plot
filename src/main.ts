import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueSocketIO from "vue-socket.io-extended";
import io from "socket.io-client";
import VueRx from "vue-rx";

Vue.config.productionTip = false;

// import rxjs in application
Vue.use(VueRx);

// import socket io application
const SOCKET_URL = "http://localhost:3000";
Vue.use(VueSocketIO, io(SOCKET_URL), { store });

// debug all socketio connections into the browser console
// localStorage.debug = '*';

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");
