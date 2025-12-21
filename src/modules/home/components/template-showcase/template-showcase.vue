<template>
  <section class="templates" id="templates">
    <div class="templates-header">
      <div>
        <h2>This week's drops</h2>
        <p>Free weekly picks now, with premium archive access for subscribers.</p>
      </div>
      <a class="templates-link" href="#cta">Unlock the archive</a>
    </div>
    <div class="templates-grid">
      <article v-for="template in templates" :key="template.title" class="template-card">
        <div class="template-visual">
          <span>{{ template.category }}</span>
        </div>
        <div class="template-body">
          <h3>{{ template.title }}</h3>
          <p>{{ template.description }}</p>
          <div class="template-tags">
            <span v-for="tag in template.tags" :key="tag">{{ tag }}</span>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<script lang="ts" src="./template-showcase.ts"></script>
<style scoped lang="css" src="./template-showcase.css"></style>
