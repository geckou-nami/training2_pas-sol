<script lang="ts" setup>

</script>

<template>
  <div :class="$style.hero_container">
    <MainHeader :class="$style.header" />
    <div :class="$style.main_pic_wrapper">
      <div :class="$style.main_pic_box">
        <div :class="$style.main_pic" />
        <div :class="$style.main_pic" />
        <div :class="$style.main_pic" />
        <div :class="$style.main_pic" />
        <div :class="$style.main_pic" />
      </div>
      <div :class="$style.bottom_pic" />
      <div :class="$style.sp_logo_pic" />
      <div :class="$style.arrow_pic"/>
    </div>
    <SectionContainer>
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
    </SectionContainer>
  </div>
</template>


<style lang="scss" module>
 @use '~/assets/scss/mixin' as *;

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
  width   : 100%;
}

.main_pic_box {
    position: relative;
    width   : 100%;
    height  : 100vh;
}


.main_pic {
  position                 : absolute;
  top                      : 0px;
  left                     : 0px;
  width                    : 100%;
  height                   : 100vh;
  background-repeat        : no-repeat;
  background-size          : cover;
  background-position      : center;
  opacity                  : 0;
  animation-name           : slideShow;
  animation-duration       : 30s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;

  &:nth-of-type(1) {
    background-image: url(assets/images/main_visual_111-0x0.jpg)
  }
  &:nth-of-type(2) {
    background-image: url(assets/images/main_visual_13-0x0.jpg);
    animation-delay : 6s;
  }
  &:nth-of-type(3) {
    background-image: url(assets/images/main_visual_7-0x0.jpg);
    animation-delay : 12s;
  }
  &:nth-of-type(4) {
    background-image: url(assets/images/main_visual_6-0x0.jpg);
    animation-delay : 18s;
  }
  &:nth-of-type(5) {
    background-image: url(assets/images/main_visual_2-0x0.jpg);
    animation-delay : 24s;
  }
}

.bottom_pic {
  width              : 100%;
  height             : 100%;
  background-image   : url(assets/images/mainVisual-overlay.png);
  background-repeat: no-repeat;
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
    width              : 197px;
    height             : 178px;
    background-image   : url(assets/images/siteLogo-sp.png);
    background-repeat  : no-repeat;
    background-size    : contain;
    background-position: center center;
    position           : absolute;
    top                : 50%;
    left               : 50%;
    transform          : translate(-50%, -50%);
    z-index: 99;
  }
}

.arrow_pic {
  width              : 100%;
  height             : 12px;
  background-image   : url(assets/images/mainVisual-arrow@2x.png);
  background-repeat  : no-repeat;
  background-size    : contain;
  background-position: center bottom;
  position           : absolute;
  bottom             : 7%;
  left               : 0;
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

.concept_logo_image {
  width  : calc(var(--bv) * 25);
  margin : 0 auto;
  padding: var(--sp-medium) 0;
}


@keyframes slideShow {
  0% {
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  20% {
    opacity: 1;
  }
  30% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
</style>