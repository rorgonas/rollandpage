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
      <div class="nav-actions">
        <a class="nav-cta" href="#templates">
          <span class="nav-cta__full">Browse This Week</span>
        </a>
        <button
          class="theme-toggle"
          type="button"
          :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
          @click="toggleTheme"
        >
          <span
            v-if="!isDark"
            class="theme-toggle__icon"
            aria-hidden="true"
            v-html="moonSvgIcon"
          ></span>
          <span v-else class="theme-toggle__icon" aria-hidden="true" v-html="sunSvgIcon"></span>
        </button>
      </div>
    </div>
    <div class="scroll-progress" :style="{ width: scrollPercent + '%' }"></div>
  </header>
</template>

<script lang="ts" src="./nav-bar.ts"></script>
<style scoped lang="css" src="./nav-bar.css"></style>
