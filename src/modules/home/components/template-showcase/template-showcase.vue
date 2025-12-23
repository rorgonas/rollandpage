<template>
  <section class="templates" id="templates">
    <div class="templates-header">
      <div>
        <h2>This week's drops</h2>
        <p>One featured template each week, plus premium access to the growing archive.</p>
      </div>
      <a class="templates-link" href="/archive">Browse archive (Pro)</a>
    </div>
    <div v-if="featuredTemplate" class="templates-featured">
      <div class="templates-featured__preview">
        <iframe
          class="templates-featured__frame"
          title="Template preview"
          :srcdoc="previewDoc"
          sandbox="allow-scripts"
        ></iframe>
      </div>
      <div class="templates-featured__footer">
        <div>
          <p class="templates-featured__date">
            {{ new Date(featuredTemplate.createdAt).toLocaleDateString() }}
          </p>
          <p class="templates-featured__summary">
            {{ featuredTemplate.description }}
          </p>
        </div>
        <a class="templates-featured__cta" :href="`/templates/${featuredTemplate.id}`">
          Preview template
        </a>
      </div>
    </div>
    <div v-else class="templates-empty">
      <p>No active template yet. Add one from the admin page.</p>
      <a class="templates-featured__cta" href="/admin/templates">Add template</a>
    </div>
  </section>
</template>

<script lang="ts" src="./template-showcase.ts"></script>
<style scoped lang="css" src="./template-showcase.css"></style>
