<template>
  <div
    v-for="(_, i) in tens"
    :key="i"
    :style="{
      left: 50 - Math.sin((Math.PI * i) / 5) * 40 + '%',
      top: 50 + Math.cos((Math.PI * i) / 5) * 40 + '%',
    }"
    class="digit"
  >
    {{ i }}
  </div>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue';

export default defineComponent({
  setup() {
    const tens = inject<number[]>('arrOfTens');
    return { tens };
  }
})
</script>

<style scoped>
.digit {
  position: absolute;
  font-size: 6vh;
  height: 7vh;
  width: 7vh;
  margin-left: -3.5vh;
  margin-top: -3.5vh;
  text-align: center;
  user-select: none
}
</style>
