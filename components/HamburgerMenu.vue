<template>
  <div v-bind:class="[isActive ? 'cross' : '']" class="hamburger-menu" @click="hMenuClicked">
    <div class="line line-1"></div>
    <div class="line line-2"></div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  methods: {
    hMenuClicked () {
      this.$store.commit('clicked');
      this.$store.commit('increment');
    },
  },
  computed: {
    ...mapState({
        isActive: 'isActive'
    }),
  }
}
</script>

<style scoped>
.hamburger-menu {
  height: 12px;
  width: 30px;
  padding: 20px;
  position: fixed;
  top: 0;
  right: 0;
  transform: translateX(-110px) translateY(28px);
  cursor: pointer;
}

.hamburger-menu .line {
  background-color: #fdc760;
  height: 2px;
  width: 30px;
  transition: transform 0.4s ease-in-out;
}

.hamburger-menu .line-2 {
  transform: translateY(8px);
}

.cross.hamburger-menu .line-1 {
  transform: translateY(2px) rotateZ(45deg);
}

.cross.hamburger-menu .line-2 {
  transform: rotateZ(-45deg);
}

</style>