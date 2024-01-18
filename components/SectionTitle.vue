<script lang="ts" setup>
const props = defineProps<{
  sectionName: string
}>()

</script>

<template>
  <div :class="$style.section_title_container">
    <h1>{{ sectionName }}</h1>
  </div>
</template>


<style lang="scss" module>
@use '~/assets/scss/mixin' as *;

.section_title_container {
  padding-top   : calc(var(--sp-large) * 3.5);
  padding-bottom: calc(var(--sp-large) * 2.5);

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

    @include mediaScreen('mobile') {
      text-align: center;  
      background-position: 50% bottom;
    }
  }
}
</style>