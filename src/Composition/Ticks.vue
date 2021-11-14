<template>
  <div
    v-for="(_, i) in hundreds"
    :key="i"
    :class="i % 10 === 0 ? 'large tick' : 'tick'"
    :style="{ transform: `rotate(${i * 3.6}deg)` }"
  />
</template>

<script lang="ts">
import { inject, defineComponent } from "vue";

export default defineComponent({
  setup() {
    const hundreds = inject<number[]>('arrOfHundreds');
    return { hundreds };
  }
})
</script>

<style scoped>
.tick {
  position: absolute;
  width: 0.3%;
  left: 50%;
  margin-left: -0.15%;
  background: #888;
  height: 2%;
  transform-origin: 50% 2500%;
}
.large .tick {
  height: 4%;
  transform-origin: 50% 1250%;
}
</style>
