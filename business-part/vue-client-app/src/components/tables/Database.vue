<template>
    <transition name="fade">

        <div>
            <Tables></Tables>
            <router-view></router-view>
        </div>
    </transition>

</template>

<script>
import Tables from "./Tables";
export default {
  name: "Database",
  components: {
    Tables
  }
};
</script>

<style>
</style>
