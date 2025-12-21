<template>
  <button
    class="theme-toggle"
    :class="`theme-toggle--${size}`"
    type="button"
    :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
    @click="toggleTheme"
  >
    <span v-if="!isDark" class="theme-toggle__icon" aria-hidden="true" v-html="moonSvgIcon"></span>
    <span v-else class="theme-toggle__icon" aria-hidden="true" v-html="sunSvgIcon"></span>
  </button>
</template>

<script lang="ts" src="./theme-toggle.ts"></script>
<style scoped lang="css" src="./theme-toggle.css"></style>
