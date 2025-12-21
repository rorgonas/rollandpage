<template>
  <section class="stats" id="insights">
    <div class="stats-grid">
      <div v-for="stat in stats" :key="stat.label" class="stat-card">
        <h3>{{ stat.value }}</h3>
        <p>{{ stat.label }}</p>
      </div>
    </div>
  </section>
</template>

<script lang="ts" src="./stats-strip.ts"></script>
<style scoped lang="css" src="./stats-strip.css"></style>
