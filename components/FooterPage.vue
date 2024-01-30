<script setup lang="ts">

// scrollToTop 関数を定義
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

</script>

<template>
  <div :class="$style.footer_container">
    <img 
      src="~assets/images/backTop@2x (1).png" 
      alt="上に戻る" 
      :class="$style.back_top_button"
      @click="scrollToTop"
    >
    <div :class="$style.wrapper_1st">
      <a :class="[$style.sns_link, $style.facebook]" href="#">Share on Facebook</a>
      <a :class="[$style.sns_link, $style.twitter]" href="#">Share on twitter</a>
      <a :class="[$style.sns_link, $style.bookmark]" href="#">Hatena Bookmark</a>
      <a :class="[$style.sns_link, $style.line]" href="#">Send to LINE</a>
    </div>
    <div :class="$style.wrapper_2st">
      <ul :class="$style.footer_menu_list">
        <li><a href=""><NuxtLink to="/">TOP</NuxtLink></a></li>
        <li><a href=""><NuxtLink to="/product">PRODUCT</NuxtLink></a></li>
        <li><a href=""><NuxtLink to="/about">ABOUT</NuxtLink></a></li>
        <li><a href=""><NuxtLink to="/news">NEWS</NuxtLink></a></li>
        <li><a href=""><NuxtLink to="/contact">CONTACT</NuxtLink></a></li>
      </ul>
    </div>
    <div :class="$style.wrapper_3st">
      <a href="#" :class="$style.footer_logo"><img src="~assets/images/siteLogo-small.png" alt="PAL_POL"></a>
      <p :class="$style.copy_right">Copyright © 2024 PAS-POL -旅のモノづくりブランド-｜TABIPPO All rights reserved.</p>
    </div>
  </div>
</template>

<style lang="scss" module>
@use '~/assets/scss/mixin' as *;
.footer_container {
  position: relative;
  width   : 100%;
}

.back_top_button {
  display    : block;
  width      : 50px;
  position   : absolute;
  top        : -5px;
  left       : 50%;
  margin-left: -25px;
  margin-top : -25px;
  cursor     : pointer;
}

.wrapper_1st {
  background-color: var(--white);
  display         : flex;
  justify-content : center;
  align-items     : center;
  padding         : calc(var(--sp-large) * 1.5) 0;
  gap             : var(--sp-large);

  @include mediaScreen('mobile') {
    flex-wrap: wrap;
    gap             : var(--sp-medium);
  }
}

.wrapper_2st {
  background-color: var(--darkgray);
  display         : flex;
  justify-content : center;
  align-items     : center;
  padding         : calc(var(--sp-large) * 1) 0;

  @include mediaScreen('mobile') {
    padding       : 0;
  }
}

.wrapper_3st {
  background-color: var(--light-black);
  display         : flex;
  justify-content : space-evenly;
  align-items     : center;
  padding         : calc(var(--sp-large) * 1);

  @include mediaScreen('mobile') {
    display       : flex;
    flex-direction: column;
    gap           : var(--sp-large);
    padding       : calc(var(--sp-large) * 2) 0;
  }
}

.sns_link {
  color      : var(--facebook-color);
  font-size  : var(--fs-smaller);
  border     : 1px solid var(--facebook-color);
  width      : 162px;
  height     : 46px;
  text-align : center;
  line-height: 46px;

  &:hover {
    background-color: var(--facebook-color);
    color           : var(--white);
    transition      : all 0.5s;
  }
}

.twitter {
  color : var(--twitter-color);
  border: 1px solid var(--twitter-color);

  &:hover {
    background-color: var(--twitter-color);
    color           : var(--white);
  }
}

.bookmark {
  color : var(--bookmark-color);
  border: 1px solid var(--bookmark-color);

  &:hover {
    background-color: var(--bookmark-color);
    color           : var(--white);
  }
}

.line {
  display: none;
  color : var(--line-color);
  border: 1px solid var(--line-color);

  @include mediaScreen('mobile') {
    display       : flex;
    flex-direction: column;
    font-size: 14px;
    gap:0;
  }

  &:hover {
    background-color: var(--line-color);
    color           : var(--white);
  }
}

.footer_menu_list {
  color      : var(--white);
  font-size  : var(--fs-small);
  display    : flex;
  align-items: center;
  justify-content: center;
  gap        : var(--sp-large);

  @include mediaScreen('mobile') {
    width         : 100%;
    display       : flex;
    flex-direction: column;
    font-size     : 14px;
    gap           : 0;
  }

  li{
  width:100%;
  text-align: center;

    @include mediaScreen('mobile') {
      border-top: 1px solid var(--white);
      padding   : 1em 7%;
    }

    &:hover {
      opacity: .7;
    }
  }
}

.footer_logo {
    width : 90px;
    height: 89px;
  }

  .copy_right {
    font-size: var(--fs-min);
    color    : var(--white);
  }
</style>