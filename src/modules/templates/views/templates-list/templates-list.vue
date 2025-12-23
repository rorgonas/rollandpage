<template>
  <div class="templates-page">
    <AppNavbar>
      <a href="/">Home</a>
      <a href="/templates">Templates</a>
      <a href="/archive">Archive</a>
      <a href="/about">About</a>
    </AppNavbar>
    <main>
      <header class="templates-page__header">
        <p class="templates-page__kicker">Weekly drops</p>
        <h1>This week's templates</h1>
        <p>Browse the latest 10 templates curated for fast launches.</p>
      </header>
      <section class="templates-page__grid">
        <a
          v-for="template in activeTemplates"
          :key="template.id"
          class="templates-page__link"
          :href="`/templates/${template.id}`"
        >
          <TemplateCard :template="template" />
        </a>
      </section>
    </main>
    <AppFooter />
  </div>
</template>

<script lang="ts" src="./templates-list.ts"></script>
<style scoped lang="css" src="./templates-list.css"></style>
