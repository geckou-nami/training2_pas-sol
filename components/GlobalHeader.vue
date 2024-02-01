<script lang="ts" setup>
import { navItems } from '~/assets/const/nav-items'
</script>

<template>
  <header :class="$style.global_header">
    <h1>
      <NuxtLink to="/">
        <img
          src="~assets/images/siteLogo-pc@2x (1).png"
          alt="PAS-SOL"
          :class="$style.logo"
        >
      </NuxtLink>
    </h1>
    <nav :class="$style.nav">
      <NuxtLink
        v-for="item in navItems"
        :key="item.name"
        :to="item.path"
      >
        {{ item.name }}
      </NuxtLink>
    </nav>
  </header>
</template>


<style lang="scss" module>
 @use '~/assets/scss/mixin' as *;

.global_header {
  display: flex;
  width  : 100%;
  padding: var(--sp-large) var(--sp-larger);

  @include mediaScreen('tablet') {
    display: none;
  }
}

.logo {
  width: calc(var(--bv) * 35);
}

.nav {
  color              : var(--white);
  font-size          : var(--fs-small);
  display            : flex;
  align-items        : center;
  gap                : var(--sp-large);
  margin-inline-start: auto;

  > a {
    position: relative;
    padding : var(--sp-small);

    &::after{
      content         : '';
      width           : 100%;
      height          : 2px;
      background-color: var(--white);
      position        : absolute;
      bottom          : 0;
      left            : 0;
      transition      : opacity .3s;
      opacity         : 0;
    }

    &:hover::after {
      opacity: 1;
    }
  }
}
</style>