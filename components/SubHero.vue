<script lang="ts" setup>

</script>

<template>
  <div :class="$style.subheader_container">
    <MainHeader :class="$style.header" />
    <div :class="$style.main_pic_wrapper">
      <img src="~assets/images/41128410a1c9c552aff0f685c4bfab3c.jpg" alt="世界中の風景" :class="$style.main_pic">
      <img src="~assets/images/mainVisual-overlay@2x (1).png" alt="overlay" :class="$style.bottom_image">
    </div>
  </div>
</template>


<style lang="scss" module>

.subheader_container {
  background-color: var(--lightgray);
  width           : 100%;
  position        : relative;
}

.header {
  width   : 100%;
  position: absolute;
  top     : 0;
  left    : 0;
  z-index : var(--z-index-nav);
}

.main_pic_wrapper {
  position: relative;

  .bottom_image {
    position: absolute;
    bottom  : 0;
    left    : 0;
  }
}
</style>