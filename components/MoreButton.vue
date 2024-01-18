<script setup lang="ts">

</script>

<template>
  <div :class="$style.more_button_container">
    <a :class="$style.more_button" href="#">MORE</a>
  </div>
</template>

<style lang="scss" module>

.more_button_container {
  width     : 100%;
  text-align: end;
}

.more_button {
  color              : var(--black);
  font-size          : var(--fs-smaller);
  border             : 1px solid var(--black);
  text-align         : center;
  line-height        : 46px;
  width              : 162px;
  background         : url(assets/images/button-arrow@2x.png) no-repeat;
  background-size    : 7px 12px;
  background-position: 140px 50%;

  &:hover {
    background-color: var(--black);
    color           : var(--white);
    transition      : all 0.5s;
  }
}
</style>