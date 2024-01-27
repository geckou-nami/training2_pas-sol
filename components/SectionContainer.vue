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
  max-width : 786px;
  box-sizing: content-box;
  padding   : 0 7%;
  margin    : 0 auto;
}
</style>