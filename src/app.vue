<template>
  <div class="app-shell">
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script lang="ts" src="./app.ts"></script>
<style lang="css" src="./base.css"></style>
