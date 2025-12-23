<template>
  <div class="about-page">
    <app-navbar>
      <router-link to="/">Home</router-link>
      <router-link to="/templates">Templates</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/pricing">Pricing</router-link>
    </app-navbar>
    <main>
      <section class="about-hero">
        <p class="about-kicker">The RollandPage mission</p>
        <h1>Curate the web's best landing pages, then help teams customize them fast.</h1>
        <p class="about-lede">
          RollandPage is a personal project focused on shipping a weekly repository of landing page
          templates. The next chapter is a premium builder so subscribers can tailor layouts,
          colors, and type in minutes.
        </p>
      </section>
    </main>
    <app-footer />
  </div>
</template>

<script lang="ts" src="./about.ts"></script>
<style scoped lang="css" src="./about.css"></style>
