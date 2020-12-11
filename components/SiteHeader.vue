<template>
  <header class="site-header">
    <div class="container">
      <a href="#" class="link">
        <img src="~/assets/images/logo-makemake.svg" height=20 width=auto alt="makemake logo" >
      </a>
      <a href="#" class="link logo-rps">
        <img src="~/assets/images/logo-rps.svg" height=50 width=auto alt="rps logo">
      </a>
      <hamburger-menu/>
    </div>
  </header>
</template>

<script>
import HamburgerMenu from '~/components/HamburgerMenu';

export default {
  name: "SiteHeader",
  components: {
    HamburgerMenu,
  }
}
</script>

<style scoped>
.site-header {
  width: 100%;
  height: 50px;
  margin-top: 30px;
}

.container {
  width: 1180px;
  max-width: 80%;
}

.site-header .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
}

.link img {
  display: block;
}

.logo-rps {
  padding-right: 58px;
}
</style>