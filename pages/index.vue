<script lang="ts" setup>
const products = await fetch('/json/product.json').then(res => res.json())
const news = await fetch('/json/news.json').then(res => res.json())

definePageMeta({ layout: false })
</script>

<template>
  <div>
    <GlobalNav />
    <HeroImage />
    <GlobalHeader :class="$style.header" />
    <SectionContainer>
      <div :class="$style.message">
        <h2>旅に出よう。</h2>
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
    </SectionContainer>
    <SectionContainer style="background-color: var(--white);">
      <SectionHeader :class="$style.section_header">
        <h2>PRODUCT</h2>
        <template #right>
          <MoreButton
            path="/product"
            :class="$style.more"
          />
        </template>
      </SectionHeader>
      <ProductList :products="products.slice(0, 6)" />
    </SectionContainer>
    <SectionContainer>
      <SectionHeader :class="$style.section_header">
        <h2>NEWS</h2>
        <template #right>
          <MoreButton
            path="/news"
            :class="$style.more"
          />
        </template>
      </SectionHeader>
      <NewsList :news="news.slice(0, 3)" />
    </SectionContainer>
    <FooterPage />
  </div>
</template>

<style lang="scss" module>
@use '~/assets/scss/mixin' as *;

.header {
  position: absolute;
  top     : 0;
  left    : 0;
}

.message {
  display        : flex;
  flex-direction : column;
  justify-content: center;
  gap            : var(--sp-medium);
  max-width      : var(--mobile-lower-width);
  margin         : auto;
  font-size      : var(--fs-large);

  @include mediaScreen('mobile') {
    align-items: start;
  }

  > h2 {
    margin-block-end: var(--sp-large);
    font-size       : var(--fs-larger);
    font-weight     : normal;
    text-align      : center;
  }

  > img {
    margin: var(--sp-large) auto;
    width : calc(var(--bv) * 24);
  }
}

.section_header {
  margin-block-end: var(--sp-larger);
}

.more {
  @include mediaScreen('mobile') {
    display: none;
  }
}
</style>