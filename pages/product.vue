<script lang="ts" setup>
const productList = await fetch('/json/product.json').then(res => res.json())

</script>

<template>
  <section>
    <SectionProduct 
      :productList="productList"
    />
  </section>
</template>


<style lang="scss" module>


</style>