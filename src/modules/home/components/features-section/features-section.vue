<template>
  <section class="features" id="features">
    <div class="section-header">
      <h2>Designed to ship with confidence.</h2>
      <p>
        Every template is crafted for speed, clarity, and the first impression that wins sign-ups.
      </p>
    </div>
    <div class="feature-grid">
      <article v-for="feature in features" :key="feature.title" class="feature-card">
        <div class="feature-icon">{{ feature.icon }}</div>
        <h3>{{ feature.title }}</h3>
        <p>{{ feature.description }}</p>
      </article>
    </div>
  </section>
</template>

<script lang="ts" src="./features-section.ts"></script>
<style scoped lang="css" src="./features-section.css"></style>
