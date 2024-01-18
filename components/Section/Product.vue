<script lang="ts" setup>
import imgSrc from '@/assets/images/fdbc5ff355eecda21f063b701c8b6b72.jpg';

type Props = {
  productList: {
    image: string,
    name: string,
    link: string
  }[]
}

const props = defineProps<Props>()
</script>

<template>
  <SubHero :imageSrc="imgSrc"/>
  <SectionContainer>
    <div :class="$style.product_container">
      <div :class="$style.section_title_wrap">
        <SectionTitle sectionName="PRODUCT"/>
        <MoreButton />
      </div>
      <ul :class="$style.product_list">
        <li
          v-for="product in productList"
          :key="product.name"
          :class="$style.product_list_item"
        >
          <img 
            :src="`/images/product/${product.image}`"
            :class="$style.product_img"
          /> 
          <h3>{{ product.name }}</h3>
        </li>
      </ul>
    </div>
    <BackToButton />
  </SectionContainer>
</template>


<style lang="scss" module>
@use '~/assets/scss/mixin' as *;

.product_container{
  width: 100%;

}

.section_title_wrap {
  display: flex;
  align-items: center;
}

.product_list {
  display              : grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap                  : var(--sp-larger) var(--sp-large);

  @include mediaScreen('tablet') {
    display              : flex;
    flex-direction: column;
    gap                  : var(--sp-large) 0;
  }

  h3 {
    font-size : var(--fs-about-page);
    padding   : 0 calc(var(--sp-medium) * 1.3);
    margin-top: var(--sp-medium);

    @include mediaScreen('tablet') {
      padding-left  : var(--sp-large);
    }
  }
}

.product_list_item {

  @include mediaScreen('tablet') {
    display              : flex;

    .product_img {
      width:33%;
    }
  }

  @include mediaScreen('mobile') {
    display              : flex;
    flex-direction: column;
    gap                  : var(--sp-large) 0;

    .product_img {
      width:100%;
    }
  }
}
</style>