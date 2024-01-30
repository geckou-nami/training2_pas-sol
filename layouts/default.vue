<template>
  <main>
    <HamburgerMenu />
    <SubHero />
    <SectionContainer>
      <slot />
      <BackToButton />
    </SectionContainer>
    <FooterPage />
  </main>
</template>