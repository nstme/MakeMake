<template>
  <header class="site-header">
    <a href="https://google.com" class="link makemake-logo">
      <img src="~/assets/svg/makemake-logo.svg" height="20" width="auto" alt="makemake logo" />
      <!-- <svg-makemake-logo class="logo"/> -->
    </a>
    <a href="https://google.com" class="link rps-logo">
      <img src="~/assets/svg/rps-logo.svg" height="50" width="auto" alt="rps logo" />
      <!-- <svg-rps-logo class="logo logo-rps"/> -->
    </a>
    <hamburger-menu />
    <h2 class="crumb">Editors</h2>
  </header>
</template>

<script>
//todo: get svg loader
// import SvgMakemakeLogo from '~/assets/svg/makemake-logo.svg';
// import SvgRpsLogo from '~/assets/svg/rps-logo.svg';
import HamburgerMenu from "~/components/HamburgerMenu";

export default {
  name: "SiteHeader",
  components: {
    // SvgMakemakeLogo,
    // SvgRpsLogo,
    HamburgerMenu
  }
};
</script>

<style scoped>
.site-header {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  margin: 0 auto;
  padding: 0 var(--gutter);
  max-width: var(--max-width);
  height: var(--header-height);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-end;
  align-items: center;
  z-index: 100;
}

.site-header .makemake-logo {
  margin-right: auto;
}

.site-header .rps-logo {
  transform: translateX(-10px);
}

.crumb {
  position: absolute;
  text-align: center;
  font-size: 1.8rem;
  left: 50%;
  transform: translateX(-50%);
}

@media screen and (max-width: 600px) {
  .crumb {
    transform: translateX(-50%) translateY(50px);
  }
}
</style>