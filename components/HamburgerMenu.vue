<script lang="ts" setup>
const isActive =ref(false);

const toggleMenu = () => {
  isActive.value = !isActive.value;
}

</script>

<template>
  <div :class="[$style.menu_container, isActive ? $style.active : '']">
    <div :class="$style.link_list_wrapper">
      <ul :class="$style.link_list">
        <li><a href="#">TOP</a></li>
        <li><a href="#">PRODUCT</a></li>
        <li><a href="#">ABOUT</a></li>
        <li><a href="#">NEWS</a></li>
        <li><a href="#">CONTACT</a></li>
      </ul>
    </div>
    <div :class="$style.link_title_wrapper">
      <p>MENU</p>
      <div 
        :class="$style.hamburger_button"
        @click="toggleMenu"  
      >
        <img 
          src="~assets/images/navigation-toggle@2x.png" 
          alt="menu" 
          :class="$style.hamburger_button_img"
        >
      </div>
    </div>
  </div>
</template>

<style lang = "scss" module>
@use '~/assets/scss/mixin' as *;

.menu_container {
  display: none;

  @include mediaScreen('tablet') {
    display: block;
    z-index: 999;
    position:fixed;
    top:calc((var(--sp-medium) * -10) + (var(--fs-medium) * -5) + -60px);
    left:0;
    width:100%;
    height:100%;;
    transition: all 0.6s;

    &.active {
      top:0;
    }
  }
}
.link_list_wrapper {

  .link_list {
    background-color: rgba(0, 0, 0, 0.7);;
    color           : var(--white);

    li {
      height:50px;
      padding   : var(--sp-medium) var(--sp-larger);
      border-top: 1px solid var(--white);
    }
  }
}

.link_title_wrapper {
  z-index: 9999;
  background-color: var(--white);
  color           : var(--light-black);
  display         : flex;
  justify-content : space-between;
  align-items     : center;
  padding         : var(--sp-medium) var(--sp-larger);
  width:100%;
  height:50px;
}

.hamburger_button {
  cursor: pointer;
}

.hamburger_button_img {
  width : 15px;
  height: 11px;
}
</style>