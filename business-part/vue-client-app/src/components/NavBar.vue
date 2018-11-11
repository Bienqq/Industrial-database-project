<template>

  <b-navbar toggleable="sm" type="dark" variant="info">

    <b-navbar-brand class="fixed-top" href="#">Business Center</b-navbar-brand>

  </b-navbar>

</template>

<script>
export default {
  name: "NavBar"
};
</script>

<style>
.navbar-brand {
  z-index: 100000;
  margin-left: 70px;
  font-weight: 700;
  padding-top: 0.3em !important;
  font-size: 24px !important;
  text-shadow: rgba(0, 0, 0, 1) 0 0 2px;
}
.navbar {
  min-height: 56px;
  background: linear-gradient(
    180deg,
    rgba(23, 167, 189, 1) 0%,
    rgba(23, 167, 189, 1) 21%,
    rgba(0, 128, 128, 1) 100%
  ); /* w3c */
}
</style>
