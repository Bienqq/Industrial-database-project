<template>
  <div>
    <Slide isOpen width="260">
      <img class="my-div" src="../assets/img/bussiness.png" alt="">
      <router-link to="/"><img src="../assets/img/dashboard.png"><span>Dashboard</span></router-link>
      <router-link to="/charts"> <img src="../assets/img/combo-chart.png"><span>Charts</span></router-link>
      <router-link to="/database"> <img src="../assets/img/database.png"><span>Database</span></router-link>
      <hr class="custom-hr">
      <router-link to="/settings"> <img src="../assets/img/services.png"><span>Settings</span></router-link>
    </Slide>
    <router-view></router-view>
  </div>
</template>

<script>
import { Slide } from "vue-burger-menu"; // import the CSS transitions you wish to use, in this case we are using `Slide`

export default {
  name: "SlideBar",
  components: {
    Slide
  }
};
</script>

<style>
.my-div {
  position: relative;
  left: 0px;
  top: -45px;
  width: 30px;
  height: 30px;
  background-image: url("../assets/img/bussiness.png");
  filter: invert(100%);
}

a {
  text-decoration: none;
}
.bm-burger-button {
  position: fixed;
  width: 36px;
  height: 30px;
  left: 18px;
  top: 12px;
  cursor: pointer;
}
.bm-burger-bars {
  background-color: #373a47;
}

.bm-menu {
  height: 100%; /* 100% Full-height */
  width: 0; /* 0 width - change this with JavaScript */
  position: fixed; /* Stay in place */
  z-index: 1000; /* Stay on top */
  top: 0;
  left: 0;
  background: linear-gradient(
    0deg,
    rgba(23, 167, 189, 1) 0%,
    rgba(23, 167, 189, 1) 21%,
    rgba(0, 128, 128, 1) 100%
  ); /* w3c */

  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 60px; /* Place content 60px from the top */
  transition: 0.5s; /*0.5 second transition effect to slide in the sidenav*/
}

.bm-item-list {
  color: ghostwhite;
  margin-left: 10%;
  font-size: 20px;
}
.bm-overlay {
  background: white;
}

.bm-item-list > * {
  display: flex;
  padding: 0.7em;
}

a {
  text-decoration: none !important;
}

a:hover span {
  color: rgb(49, 49, 49);
  transition: 0.2s all ease-in-out;
}

a:hover img {
  filter: invert(90%);
  transition: 0.2s all ease-in-out;
}

.cross-style {
  cursor: pointer;
  position: absolute;
  right: -10px;
  top: 6px;
}

.custom-hr {
  border-top: 1px solid #ffffff !important;
  margin-right: 20px !important;
}
</style>
