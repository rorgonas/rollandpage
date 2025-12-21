<template>
  <div class="home-page">
    <app-navbar>
      <a href="#features">Features</a>
      <a href="#templates">Templates</a>
      <a href="#insights">Insights</a>
      <a href="#cta">Pricing</a>
    </app-navbar>
    <main>
      <hero-section />
      <features-section />
      <template-showcase />
      <stats-strip />
      <cta-section />
    </main>
    <app-footer />
  </div>
</template>

<script lang="ts" src="./home.ts"></script>
<style scoped lang="css" src="./home.css"></style>
