<script lang="ts" setup>

</script>

<template>
  <div :class="$style.hero_container">
    <MainHeader :class="$style.header" />
    <div :class="$style.main_pic_wrapper">
      <img src="~assets/images/main_visual_13-0x0.jpg" alt="世界中の風景" :class="$style.main_pic">
      <img src="~assets/images/mainVisual-overlay@2x (1).png" alt="overlay" :class="$style.bottom_image">
    </div>
    <div :class="$style.main_text_wrapper">
      <h2>旅に出よう。</h2>
      <div :class="$style.hero_description">
        <p>僕たちが作りたいのは<br>
          持っているだけで旅に出たくなるモノ。<br>
          持っているだけでわくわくするモノ。
        </p>
        <p>それは新しい時代の “パスポート”<br>
          僕たちが作るものは、<br>
          そんな、存在でありたい。
        </p>
        <p>そして、人と人が繋がる<br>
          こんな時代だからこそ、<br>
          僕たちは、みんなでひとつのモノを<br>
          作ることを追求したい。
        </p>
        <img src="~assets/images/concept-siteLogo@2x.png" alt="PAS-POL" :class="$style.concept_logo_image">
        <p>それは、自分と世界を繋げる<br>
          旅のモノづくりブランド
        </p>
      </div>
    </div>
  </div>
</template>


<style lang="scss" module>
.hero_container {
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

  .bottom_image {
    position: absolute;
    bottom  : 0;
    left    : 0;
  }
}

.main_text_wrapper {
  display        : flex;
  flex-direction : column;
  justify-content: center;
  align-items    : center;
  gap            : var(--sp-larger);
  padding        : calc(var(--sp-larger) * 2) 0;

  h2 {
    font-size     : 44px;
    font-weight   : normal;
    letter-spacing: 0.1em;
  }
}

.hero_description {
  display        : flex;
  flex-direction : column;
  justify-content: left;
  gap            : var(--sp-medium);

  p {
    font-size : var(--fs-large);
    text-align: start;
    font-weight: 500;
  }
}

.concept_logo_image {
  width  : calc(var(--bv) * 25);
  margin : 0 auto;
  padding: var(--sp-medium) 0;
}

</style>