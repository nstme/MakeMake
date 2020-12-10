<template>
  <main class="main">
    <site-header/>
    <nuxt/>
  </main>
</template>

<script>
import SiteHeader from '~/components/SiteHeader';

export default {
  name: "main",
  components: {
    SiteHeader,
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

body {
  margin: 0;
  background: #000000;
  font-family: 'RM Neue', sans-serif;
}

.main {
  color: #fdc760;
}
</style>