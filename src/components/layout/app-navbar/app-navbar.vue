<template>
  <header class="app-navbar">
    <div class="app-navbar__inner">
      <a class="app-navbar__logo" href="/">
        <span class="app-navbar__mark">R</span>
        <span class="app-navbar__text">RollandPage</span>
      </a>

      <nav class="app-navbar__links">
        <slot />
      </nav>

      <div class="app-navbar__actions">
        <a class="app-navbar__cta" href="#templates">Browse This Week</a>
        <ThemeToggle size="sm" />
      </div>
    </div>
  </header>
</template>

<script lang="ts" src="./app-navbar.ts"></script>
<style scoped lang="css" src="./app-navbar.css"></style>
