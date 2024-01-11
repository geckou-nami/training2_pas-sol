<script setup lang="ts">

</script>

<template>
  <section>
    <div :class="$style.section_container">
      <slot />
    </div>
  </section>
</template>

<style lang="scss" module>
.section_container {
  background-color: var(--base-color);
  width     : 100%;
  min-height: 100dvh;
  padding   : calc(var(--sp-larger) * 2) calc(var(--sp-large) * 11);
  margin    : 0 auto;

  /* @include mediaScreen('mobile') {
    padding: calc(var(--sp-large) * 10) calc(var(--border-margin) * 2);
  } */
}
</style>