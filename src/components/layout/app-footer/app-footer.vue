<template>
  <footer class="app-footer">
    <div class="app-footer__grid">
      <div class="app-footer__brand">
        <div class="app-footer__logo">RollandPage</div>
        <p>Weekly template drops with a premium builder on the roadmap.</p>
      </div>
      <div class="app-footer__links">
        <h4>Product</h4>
        <router-link to="/templates">Templates</router-link>
        <router-link to="/archive">Archive</router-link>
        <a href="/#cta">Pricing</a>
      </div>
      <div class="app-footer__links">
        <h4>Company</h4>
        <router-link to="/about">About</router-link>
        <a href="#">Careers</a>
        <a href="#">Contact</a>
      </div>
      <div class="app-footer__links">
        <h4>Community</h4>
        <a href="#">Blog</a>
        <a href="#">Guides</a>
        <a href="#">Support</a>
      </div>
    </div>
    <div class="app-footer__base">
      <span>(c) 2026 RollandPage. All rights reserved.</span>
      <span>Designed with care in Canada.</span>
    </div>
  </footer>
</template>

<script lang="ts" src="./app-footer.ts"></script>
<style scoped lang="css" src="./app-footer.css"></style>
