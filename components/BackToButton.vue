<template>
  <div :class="$style.back_button_container">
    <a :class="$style.back_button"><NuxtLink to="/">BACK TO TOP</NuxtLink></a>
  </div>
</template>

<style lang="scss" module>

.back_button_container {
  width:100%;
  display: flex;
  justify-content: center;
  align-content: center;
  padding: calc(var(--sp-larger) * 1.5) 0;
}

.back_button {
  color              : var(--black);
  font-size          : var(--fs-smaller);
  border             : 1px solid var(--black);
  text-align         : center;
  line-height        : 46px;
  width              : 210px;
  background         : url(assets/images/button-arrow-back2x.png) no-repeat;
  background-size    : 7px 12px;
  background-position: 14px 50%;

  &:hover {
    background-color: var(--black);
    color           : var(--white);
    transition      : all 0.5s;
  }
}
</style>