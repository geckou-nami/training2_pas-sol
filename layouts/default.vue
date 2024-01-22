<script lang="ts" setup>
import imgSrc from '@/assets/images/41128410a1c9c552aff0f685c4bfab3c.jpg';

</script>

<template>
  <main :class="$style.main">
    <SubHero :imageSrc="imgSrc"/>
    
      <slot />
    <SectionFooter />
  </main>
</template>


<style lang = "scss" module>

.main {

}
</style>