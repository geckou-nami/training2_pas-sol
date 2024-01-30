<script lang="ts" setup>
const newsList = await fetch('/json/news.json').then(res => res.json())
</script>

<template>
  <section>
    <SectionTitle sectionName="NEWS" />
    <NewsPage :newsList="newsList" />
  </section>
</template>