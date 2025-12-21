<template>
  <header class="nav-shell" :class="{ 'nav-shell--scrolled': scrolled }">
    <div class="nav-inner">
      <a class="logo" href="#top">
        <span class="logo-mark">R</span>
        <span class="logo-text">RollandPage</span>
      </a>
      <nav class="nav-links">
        <a href="#features">Features</a>
        <a href="#templates">Templates</a>
        <a href="#insights">Insights</a>
        <a href="#cta">Pricing</a>
      </nav>
      <a class="nav-cta" href="#templates">Browse Templates</a>
    </div>
    <div class="scroll-progress" :style="{ width: scrollPercent + '%' }"></div>
  </header>
</template>

<script lang="ts" src="./nav-bar.ts"></script>
<style scoped lang="css" src="./nav-bar.css"></style>
