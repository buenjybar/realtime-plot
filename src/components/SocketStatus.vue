<template>
    <div class="socket-status"
         v-bind:class="getCssClass()"
         @click="onClick">
        <span> status </span>
    </div>
</template>

<script lang="ts">
    import Component from "vue-class-component";
    import Vue from "vue";
    import store from "@/store";

    @Component({
        el: "socket-status",
    })
    export default class SocketStatus extends Vue {
        public getCssClass(): string {
            return store.state.isConnected ? "connected" : "disconnected";
        }

        public onClick(event: Event) {
            if (event != null) {
                event.stopPropagation();
            }
            const action = store.state.isConnected ? "SEND_DISCONNECT" : "SEND_CONNECT";
            store.dispatch(action);
        }

    }
</script>

<style scoped lang="scss">
    div.socket-status {
        margin: 12px;

        border: solid 1px transparent;
        border-radius: 10px;
        background: transparent;
        color: #656565;

        &.connected {
            border-color: lightgreen;
            background: lightgreen;
        }

        &.disconnected {
            border-color: lightcoral;
            background: lightcoral;
        }
    }
</style>
