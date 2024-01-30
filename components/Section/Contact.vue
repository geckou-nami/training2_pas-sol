<template>
  <SectionContainer>
    <div :class="$style.contact_container">
      <SectionTitle sectionName="CONTACT" />
      <p>お問い合わせはこちらのメールアドレスまでお願いします。</p>
      <a href="#">pas-pol@tabippo.net</a>
    </div>
    <BackButton />
  </SectionContainer>
</template>


<style lang="scss" module>
.contact_container{
  p {
    margin-bottom: var(--sp-large);
  }

  a {
    text-decoration: underline;
  }
}
</style>

