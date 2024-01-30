<script lang="ts" setup>
import about from '@/assets/images/41128410a1c9c552aff0f685c4bfab3c.jpg'
import newsImage from '@/assets/images/5aafae338835b1fd1119f273565bd3de1.jpg'
import contact from '@/assets/images/7e5b7de0a02f15808796fe8cd4fc3ab3.jpg'
import product from '@/assets/images/fdbc5ff355eecda21f063b701c8b6b72.jpg'

const route = useRoute()

const currentImageSrc = computed(() => {
  const currentRouteName = route.name
  return (() => {
    switch (currentRouteName) {
      case 'about':
        return about
      case 'news':
        return newsImage
      case 'contact':
        return contact
      case 'product':
        return product
      default:
        return ''
    }
  })()
})
</script>

<template>
  <div :class="$style.subheader_container">
    <MainHeader :class="$style.header" />
    <div :class="$style.main_pic_wrapper">
      <div 
        :class="$style.main_pic" 
        :style="{
          'background-image': `url(${currentImageSrc})`
        }" 
      />
      <div :class="$style.bottom_pic" />
      <div :class="$style.sp_logo_pic" />
    </div>
  </div>
</template>


<style lang="scss" module>
@use '~/assets/scss/mixin' as *;

.subheader_container {
  background-color: var(--lightgray);
  width           : 100%;
  position        : relative;
}

.header {
  width   : 100%;
  position: absolute;
  top     : 0;
  left    : 0;
  z-index : var(--z-index-nav);
}

.main_pic_wrapper {
  position: relative;
  width:100%;
  height:100%;
}

.main_pic {
  width              : 100%;
  height             : 295px;
  background-repeat  : no-repeat;
  background-size    : cover;
  background-position: center;
}

.bottom_pic {
  width              : 100%;
  height             : 100%;
  background-image   : url(assets/images/mainVisual-overlay.png);
  background-repeat  : no-repeat;
  background-size    : contain;
  background-position: 0 bottom;
  position           : absolute;
  bottom             : 0;
  left               : 0;
}

.sp_logo_pic {
  display: none;

  @include mediaScreen('tablet') {
    display            : block;
    width              : 130px;
    height             : 128px;
    background-image   : url(assets/images/siteLogo-sp.png);
    background-repeat  : no-repeat;
    background-size    : contain;
    background-position: center center;
    position           : absolute;
    top                : 50%;
    left               : 50%;
    transform          : translate(-50%, -50%);
  }
}
</style>