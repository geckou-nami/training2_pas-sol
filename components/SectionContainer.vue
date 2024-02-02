<template>
  <section :class="$style.section_container">
    <div>
      <slot />
    </div>
  </section>
</template>

<style lang="scss" module>
@use '~/assets/scss/mixin' as *;
.section_container {
  width: 100%;

  > div {
    max-width: var(--section-max-width);
    padding  : var(--sp-max) var(--sp-large);
    margin   : 0 auto;
  }
}
</style>