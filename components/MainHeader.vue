<template>
  <div :class="$style.header_container">
    <h1>
      <NuxtLink to="/">
        <img
          src="~assets/images/siteLogo-pc@2x (1).png"
          alt="PAS-SOL"
          :class="$style.main_logo"
        >
      </NuxtLink>
    </h1>
    <ul :class="$style.menu_list">
      <li>
        <NuxtLink to="/">
          TOP
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/product">
          PRODUCT
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/about">
          ABOUT
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/news">
          NEWS
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/contact">
          CONTACT
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>


<style lang="scss" module>
 @use '~/assets/scss/mixin' as *;

.header_container {
  background-color: transparent;
  display         : flex;
  justify-content : space-between;
  padding         : calc(var(--sp-large) * 1.5) calc(var(--sp-large) * 3.5);

  @include mediaScreen('tablet') {
    display: none;
  }
}

.main_logo {
  width: calc(var(--bv) * 35);
}

.menu_list {
  color      : var(--white);
  font-size  : var(--fs-small);
  display    : flex;
  align-items: center;
  gap        : var(--sp-large);

  li{
    position: relative;

    &::after{
      content         : "";
      width           : 100%;
      height          : 2px;
      background-color: var(--white);
      position        : absolute;
      bottom          : -6px;
      left            : 0;
      transition      : all 0.3s;
      opacity         : 0;
    }

    &:hover::after {
      opacity: 1;
    }
  }
}
</style>