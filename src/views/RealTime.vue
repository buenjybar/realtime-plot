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

    @Component({
        components: {
            TimelinePlot,
            SocketStatus,
        },
    })
    export default class RealTime extends Vue {}
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
