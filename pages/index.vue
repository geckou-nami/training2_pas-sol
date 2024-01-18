<script lang="ts" setup>
const productList = await fetch('/json/product.json').then(res => res.json())
const newsList = await fetch('/json/news.json').then(res => res.json())

</script>

<template>
  <SectionHero />
  <SectionAbout />
  <SectionProduct 
    :productList="productList"
  />
  <SectionNews 
    :newsList="newsList"
  />
  <SectionContact />
  <SectionFooter />
</template>


<style lang="scss" module>

</style>