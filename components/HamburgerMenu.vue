<template>
  <div class="hamburger-menu">
    <div class="line line-1"></div>
    <div class="line line-2"></div>
  </div>
</template>

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
}

.hamburger-menu .line-2 {
  transform: translateY(8px);
}

</style>