<template>
  <div>
    <h2>Decimal Clock</h2>
    <div id="clock-face">
      <div
        v-for="(n, i) in 10"
        :key="i"
        :style="{
          left: 50 - Math.sin((Math.PI * i) / 5) * 40 + '%',
          top: 50 + Math.cos((Math.PI * i) / 5) * 40 + '%',
        }"
        class="digit"
      >
        {{ i }}
      </div>
      <div
        v-for="(n, i) in 100"
        :key="i"
        :class="i % 10 === 0 ? 'large tick' : 'tick'"
        :style="{ transform: `rotate(${i * 3.6}deg)` }"
      />
      <div v-show="timeString != null">
        <div
          v-if="fractionOfDay !== null"
          id="short-hand"
          :style="{
            transform: `rotate(${fractionOfDay * 360 + 180}deg)`,
          }"
        />
        <div
          v-if="fractionOfDay !== null"
          id="long-hand"
          :style="{
            transform: `rotate(${((fractionOfDay * 10) % 1) * 360 + 180}deg)`,
          }"
        />
        <div
          v-if="fractionOfDay !== null"
          id="second-hand"
          :style="{
            transform: `rotate(${((fractionOfDay * 1000) % 1) * 360 + 180}deg)`,
          }"
        />
      </div>
    </div>
    <h1 id="clock-time">{{ timeString }}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

interface StateType {
  fractionOfDay: number | null;
  timeString: string | null;
  frame: number | null,
  date: Date,
  timeOfDay: number;
}

export default defineComponent<StateType>({
  data() {
    return {
      frame: null,
      date: new Date(),
    }
  },
  computed: {
    timeOfDay(): number {
      return (this.date.getHours() * 3600 + this.date.getMinutes() * 60 + this.date.getSeconds())
          * 1000 + this.date.getMilliseconds();
    },
    fractionOfDay(): number {
      return this.timeOfDay / 86_400_000;
    },
    timeString(): string {
      return `${Math.floor(Number(this.fractionOfDay) * 10)}:${Math.floor(
          (Number(this.fractionOfDay) * 1_000) % 100
        )
          .toString()
          .padStart(2, "0")}:${Math.floor((Number(this.fractionOfDay) * 100_000) % 100)
          .toString()
          .padStart(2, "0")}`
    }
  },
  mounted() {
    const update = (): void => {
      this.date = new Date();
      this.frame = window.requestAnimationFrame(update);
    }

    this.frame = window.requestAnimationFrame(update);
  },
  beforeDestroy() {
    window.cancelAnimationFrame(Number(this.frame));
  },
});
</script>

<style scoped>
h1,
h2 {
  text-align: center;
}
#clock-face {
  position: relative;
  width: 70vh;
  height: 70vh;
  border: solid 2vh #888;
  border-radius: 37vh;
  margin: 0 auto;
}
#clock-face:before {
  content: "TEKNUM";
  display: block;
  position: absolute;
  font-size: 2.5vh;
  color: #bbb;
  font-weight: 500;
  letter-spacing: 0.3vh;
  text-align: center;
  width: 100%;
  top: 28%;
}
#clock-face:after {
  content: "";
  display: block;
  position: absolute;
  width: 4%;
  height: 4%;
  left: 50%;
  top: 50%;
  margin: -2% 0 0 -2%;
  background: #000;
  border-radius: 50%;
}
.digit {
  position: absolute;
  font-size: 6vh;
  height: 7vh;
  width: 7vh;
  margin-left: -3.5vh;
  margin-top: -3.5vh;
  text-align: center;
  user-select: none;
}
.tick {
  position: absolute;
  width: 0.3%;
  left: 50%;
  margin-left: -0.15%;
  background: #888;
  height: 2%;
  transform-origin: 50% 2500%;
}
.large.tick {
  height: 4%;
  transform-origin: 50% 1250%;
}
#short-hand {
  position: absolute;
  width: 1%;
  left: 50%;
  top: 27%;
  margin-left: -0.5%;
  background: #000;
  height: 23%;
  transform-origin: 50% 100%;
}
#long-hand {
  position: absolute;
  width: 1%;
  left: 50%;
  top: 20%;
  margin-left: -0.5%;
  background: #000;
  height: 30%;
  transform-origin: 50% 100%;
}
#second-hand {
  position: absolute;
  width: 0.3%;
  left: 50%;
  top: 18%;
  margin-left: -0.15%;
  background: #000;
  height: 32%;
  transform-origin: 50% 100%;
}
</style>
