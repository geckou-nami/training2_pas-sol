<script lang="ts" setup>
import { navItems } from '~/assets/const/nav-items'
const isActive = ref(false)
const toggleMenu = () => isActive.value = !isActive.value
</script>

<template>
  <nav
    :class="[
      $style.global_nav,
      { [$style.active]: isActive },
    ]"
  >
    <ul :class="$style.link_list">
      <li
        v-for="item in navItems"
        :key="item.name"
      >
        <NuxtLink :to="item.path">
          {{ item.name }}
        </NuxtLink>
      </li>
    </ul>
    <button
      :class="$style.menu_button"
      type="button"
      @click="toggleMenu"
    >
      <span>MENU</span>
      <img
        src="~assets/images/navigation-toggle@2x.png"
        alt="menu"
      >
    </button>
  </nav>
</template>

<style lang = "scss" module>
@use '~/assets/scss/mixin' as *;

.global_nav {
  --nav-item-height: calc(var(--bv) * 8);
  display: none;

  @include mediaScreen('tablet') {
    display   : block;
    z-index   : var(--z-index-max);
    position  : fixed;
    top       : calc(var(--nav-item-height) * -5);
    left      : 0;
    width     : 100%;
    transition: all .4s ease-in-out;

    &.active {
      top: 0;
    }
  }
}

.link_list {
  background-color: var(--overlay-color);
  backdrop-filter : blur(8px);
  color           : var(--white);

  > li {
    position: relative;

    &:not(:first-child) {
      &::before {
        content         : '';
        display         : block;
        width           : 100%;
        height          : 1px;
        background-color: var(--white);
        position        : absolute;
        top             : 0;
        left            : 0;
      }
    }

    > a {
      display    : flex;
      align-items: center;
      height     : var(--nav-item-height);
      padding    : var(--sp-medium) var(--sp-larger);
    }
  }
}

.menu_button {
  display        : flex;
  padding        : var(--sp-medium) var(--sp-larger);
  justify-content: space-between;
  align-items    : center;
  width          : 100%;
  height          : var(--nav-item-height);
  background-color: var(--white);
  color          : var(--light-black);
  gap            : var(--sp-min);

  > img {
    width: calc(var(--bv) * 3);
  }
}
</style>