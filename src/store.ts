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
        SEND_CONNECT(state) {
            return state;
        },
        SEND_CONNECT_SUCCESS(state) {
            state.isConnected = true;
        },

        SEND_DISCONNECT(state) {
            return state;
        },
        SEND_DISCONNECT_SUCCESS(state) {
            state.isConnected = false;
        },

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
        SEND_CONNECT: ({ commit }) => commit("SEND_CONNECT"),
        SEND_CONNECT_SUCCESS: ({ commit }) => commit("SEND_CONNECT_SUCCESS"),
        SEND_DISCONNECT: ({ commit }) => commit("SEND_DISCONNECT"),
        SEND_DISCONNECT_SUCCESS: ({ commit }) => commit("SEND_DISCONNECT_SUCCESS"),
        SOCKET_CONNECT: ({ commit }) => commit("SOCKET_CONNECT"),
        SOCKET_DISCONNECTED: ({ commit }) => commit("SOCKET_DISCONNECTED"),
        SOCKET_MESSAGECHANNEL: ({ commit }) => commit("SOCKET_MESSAGECHANNEL"),
    },
});
