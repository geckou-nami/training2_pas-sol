<script setup lang="ts">

</script>

<template>
  <div :class="$style.footer_container">
    <div :class="$style.wrapper_1st">
      <a :class="[$style.sns_link, $style.facebook]" href="#">Share on Facebook</a>
      <a :class="[$style.sns_link, $style.twitter]" href="#">Share on twitter</a>
      <a :class="[$style.sns_link, $style.bookmark]" href="#">Hatena Bookmark</a>
    </div>
    <div :class="$style.wrapper_2st">
      <ul :class="$style.footer_menu_list">
        <li><a href="">TOP</a></li>
        <li><a href="">PRODUCT</a></li>
        <li><a href="">ABOUT</a></li>
        <li><a href="">NEWS</a></li>
        <li><a href="">CONTACT</a></li>
    </ul>
    </div>
    <div :class="$style.wrapper_3st">
      <a href="#" :class="$style.footer_logo"><img src="~assets/images/siteLogo-small@2x (1).png" alt="PAL_POL"></a>
      <p :class="$style.copy_right">Copyright © 2024 PAS-POL -旅のモノづくりブランド-｜TABIPPO All rights reserved.</p>
    </div>
  </div>
</template>

<style lang="scss" module>

.footer_container {

}

.wrapper_1st {
  background-color: var(--white);
  display         : flex;
  justify-content : center;
  align-items     : center;
  padding         : calc(var(--sp-large) * 1) 0;
  gap             : var(--sp-large);
}

.wrapper_2st {
  background-color: var(--darkgray);
  display         : flex;
  justify-content : center;
  align-items     : center;
  padding         : calc(var(--sp-large) * 1) 0;
}

.wrapper_3st {
  background-color: var(--light-black);
  display         : flex;
  justify-content : space-between;
  align-items     : center;
  padding         : calc(var(--sp-large) * 1) calc(var(--sp-large) * 11);
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

.footer_menu_list {
  color      : var(--white);
  font-size  : var(--fs-small);
  display    : flex;
  align-items: center;
  gap        : var(--sp-large);

  li{
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