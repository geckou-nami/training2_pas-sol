<template>
  <main>
    <GlobalNav />
    <SubHero />
    <GlobalHeader :class="$style.header" />
    <SectionContainer>
      <slot />
      <BackButton />
    </SectionContainer>
    <FooterPage />
  </main>
</template>

<style lang="scss" module>
@use '~/assets/scss/mixin' as *;

.header {
  position: absolute;
  top     : 0;
  left    : 0;
}
</style>