<template>
  <div id="app">

    <NavBar></NavBar>
    <SideBar>Home</SideBar>

  </div>
</template>

<script>
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";

export default {
  name: "app",
  components: {
    NavBar,
    SideBar,

  }
};
</script>

<style>

</style>
