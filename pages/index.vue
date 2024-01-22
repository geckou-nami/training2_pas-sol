<script lang="ts" setup>
const productList = await fetch('/json/product.json').then(res => res.json())
const newsList = await fetch('/json/news.json').then(res => res.json())

definePageMeta({ layout: false })

</script>

<template>
  <HamburgerMenu />
  <SectionHero />
  <SectionProduct 
    :productList="productList"
    :class="$style.product"
  />
  <SectionNews 
    :newsList="newsList"
  />
  <SectionContact 
    :class="$style.contact"
  />
  <PaginationLink />
  <SectionFooter />
</template>


<style lang="scss" module>

.product {
  background-color: var(--white);
}

.contact {
  background-color: var(--white);
}
</style>