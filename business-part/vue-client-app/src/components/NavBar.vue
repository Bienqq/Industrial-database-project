<template>

  <b-navbar toggleable="sm" type="dark" variant="info">

    <b-navbar-brand class="fixed-top" href="#">Business Center</b-navbar-brand>

    <!-- Right aligned nav items -->
    <!-- Hided on medium lower -->
    <b-navbar-nav class="ml-auto d-none d-md-flex">

      <b-nav-form>
        <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search" />
        <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
      </b-nav-form>

      <b-nav-item-dropdown text="Lang" right>
        <b-dropdown-item href="#">EN</b-dropdown-item>
        <b-dropdown-item href="#">ES</b-dropdown-item>
        <b-dropdown-item href="#">RU</b-dropdown-item>
        <b-dropdown-item href="#">FA</b-dropdown-item>
      </b-nav-item-dropdown>

      <b-nav-item-dropdown right>
        <!-- Using button-content slot -->
        <template slot="button-content">
          User
        </template>
        <b-dropdown-item href="#">Profile</b-dropdown-item>
        <b-dropdown-item href="#">Signout</b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>

  </b-navbar>

</template>

<script>
export default {
  name: "NavBar"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
