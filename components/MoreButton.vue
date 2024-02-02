<script lang="ts" setup>
const props = defineProps<{ path: string }>()
</script>

<template>
  <NuxtLink
    :class="$style.more_button"
    :to="path"
  >
    MORE
  </NuxtLink>
</template>

<style lang="scss" module>
.more_button {
  color              : var(--black);
  font-size          : var(--fs-smaller);
  box-shadow         : 0 0 0 1px var(--black);
  text-align         : center;
  width              : calc(var(--bv) * 20);
  padding            : var(--sp-medium);
  background         : url(assets/images/button-arrow@2x.png) no-repeat;
  background-size    : 7px 12px;
  background-position: right var(--sp-medium) center;
  transition         : all .5s;

  &:hover {
    background-color: var(--black);
    color           : var(--white);
  }
}
</style>