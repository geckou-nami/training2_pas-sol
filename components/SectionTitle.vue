<script lang="ts" setup>

</script>

<template>
  <div :class="$style.section_title_container">
    <h1>ABOUT</h1>
    <!-- <img src="~assets/images/sectionTitle-underLine@2x.png" alt="decoration" :class="$style.section_title_decoration"> -->
  </div>
</template>


<style lang="scss" module>

.section_title_container {

  h1 {
    font-size          : 30px;
    font-family        : 'Open Sans', sans-serif;
    font-weight        : 400;
    letter-spacing     : 0.1em;
    position           : relative;
    padding-bottom     : var(--sp-medium);
    background-image   : url(assets/images/sectionTitle-underLine@2x.png);
    background-repeat  : no-repeat;
    background-size    : 68px 8px;
    background-position: 0 bottom;
  }
}
</style>