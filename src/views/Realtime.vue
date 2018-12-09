<template>
  <div class="">
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TimelinePlot from '@/components/TimelinePlot.vue';

@Component({
  components: {
    TimelinePlot,
  },
})
export default class RealTime extends Vue {}
</script>
