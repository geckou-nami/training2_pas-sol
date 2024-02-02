<script lang="ts" setup>
const props = defineProps<{
  products: {
    image: string,
    name: string,
    link: string
  }[],
  limit?: number
}>()
</script>

<template>
  <div :class="$style.product_container">
    <ul :class="$style.product_list">
      <li
        v-for="product in products"
        :key="product.name"
        :class="$style.product_list_item"
      >
        <img 
          :src="`/images/product/${product.image}`"
          :class="$style.product_img"
        > 
        <h3>{{ product.name }}</h3>
      </li>
    </ul>
  </div>
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