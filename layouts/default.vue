<template>
  <main :class="$style.main">
    <HamburgerMenu />
    <SubHero />
      <SectionContainer>
        <slot />
        <BackToButton />
      </SectionContainer>
    <FooterPage />
  </main>
</template>


<style lang = "scss" module>

.main {

}
</style>