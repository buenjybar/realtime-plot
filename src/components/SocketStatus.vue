<template>
    <div class="socket-status"
         v-bind:class="getCssClass()">
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
    }
</script>

<style scoped lang="scss">
    div.socket-status {
        margin: 12px;

        &.connected {
            border-bottom: solid 1px lightgreen;
        }

        &.disconnected {
            border-bottom: solid 1px lightcoral;
        }
    }
</style>
