<script lang="ts" setup>
const productList = await fetch('/json/product.json').then(res => res.json())
const newsList = await fetch('/json/news.json').then(res => res.json())

definePageMeta({ layout: false })

</script>

<template>
  <HamburgerMenu />
  <HeroPage />
  <SectionContainer :class="$style.product_section_container">
    <div :class="$style.section_title_wrap">
      <SectionTitle sectionName="PRODUCT"/>
      <NuxtLink to="/product">
        <MoreButton :class="$style.more_button"/>
      </NuxtLink>
    </div>
    <ProductPage 
      :productList="productList"
      :limit="6"
      :class="$style.product_list"
    />
  </SectionContainer>
  <SectionContainer>
    <div :class="$style.section_title_wrap">
      <SectionTitle sectionName="NEWS"/>
      <NuxtLink to="/news">
        <MoreButton :class="$style.more_button"/>
      </NuxtLink>
    </div>
    <NewsPage 
      :newsList="newsList"
      :limit="3"
      :class="$style.news_list"
    />
  </SectionContainer>
  <FooterPage />
</template>


<style lang="scss" module>
@use '~/assets/scss/mixin' as *;
.product_list {
  background-color: var(--white);
  padding-bottom: calc(var(--sp-larger) * 2);
}

.news_list {
  padding-bottom: calc(var(--sp-larger) * 2);
}

.section_title_wrap {
  display        : flex;
  align-items    : center;
  justify-content: space-between;

  .more_button{
    display: block;

    @include mediaScreen('mobile') {
      display   : none;
    }
  }
}

.product_section_container {
  background-color: var(--white);
}
</style>