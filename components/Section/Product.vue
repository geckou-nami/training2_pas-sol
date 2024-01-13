<script lang="ts" setup>

</script>

<template>
  <SectionContainer>
    <div :class="$style.product_container">
      <SectionTitle />
      <div :class="$style.product_list">
        <div :class="$style.product_listitem">
          <img src="~assets/images/products/wh_thumb2 (1).png" alt="#" :class="$style.product_img">
          <h3 :class="$style.product_title">地球一周 365日 世界遺産絶景の旅</h3>
        </div>
        <div :class="$style.product_listitem">
          <img src="~assets/images/products/wh_thumb2 (1).png" alt="#" :class="$style.product_img">
          <h3 :class="$style.product_title">地球一周 365日 世界遺産絶景の旅</h3>
        </div>
        <div :class="$style.product_listitem">
          <img src="~assets/images/products/wh_thumb2 (1).png" alt="#" :class="$style.product_img">
          <h3 :class="$style.product_title">地球一周 365日 世界遺産絶景の旅</h3>
        </div>
        <div :class="$style.product_listitem">
          <img src="~assets/images/products/wh_thumb2 (1).png" alt="#" :class="$style.product_img">
          <h3 :class="$style.product_title">地球一周 365日 世界遺産絶景の旅</h3>
        </div>
        <div :class="$style.product_listitem">
          <img src="~assets/images/products/wh_thumb2 (1).png" alt="#" :class="$style.product_img">
          <h3 :class="$style.product_title">地球一周 365日 世界遺産絶景の旅</h3>
        </div>
        <div :class="$style.product_listitem">
          <img src="~assets/images/products/wh_thumb2 (1).png" alt="#" :class="$style.product_img">
          <h3 :class="$style.product_title">地球一周 365日 世界遺産絶景の旅</h3>
        </div>
        <div :class="$style.product_listitem">
          <img src="~assets/images/products/wh_thumb2 (1).png" alt="#" :class="$style.product_img">
          <h3 :class="$style.product_title">地球一周 365日 世界遺産絶景の旅</h3>
        </div>
        <div :class="$style.product_listitem">
          <img src="~assets/images/products/wh_thumb2 (1).png" alt="#" :class="$style.product_img">
          <h3 :class="$style.product_title">地球一周 365日 世界遺産絶景の旅</h3>
        </div>
        <div :class="$style.product_listitem">
          <img src="~assets/images/products/wh_thumb2 (1).png" alt="#" :class="$style.product_img">
          <h3 :class="$style.product_title">地球一周 365日 世界遺産絶景の旅</h3>
        </div>
      </div>
    </div>
  </SectionContainer>
</template>


<style lang="scss" module>

.product_container{

}

.product_list {
  display              : grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap                  : var(--sp-larger) var(--sp-large);
}

.product_title {
  font-size : var(--fs-large);
  padding   : 0 var(--sp-medium);
  margin-top: var(--sp-medium);
}
</style>