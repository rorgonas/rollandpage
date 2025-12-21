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
        <a class="error-primary" href="/">Back to home</a>
        <a class="error-secondary" href="/#templates">Browse templates</a>
      </div>
    </div>
  </div>
</template>

<style scoped lang="css" src="./error.css"></style>
<script lang="ts" src="./error.ts"></script>
