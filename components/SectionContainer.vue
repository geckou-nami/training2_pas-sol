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
@use '~/assets/scss/mixin' as *;
.section_container {
width  : 100%;
padding: 0 calc(var(--sp-large) * 11);
margin : 0 auto;

@include mediaScreen('tablet') {
  padding: 0 calc(var(--sp-large) * 2);
}
}
</style>