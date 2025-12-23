<template>
  <div class="templates-page">
    <AppNavbar>
      <a href="/">Home</a>
      <a href="/templates">Templates</a>
      <a href="/archive">Archive</a>
      <a href="/about">About</a>
    </AppNavbar>
    <main>
      <header class="templates-page__header">
        <p class="templates-page__kicker">Admin</p>
        <h1>Template builder (local)</h1>
        <p>Add a new template and preview it instantly.</p>
      </header>

      <section class="admin-form">
        <form @submit.prevent="handleSubmit">
          <div class="admin-form__grid">
            <label>
              Title
              <input v-model="form.title" required />
            </label>
            <label>
              Status
              <select v-model="form.status">
                <option value="active">Active</option>
                <option value="archived">Archived</option>
              </select>
            </label>
            <label class="admin-form__full">
              Description
              <textarea v-model="form.description" rows="3"></textarea>
            </label>
            <label class="admin-form__full">
              Tags (comma separated)
              <input v-model="form.tags" placeholder="SaaS, Startup, Landing" />
            </label>
            <label class="admin-form__full">
              HTML
              <textarea v-model="form.html" rows="4"></textarea>
            </label>
            <label class="admin-form__full">
              CSS
              <textarea v-model="form.css" rows="4"></textarea>
            </label>
            <label class="admin-form__full">
              JS
              <textarea v-model="form.js" rows="3"></textarea>
            </label>
          </div>
          <button type="submit">Add template</button>
        </form>
      </section>

      <section class="templates-page__grid">
        <TemplateCard
          v-for="template in templates"
          :key="template.id"
          :template="template"
          :show-actions="true"
          @archive="handleArchive"
          @activate="handleActivate"
        />
      </section>
    </main>
    <AppFooter />
  </div>
</template>

<script lang="ts" src="./admin.ts"></script>
<style scoped lang="css" src="./admin.css"></style>
