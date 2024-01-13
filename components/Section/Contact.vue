<script lang="ts" setup>

</script>

<template>
  <SectionContainer>
    <div :class="$style.contact_container">
      <SectionTitle />
      <p>お問い合わせはこちらのメールアドレスまでお願いします。</p>
      <a href="#">pas-pol@tabippo.net</a>
    </div>
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

