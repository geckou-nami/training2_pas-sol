<script lang="ts" setup>
const productList = await fetch('/json/product.json').then(res => res.json())
const newsList = await fetch('/json/news.json').then(res => res.json())

definePageMeta({ layout: false })
</script>

<template>
  <div>
    <GlobalNav />
    <HeroImage />
    <SectionContainer>
      <div :class="$style.main_text_wrapper">
        <h2>旅に出よう。</h2>
        <div :class="$style.hero_description">
          <p>
            僕たちが作りたいのは<br>
            持っているだけで旅に出たくなるモノ。<br>
            持っているだけでわくわくするモノ。
          </p>
          <p>
            それは新しい時代の “パスポート”<br>
            僕たちが作るものは、<br>
            そんな、存在でありたい。
          </p>
          <p>
            そして、人と人が繋がる<br>
            こんな時代だからこそ、<br>
            僕たちは、みんなでひとつのモノを<br>
            作ることを追求したい。
          </p>
          <img
            src="~assets/images/concept-siteLogo@2x.png"
            alt="PAS-POL"
            :class="$style.concept_logo_image"
          >
          <p>
            それは、自分と世界を繋げる<br>
            旅のモノづくりブランド
          </p>
        </div>
      </div>
    </SectionContainer>
    <SectionContainer :class="$style.product_section_container">
      <div :class="$style.section_title_wrap">
        <SectionTitle sectionName="PRODUCT" />
        <NuxtLink to="/product">
          <MoreButton :class="$style.more_button" />
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
        <SectionTitle sectionName="NEWS" />
        <NuxtLink to="/news">
          <MoreButton :class="$style.more_button" />
        </NuxtLink>
      </div>
      <NewsPage 
        :newsList="newsList"
        :limit="3"
        :class="$style.news_list"
      />
    </SectionContainer>
    <FooterPage />
  </div>
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

.main_text_wrapper {
  display        : flex;
  flex-direction : column;
  justify-content: center;
  align-items    : center;
  gap            : var(--sp-larger);
  padding        : calc(var(--sp-larger) * 2) 0;

  @include mediaScreen('mobile') {
    align-items: start;
  }

  h2 {
    font-size     : 44px;
    font-weight   : normal;
    letter-spacing: 0.1em;
  }
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

.hero_description {
  display        : flex;
  flex-direction : column;
  justify-content: left;
  gap            : var(--sp-medium);

  p {
    font-size: var(--fs-about-page);
    text-align: start;
    font-weight: 500;
  }
}

.product_section_container {
  background-color: var(--white);
}
</style>