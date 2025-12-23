<template>
  <div class="error-page">
    <div class="error-shell">
      <span class="error-badge">Error {{ code || '404' }}</span>
      <h1>We could not find that page.</h1>
      <p>
        The link may be broken or the page has moved. Return to the home page or explore this week's
        templates.
      </p>
      <div class="error-actions">
        <router-link class="error-primary" to="/">Back to home</router-link>
        <router-link class="error-secondary" to="/templates">Browse templates</router-link>
      </div>
    </div>
  </div>
</template>

<style scoped lang="css" src="./error.css"></style>
<script lang="ts" src="./error.ts"></script>
