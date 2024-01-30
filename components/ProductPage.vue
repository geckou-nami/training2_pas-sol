<script lang="ts" setup>
<<<<<<< HEAD:components/Section/Product.vue
=======

>>>>>>> 7dff6e49d0cc40c46a5d080e872b4031bd54c7e2:components/ProductPage.vue
type Props = {
  productList: {
    image: string,
    name: string,
    link: string
  }[],
  limit?: number
}

const props = defineProps<Props>()

// limit が設定されていれば、その数だけニュースを表示する
const displayedProducts = computed(() => {
  return props.limit ? props.productList.slice(0, props.limit) : props.productList;
});
</script>

<template>
<<<<<<< HEAD:components/Section/Product.vue
  <SectionContainer>
    <div :class="$style.product_container">
      <div :class="$style.section_title_wrap">
        <SectionTitle sectionName="PRODUCT"/>
        <NuxtLink to="/product">
          <MoreButton :class="$style.more_button" />
        </NuxtLink>
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
    <BackToButton :class="$style.back_to_button" />
    <MoreButton :class="$style.more_button" />
  </SectionContainer>
=======
  <div :class="$style.product_container">
    <ul :class="$style.product_list">
      <li
        v-for="product in displayedProducts"
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
>>>>>>> 7dff6e49d0cc40c46a5d080e872b4031bd54c7e2:components/ProductPage.vue
</template>


<style lang="scss" module>
@use '~/assets/scss/mixin' as *;

.product_container{
  width: 100%;
}

.section_title_wrap {
  display    : flex;
  align-items: center;
  justify-content: space-between;

  .more_button{
    display: block;

    @include mediaScreen('mobile') {
      display: none;
    }
  }
}

.product_list {
  display              : grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap                  : var(--sp-larger) var(--sp-large);

  @include mediaScreen('tablet') {
    display       : flex;
    flex-direction: column;
    gap           : var(--sp-large) 0;
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
    display: flex;

    .product_img {
      width: 33%;
    }
  }

  @include mediaScreen('mobile') {
    display       : flex;
    flex-direction: column;
    gap           : var(--sp-large) 0;

    .product_img {
      width: 100%;
    }
  }
}

button {
  width     : 100%;
  text-align: center;

  .back_to_button {
    display: block;

    @include mediaScreen('mobile') {
      display   : none;
      padding   : calc(var(--sp-larger) * 1.5) 0;
      text-align: center;
    }
  }

  .more_button{
    display: none;

    @include mediaScreen('mobile') {
      display   : block;
      padding   : calc(var(--sp-larger) * 1.5) 0;
      text-align: center;
    }
  }
}
</style>