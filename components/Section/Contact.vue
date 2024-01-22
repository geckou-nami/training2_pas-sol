<script lang="ts" setup>
// import imgSrc from '@/assets/images/7e5b7de0a02f15808796fe8cd4fc3ab3.jpg';

</script>

<template>
    <!-- <SubHero :imageSrc="imgSrc"/> -->
  <SectionContainer>
    <div :class="$style.contact_container">
      <SectionTitle sectionName="CONTACT" />
      <p>お問い合わせはこちらのメールアドレスまでお願いします。</p>
      <a href="#">pas-pol@tabippo.net</a>
    </div>
    <BackToButton />
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

