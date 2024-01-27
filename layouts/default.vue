<template>
  <main :class="$style.main">
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