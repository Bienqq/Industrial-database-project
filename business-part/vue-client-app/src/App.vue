<template>
  <div id="app">
    <NavBar></NavBar>
    <Background></Background>
    <SideBar>Home</SideBar>
    <Footer></Footer>
  </div>
</template>

<script>
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import Footer from "./components/Footer";
import Background from "./components/Background";

export default {
  name: "app",
  components: {
    NavBar,
    SideBar,
    Footer,
    Background
  }
};
</script>

<style>
</style>
