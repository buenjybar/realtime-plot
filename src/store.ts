import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        isConnected: false,
        socketMessage: null,
    },
    getters: {
        isConnected(state) {
            return state.isConnected;
        },
        getMessage(state) {
            return state.socketMessage;
        },
    },
    mutations: {
        SOCKET_CONNECT(state) {
            state.isConnected = true;
        },

        SOCKET_DISCONNECTED(state) {
            state.isConnected = false;
        },

        SOCKET_MESSAGECHANNEL(state, message) {
            state.socketMessage = message;
        },
    },
    actions: {
        SOCKET_CONNECT: ({ commit }) => commit("SOCKET_CONNECT"),
        SOCKET_DISCONNECTED: ({ commit }) => commit("SOCKET_DISCONNECTED"),
        SOCKET_MESSAGECHANNEL: ({ commit }) => commit("SOCKET_MESSAGECHANNEL"),
    },
});
