<template>
  <transition name="fade">
    <div class="container">
      <Widgets class=mt-4></Widgets>
    </div>
  </transition>
</template>

<script>
import Widgets from "./Widgets";

export default {
  name: "Dashboard",
  components: {
    Widgets
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
</style>
