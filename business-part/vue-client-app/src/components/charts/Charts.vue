<template>
  <transition name="fade">
    <div class="container">
      <div class="card small">
        <Barchart></Barchart>
        <router-view></router-view>

      </div>
    </div>
  </transition>
</template>

<script>
import Barchart from "./Barchart";

export default {
  name: "Charts",
  components: {
    Barchart
  }
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition-property: opacity;
  transition-duration: 0.25s;
}

.fade-enter-active {
  transition-delay: 0.25s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

.small {
  max-width: 600px;
  margin: 50px auto;
}
</style>
