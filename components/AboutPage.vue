<template>
  <div :class="$style.about_container">
    <img
      src="~assets/images/b517e70559554eb997a7b2ad16f79fa9.jpg"
      alt="PAS-POL"
      :class="$style.about_logo_img"
    >
    <div :class="$style.about_text">
      <p>PAS-POLは世界一周団体TABIPPOのモノづくりブランドです。</p>
      <p>もっとたくさんの若者に旅をしてほしい、という想いで、本や雑貨などのモノづくりをいろは出版と一緒におこなっています。</p>
      <p>
        僕たちが作りたいのは、持っているだけで旅に出たくなるモノ。持っているだけでわくわくするモノです。<br>
        言うならば、新しい時代の”パスポート”のようなものを作りたいと想い、PAS-POLという名前をつけました。
      </p>
      <p>そして、人と人がつながるこんな時代だからこそ、僕たちはみんなで作り上げていくモノづくりを追求していきたいと思います。</p>
    </div>
    <div :class="$style.introduction_wrap">
      <img
        src="~assets/images/about-photo.jpg"
        alt="社員の写真"
        :class="$style.about_company_img"
      >
      <div :class="$style.introduction_text_wrap">
        <h2>世界一周団体TABIPPO</h2>
        <p>全員が世界⼀周を経験したメンバーが学⽣時代に作った組織がTABIPPOです。設⽴して4年半、2014年4⽉に株式会社になりました。創業メンバーは3名。とにかく旅が好きで、たくさんの⼈に旅を広めたい。そう思っています。</p>
        <div :class="$style.website_link_wrap">
          <a
            :class="$style.website_link"
            href="#"
          >TABIPPO WEB SITE</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" module>
@use '~/assets/scss/mixin' as *;

.about_container {
  width: 100%;
}

.about_logo_img {
  width      : 50%;
  margin     : 0 auto;

  @include mediaScreen('tablet') {
    width: 60%;
  }
}

.about_text {
  padding: var(--sp-larger) 0;

  p {
    margin-bottom: var(--sp-medium);
  }
}

.introduction_wrap{
  background-color: var(--white);
  display         : flex;
  gap             : var(--sp-large);
  padding         : var(--sp-large);

  @include mediaScreen('mobile') {
    flex-direction: column;
  }
}

.introduction_text_wrap {
  display         : flex;
  flex-direction: column;
  gap             : var(--sp-medium);

  h2 {
    font-size     : var(--fs-large);
  }
}

.website_link_wrap {
  display        : flex;
  justify-content: flex-end;

  @include mediaScreen('mobile') {
    justify-content: start;
  }
}

.website_link {
  color              : var(--black);
  font-size          : var(--fs-smaller);
  border             : 1px solid var(--black);
  text-align         : center;
  line-height        : 42px;
  width              : 210px;
  background         : url(assets/images/button-open@2x.png) no-repeat;
  background-size    : 10px 10px;
  background-position: 180px 50%;

  &:hover {
    background-color: var(--black);
    color           : var(--white);
    transition      : all 0.5s;
  }
}
</style>