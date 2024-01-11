<script lang="ts" setup>

</script>

<template>
  <SectionContainer>
    <div :class="$style.about_container">
      <SectionTitle />
      <img src="~assets/images/b517e70559554eb997a7b2ad16f79fa9.jpg" alt="PAS-POL" :class="$style.about_logo_img">
      <div :class="$style.about_text">
        <p>PAS-POLは世界一周団体TABIPPOのモノづくりブランドです。</p>
        <p>もっとたくさんの若者に旅をしてほしい、という想いで、本や雑貨などのモノづくりをいろは出版と一緒におこなっています。</p>
        <p>僕たちが作りたいのは、持っているだけで旅に出たくなるモノ。持っているだけでわくわくするモノです。<br>
          言うならば、新しい時代の”パスポート”のようなものを作りたいと想い、PAS-POLという名前をつけました。</p>
        <p>そして、人と人がつながるこんな時代だからこそ、僕たちはみんなで作り上げていくモノづくりを追求していきたいと思います。</p>
      </div>
      <div :class="$style.about_company">
        <img src="~assets/images/about-photo.jpg" alt="社員の写真" :class="$style.about_company_img">
        <div class="company_description_wrap">
          <h2>世界一周団体TABIPPO</h2>
          <p>全員が世界⼀周を経験したメンバーが学⽣時代に作った組織がTABIPPOです。設⽴して4年半、2014年4⽉に株式会社になりました。創業メンバーは3名。とにかく旅が好きで、たくさんの⼈に旅を広めたい。そう思っています。</p>
        </div>
      </div>
    </div>
  </SectionContainer>
</template>


<style lang="scss" module>

.about_container {
  width: 100%;
}

.about_logo_img {
  width      : 50%;
  margin     : 0 auto;
  padding-top: var(--sp-larger);
}

.about_text {
  padding: var(--sp-larger) 0;

  p{
    margin-bottom: var(--sp-medium);
  }
}
.about_company {
  background-color: var(--white);
  display         : flex;
  gap             : var(--sp-large);
  padding         : var(--sp-large);

  h2 {
    font-size     : var(--fs-large);
    padding-bottom: var(--sp-medium);
  }
}

</style>