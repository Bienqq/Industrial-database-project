<template>
  <div>
    <Slide width="260">
      <a id="home" href="#"><img src="https://png.icons8.com/wired/32/ffffff/dashboard.png"><span>
          Dashboard</span></a>
      <a id="home" href="#"><img src="https://png.icons8.com/ios/32/ffffff/combo-chart.png"><span>Charts</span></a>
      <a id="home" href="#"><img src="https://png.icons8.com/ios/32/ffffff/database.png"><span>Database</span></a>
      <hr>
      <a id="home" href="#"><img src="https://png.icons8.com/ios/32/ffffff/services.png"><span>Settings</span></a>

    </Slide>

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
  background-color: #0691a7; /* Black*/
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
  transition: 0.2s all ease-in-out;
}

a:hover span {
  color: rgb(49, 49, 49);
}

a:hover img {
  filter: invert(80%);
}
</style>
