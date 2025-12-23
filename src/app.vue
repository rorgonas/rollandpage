<template>
  <div class="app-shell">
    <router-view v-slot="{ Component }">
      <transition>
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script lang="ts" src="./app.ts"></script>
<style lang="css" src="./base.css"></style>
