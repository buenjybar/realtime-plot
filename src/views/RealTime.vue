<template>
    <div class="realtime">
        <div class="top">
            <socket-status></socket-status>
        </div>

        <div class="content">
            <timeline-plot></timeline-plot>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from "vue-property-decorator";
    import TimelinePlot from "@/components/TimelinePlot.vue";
    import SocketStatus from "@/components/SocketStatus.vue";
    import store from "../store";

    @Component({
        components: {
            TimelinePlot,
            SocketStatus,
        },
    })
    export default class RealTime extends Vue {

        public $mount(elementOrSelector?: Element | string, hydrating?: boolean): this {
            super.$mount(elementOrSelector, hydrating);

            store.subscribe((mutation) => {
                if (mutation.type === "SEND_DISCONNECT") {
                    this.$socket.once("disconnect", () => {
                        store.dispatch("SEND_DISCONNECT_SUCCESS");
                    });
                    this.$socket.disconnect();
                    return;
                }
                if (mutation.type === "SEND_CONNECT") {
                    this.$socket.once("connect", () => {
                        store.dispatch("SEND_CONNECT_SUCCESS");
                    });
                    this.$socket.connect();
                    return;
                }
            });

            return this;
        }
    }
</script>

<style scoped lang="scss">
    .realtime {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
    }

    .top {
        height: 40px;
    }

    .content {
        height: calc(100vh - 40px);
    }
</style>
