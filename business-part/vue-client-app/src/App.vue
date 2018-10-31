<template>
  <div id="app">
    <NavBar></NavBar>
    <SideBar>Home</SideBar>
    <Footer></Footer>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import SideBar from "./components/SideBar.vue";
import Footer from "./components/Footer";

export default {
  name: "app",
  components: {
    NavBar,
    SideBar,
    Footer
  }
};
</script>

<style>
</style>
