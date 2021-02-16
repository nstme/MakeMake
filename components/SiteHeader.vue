<template>
  <header class="site-header">
    <a href="https://google.com" class="link">
      <!-- <img src="~/assets/svg/logo-makemake.svg" height=20 width=auto alt="makemake logo" > -->
      <svg-makemake-logo class="logo"/>
    </a>
    <a href="https://google.com" class="link logo-rps">
      <!-- <img src="~/assets/svg/logo-rps.svg" height=50 width=auto alt="rps logo"> -->
      <svg-rps-logo class="logo logo-rps"/>
    </a>
    <hamburger-menu/>
  </header>
</template>

<script>
import SvgMakemakeLogo from '~/assets/svg/makemake-logo.svg';
import SvgRpsLogo from '~/assets/svg/rps-logo.svg';
import HamburgerMenu from '~/components/HamburgerMenu';

export default {
  name: "SiteHeader",
  components: {
    SvgMakemakeLogo,
    SvgRpsLogo,
    HamburgerMenu,
  }
}
</script>

<style scoped>
.site-header {
  width: 1180px;
  max-width: var(--max-width);
  margin: auto;
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.site-header .logo {
  display: block;
}

.site-header .logo-rps {
  padding-right: 58px;
}
</style>