<script lang="ts" setup>
const productList = await fetch('/json/product.json').then(res => res.json())
</script>

<template>
  <section>
    <SectionTitle sectionName="PRODUCT" />
    <ProductList :productList="productList" />
  </section>
</template>