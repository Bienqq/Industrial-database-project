<template>
    <div>
        <h3>Current time</h3>
        <p v-text="currentTime"></p>
    </div>
</template>

<script>
import moment from "moment";

export default {
  name: "Clock",
  data() {
    return {
      currentTime: null
    };
  },
  methods: {
    updateCurrentTime() {
      this.currentTime = moment().format("LTS");
    }
  },
  created() {
    this.currentTime = moment().format("LTS");
    setInterval(() => this.updateCurrentTime(), 1 * 1000);
  }
};
</script>

<style scoped>
div {
  line-height: 0;
  padding: 0;
  margin-right: 15px;
  font-size: 15px;
  color: ghostwhite;
}
h3 {
  font-size: 15px;
}
</style>
