<template>
  <transition name="fade">
    <div class="container">
      <div class="row">
        <div class="col-md-6 card small">
          <Barchart></Barchart>
        </div>
        <div class="col-md-6 card small">
          <Linechart v-bind:chart-data="datacollection"></Linechart>
          <button v-on:click="fillData()">Randomize</button>
        </div>
        <router-view></router-view>
      </div>
    </div>
  </transition>
</template>

<script>
import Barchart from "./Barchart";
import Linechart from "./Linechart";

export default {
  name: "Charts",
  components: {
    Barchart,
    Linechart
  },
  data() {
    return {
      datacollection: null
    };
  },
  mounted() {
    this.fillData();
  },
  methods: {
    fillData() {
      this.datacollection = {
        labels: [
          this.getRandomInt(),
          this.getRandomInt(),
          this.getRandomInt(),
          this.getRandomInt(),
          this.getRandomInt(),
          this.getRandomInt(),
          this.getRandomInt(),
          this.getRandomInt()
        ],
        datasets: [
          {
            label: "Data One",
            borderColor: "red",
            type: "line",
            backgroundColor: "rgba(246, 74, 72, 0.7)",
            borderWidth: 2,
            data: [
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt()
            ]
          },
          {
            label: "Data Two",
            borderColor: "green",
            backgroundColor: "rgba(68, 158, 72, 0.8)",
            borderWidth: 2,
            data: [
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt()
            ]
          }
        ]
      };
    },
    getRandomInt() {
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5;
    }
  }
};
</script>

<style>
.small {
  max-width: 500px;
  margin: 25px auto;
  box-shadow: 0 0 6px 0.5px rgba(0, 0, 0, 0.4);
}
</style>
