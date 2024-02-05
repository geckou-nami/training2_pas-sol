<script lang="ts" setup>
const products = await fetch('/json/product.json').then(res => res.json())
</script>

<template>
  <div>
    <SectionHeader style="margin-block-end: var(--sp-larger);">
      <h1>PRODUCT</h1>
    </SectionHeader>
    <ProductList :products="products" />
  </div>
</template>