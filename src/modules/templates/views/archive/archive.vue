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
        <p class="templates-page__kicker">Archive</p>
        <h1>Past template drops</h1>
        <p>Premium subscribers unlock the full archive and curated collections.</p>
      </header>
      <section class="templates-page__grid">
        <a
          v-for="template in archivedTemplates"
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

<script lang="ts" src="./archive.ts"></script>
<style scoped lang="css" src="./../templates-list/templates-list.css"></style>
