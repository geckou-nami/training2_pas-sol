<script lang="ts" setup>
const isActive = ref(false)

const changePage = () => {
  isActive.value = !isActive.value
}

</script>

<template>
  <div :class="$style.pagination_container">
    <div :class="$style.pagination">
      <NuxtLink 
        to="/"
        :class="[$style.pagination_button, isActive ? $style.active : '']"
        @click="changePage"
      >
        &lt;
      </NuxtLink>
      <NuxtLink 
        to="/"
        :class="[$style.pagination_button, isActive ? $style.active : '']"
        @click="changePage"
      >
        1
        {{ isActive }}
      </NuxtLink>
      <NuxtLink 
        to="/"
        :class="[$style.pagination_button, isActive ? $style.active : '']"
        @click="changePage"
      >
        2
      </NuxtLink>
      <NuxtLink 
        to="/"
        :class="[$style.pagination_button, isActive ? $style.active : '']"
        @click="changePage"
      >
        3
      </NuxtLink>
      <NuxtLink 
        to="/"
        :class="[$style.pagination_button, isActive ? $style.active : '']"
        @click="changePage"
      >
        &gt;
      </NuxtLink>
    </div>
  </div>
</template>

<style lang="scss" module>
@use '~/assets/scss/mixin' as *;

.pagination_container {
  text-align    : center;
  padding-top   : calc(var(--sp-large) * 6);
  padding-bottom: var(--sp-large);
}

.pagination {
  display: inline-block;
}

.pagination_button {
  color          : var(--black);
  float          : left;
  padding        : 6px 14px;
  text-decoration: none;
  transition     : background-color .3s;
  border         : 1px solid var(--black);
  margin         : 0 5px;

  &.active {
    background-color: transparent;
    color           : #cccfd0;
    border          : 1px solid #cccfd0;
  }

  &:hover {
    background-color: var(--light-black);
    color           : var(--white);
  }
}
</style>