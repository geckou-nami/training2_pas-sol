<script lang="ts" setup>
const news = await fetch('/json/news.json').then(res => res.json())
</script>

<template>
  <div>
    <SectionHeader style="margin-block-end: var(--sp-larger);">
      <h1>NEWS</h1>
    </SectionHeader>
    <NewsList :news="news" />
  </div>
</template>

