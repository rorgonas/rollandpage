<template>
  <div class="templates-page">
    <AppNavbar>
      <a href="/">Home</a>
      <a href="/templates">Templates</a>
      <a href="/archive">Archive</a>
      <a href="/about">About</a>
    </AppNavbar>
    <main>
      <header class="templates-page__header" v-if="template">
        <p class="templates-page__kicker">{{ template.week }}</p>
        <h1>{{ template.title }}</h1>
        <p>{{ template.description }}</p>
      </header>
      <section v-if="template" class="template-detail">
        <div class="template-detail__meta">
          <div class="template-detail__tags">
            <span v-for="tag in template.tags" :key="tag">{{ tag }}</span>
          </div>
          <span class="template-detail__status">{{ template.status }}</span>
        </div>
        <iframe
          class="template-detail__preview"
          title="Template preview"
          :srcdoc="previewDoc"
          sandbox="allow-scripts"
        ></iframe>
      </section>
      <section v-else class="templates-empty">
        <p>Template not found.</p>
        <a class="templates-featured__cta" href="/templates">Back to templates</a>
      </section>
    </main>
    <AppFooter />
  </div>
</template>

<script lang="ts" src="./template-detail.ts"></script>
<style scoped lang="css" src="./template-detail.css"></style>
