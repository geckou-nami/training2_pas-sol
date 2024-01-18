<script lang="ts" setup>
import imgSrc from '@/assets/images/5aafae338835b1fd1119f273565bd3de1.jpg';

type Props = {
  newsList: {
    image: string,
    title: string,
    date : string,
    text : string,
    link : string
  }[]
}

const props = defineProps<Props>()
</script>

<template>
  <SubHero :imageSrc="imgSrc"/>
  <SectionContainer>
    <div :class="$style.section_title_wrap">
      <SectionTitle sectionName="NEWS"/>
      <MoreButton />
    </div>
    <ul :class="$style.news_container">
      <li 
        v-for="news in newsList"
        :key="news.title"
        :class="$style.news_article_wrapper"
      >
        <div :class="$style.image_box">
          <img 
            :src="`/images/news/${news.image}`" 
            alt="記事の関連写真" 
            :class="$style.news_img"
          >
        </div>
        <div :class="$style.news_article">
          <h3 :class="$style.news_title">{{ news.title }}</h3>
          <date>{{ news.date }}</date>
          <p :class="$style.news_text">{{ news.text }}</p>
        </div>
      </li>
    </ul>
    <BackToButton />
  </SectionContainer>
</template>


<style lang="scss" module>
@use '~/assets/scss/mixin' as *;

.news_container{
  display       : flex;
  flex-direction: column;
  gap           : calc(var(--sp-large) * 2);
}

.section_title_wrap {
  display: flex;
  align-items: center;
}

.news_article_wrapper {
  width  : 100%;
  display: flex;
  gap    : var(--sp-large);

  @include mediaScreen('mobile') {
    display: flex;
    flex-direction: column;
  }
}

.image_box {
  flex : 0 0 40%;
  width: 40%;

  @include mediaScreen('mobile') {
    width : 100%;
  }
}

.news_img {
  width : 100%;
  height: auto;
}

.news_article {

  .news_title {
    font-size     : var(--fs-large);
    letter-spacing: 0.1em;

    @include mediaScreen('mobile') {
      font-size: var(--fs-larger);
    }
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
    -webkit-line-clamp: 7; /* 任意の行数を指定 */

    @include mediaScreen('mobile') {
      display: none;
    }
  }
}
</style>