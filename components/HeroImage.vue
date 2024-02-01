<script lang="ts" setup>
import heroImage1 from '~/assets/images/main_visual_111-0x0.jpg'
import heroImage2 from '~/assets/images/main_visual_13-0x0.jpg'
import heroImage3 from '~/assets/images/main_visual_7-0x0.jpg'
import heroImage4 from '~/assets/images/main_visual_6-0x0.jpg'
import heroImage5 from '~/assets/images/main_visual_2-0x0.jpg'

const pictures = [
  heroImage2,
  heroImage3,
  heroImage4,
  heroImage5,
  heroImage1,
]
</script>

<template>
  <div :class="$style.hero_image">
    <img
      :src="pictures[pictures.length - 1]"
      alt="heroImage_bg"
      :class="$style.image"
    >
    <img
      v-for="(picture, index) in pictures"
      :key="`heroImage_${index}`"
      :src="picture"
      :alt="`hero image${index}`"
      :class="$style.image"
      :style="{ animationDelay: `${index * 6}s` }"
    >
    <span :class="$style.small_device_logo">
      <img
        src="~assets/images/siteLogo-sp.png"
        alt="PAS-POL"
      >
    </span>
    <span :class="$style.arrow">
      <img
        src="~assets/images/mainVisual-arrow@2x.png"
        alt="arrow"
        width="44px"
        height="26px"
      >
    </span>
  </div>
</template>

<style lang="scss" module>
@use '~/assets/scss/mixin' as *;

@keyframes fadeOut {
  0% {
    opacity: 1;
  }

  50% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}

@keyframes slideShow {
  0% {
    opacity: 0;
  }

  50% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}

.hero_image {
  background-color: var(--light-gray);
  width           : 100%;
  height          : 100vh;
  position        : relative;
  clip-path       : ellipse(200% 100% at center 0);
}

.image {
  width                    : 100%;
  height                   : 100%;
  object-fit               : cover;
  position                 : absolute;
  opacity                  : 0;
  animation-name           : slideShow;
  animation-duration       : 12s;
  animation-timing-function: ease-in-out;
  animation-fill-mode      : forwards;
  animation-iteration-count: infinite;

  &:first-of-type {
    animation-name           : fadeOut;
    opacity                  : 1;
    animation-iteration-count: 1;
  }
}

.small_device_logo {
  display        : none;
  display        : inline-flex;
  justify-content: center;
  height         : calc(var(--bv) * 30);
  margin         : auto;
  position       : absolute;
  top            : 0;
  right          : 0;
  bottom         : 0;
  left           : 0;

  > img {
    object-fit: contain;
  }

  @include mediaScreen('tablet') {
    display: inline-flex;
  }
}

.arrow {
  display : inline-block;
  width   : calc(var(--bv) * 4);
  margin  : auto;
  position: absolute;
  right   : 0;
  bottom  : 7%;
  left    : 0;

  > img {
    object-fit: contain;
  }
}
</style>