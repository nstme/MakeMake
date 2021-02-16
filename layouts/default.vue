<template>
  <main>
    <site-header/>
    <nuxt/>
  </main>
</template>

<script>
import SiteHeader from '~/components/SiteHeader';

export default {
  name: "funkhaus-round-1",
  components: {
    SiteHeader,
  },
  methods: {
    set100vhVar() {
      // This fixes the 100vh iOS bug/feature.
      // If less than most tablets, set var to window height.
      let value = ""
      if (this.winWidth <= 1024) {
          value = `${window.innerHeight}px`
      }
      document.documentElement.style.setProperty("--real100vh", value)
    },
  }
}
</script>

<style>
@font-face {
  font-family: 'RM Neue';
  font-style: normal;
  font-weight: 400;
  src: url('~assets/fonts/RMNeue-Regular.woff') format('woff');
}

:root {
  --real100vh: 100vh;
  --yellow: #fdc760;
  --black: #000000;
  --max-width: 80%;
  font-size: 62.5%;
}

body {
  margin: 0;
  background-color: var(--black);
  font-family: 'RM Neue', sans-serif;
  color: var(--yellow);
  height: var(--real100vh);
}

p {
  margin: 0;
  padding: 0;
}
</style>