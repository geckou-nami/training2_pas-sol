<script lang="ts" setup>
const newsList = await fetch('/json/news.json').then(res => res.json())
</script>

<template>
  <section>
    <SectionTitle sectionName="NEWS" />
    <NewsList :newsList="newsList" />
  </section>
</template>