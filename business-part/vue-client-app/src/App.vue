<template>
  <div id="app">
    <NavBar></NavBar>

    <SideBar>Home</SideBar>
    <Footer></Footer>
  </div>
</template>

<script>
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
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
