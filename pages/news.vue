<script lang="ts" setup>
const newsList = await fetch('/json/news.json').then(res => res.json())

</script>

<template>
  <section>
    <SectionNews 
      :newsList="newsList"
    />
  </section>
</template>


<style lang="scss" module>


</style>