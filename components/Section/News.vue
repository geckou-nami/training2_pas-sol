<script lang="ts" setup>

</script>

<template>
  <SectionContainer>
    <div :class="$style.news_container">
      <SectionTitle />
      <div :class="$style.news_article_wrapper">
        <div :class="$style.image_box">
          <img src="~assets/images/news/sekaiisan_tabibitonokoe.jpg" alt="記事の関連写真" :class="$style.news_img">
        </div>
        <div :class="$style.news_article">
          <h3 :class="$style.news_title">365ヶ所の「旅人の声」を集めます！世界遺産フォトグラファーとつくる『365日 世界遺産 絶景の旅』</h3>
          <date>2020.9.2</date>
          <p :class="$style.news_text">こんにちは。TABIPPOの中です。
            先日、「365絶景シリーズ」の新作、『365日 北海道 絶景の旅』が発売されたばかりではありますが、実は新たな「365絶景シリーズ」の新作の制作がすでに動き出しているんです！
            今回のテーマは「世界遺産」。写真は、40年間に渡り世界中を駆け回り、世界遺産を中心に空気感のある写真を追求し続けている世界遺産写真家の富井義夫さんのお写真をすべて使用させていただきます。
          </p>
        </div>
      </div>
      <div :class="$style.news_article_wrapper">
        <div :class="$style.image_box">
          <img src="~assets/images/news/sekaiisan_tabibitonokoe.jpg" alt="記事の関連写真" :class="$style.news_img">
        </div>
        <div :class="$style.news_article">
          <h3 :class="$style.news_title">365ヶ所の「旅人の声」を集めます！世界遺産フォトグラファーとつくる『365日 世界遺産 絶景の旅』</h3>
          <date>2020.9.2</date>
          <p :class="$style.news_text">こんにちは。TABIPPOの中です。
            先日、「365絶景シリーズ」の新作、『365日 北海道 絶景の旅』が発売されたばかりではありますが、実は新たな「365絶景シリーズ」の新作の制作がすでに動き出しているんです！
            今回のテーマは「世界遺産」。写真は、40年間に渡り世界中を駆け回り、世界遺産を中心に空気感のある写真を追求し続けている世界遺産写真家の富井義夫さんのお写真をすべて使用させていただきます。
          </p>
        </div>
      </div>
      <div :class="$style.news_article_wrapper">
        <div :class="$style.image_box">
          <img src="~assets/images/news/sekaiisan_tabibitonokoe.jpg" alt="記事の関連写真" :class="$style.news_img">
        </div>
        <div :class="$style.news_article">
          <h3 :class="$style.news_title">365ヶ所の「旅人の声」を集めます！世界遺産フォトグラファーとつくる『365日 世界遺産 絶景の旅』</h3>
          <date>2020.9.2</date>
          <p :class="$style.news_text">こんにちは。TABIPPOの中です。
            先日、「365絶景シリーズ」の新作、『365日 北海道 絶景の旅』が発売されたばかりではありますが、実は新たな「365絶景シリーズ」の新作の制作がすでに動き出しているんです！
            今回のテーマは「世界遺産」。写真は、40年間に渡り世界中を駆け回り、世界遺産を中心に空気感のある写真を追求し続けている世界遺産写真家の富井義夫さんのお写真をすべて使用させていただきます。
          </p>
        </div>
      </div>
    </div>
  </SectionContainer>
</template>


<style lang="scss" module>

.news_container{
  display       : flex;
  flex-direction: column;
  gap           : calc(var(--sp-large) * 2);
}

.news_article_wrapper {
  width  : 100%;
  display: flex;
  gap    : var(--sp-large);
}

.image_box {
  flex : 0 0 40%;
  width: 40%;
}

.news_img {
  width : 100%;
  height: auto;
}

.news_article {

  .news_title {
    font-size     : var(--fs-large);
    letter-spacing: 0.1em;
  }

  date {
    font-size  : var(--fs-smaller);
    font-family: 'Open Sans', sans-serif;
    color      : var(--light-black);
    margin-top : var(--sp-small);
  }

  .news_text {
    color             : var(--light-black);
    font-size         : var(--fs-small);
    margin-top        : var(--sp-medium);
    overflow          : hidden;
    display           : -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 7;                   /* 任意の行数を指定 */
  }
}
</style>