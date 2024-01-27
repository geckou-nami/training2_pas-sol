<script lang="ts" setup>
const productList = await fetch('/json/product.json').then(res => res.json())

</script>

<template>
  <section>
    <SectionTitle sectionName="PRODUCT"/>
    <ProductPage 
      :productList="productList"
    />
  </section>
</template>


<style lang="scss" module>


</style>