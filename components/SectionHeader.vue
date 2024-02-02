<template>
  <header :class="$style.section_header">
    <div :class="$style.heading">
      <slot />
    </div>
    <span
      v-if="$slots.right"
      :class="$style.right"
    >
      <slot name="right" />
    </span>
  </header>
</template>

<style lang="scss" module>
@use '~/assets/scss/mixin' as *;

.section_header {
  display    : flex;
  align-items: center;
}

.heading {
  > * {
    font-size          : var(--fs-larger);
    font-family        : 'Open Sans', sans-serif;
    font-weight        : 400;
    position           : relative;
    padding-block-end  : var(--sp-medium);
    background-image   : url(assets/images/sectionTitle-underLine@2x.png);
    background-repeat  : no-repeat;
    background-size    : 68px 8px;
    background-position: 0 bottom;
  
    @include mediaScreen('mobile') {
      text-align         : center;
      background-position: 50% bottom;
    }
  }
}

.right {
  margin-inline-start: auto;
}
</style>