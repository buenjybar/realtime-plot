<template>
    <div class="socket-status"
         v-bind:class="getCssClass()">
        <span> status </span>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from "vue-property-decorator";

    Component({
        el: "socket-status",
    });
    export default class SocketStatus extends Vue {
        private isConnected: boolean = false;

        public getCssClass(): string {
            return this.isConnected ? "connected" : "disconnected";
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
