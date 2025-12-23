<template>
  <article class="template-card">
    <div class="template-card__header">
      <div>
        <p class="template-card__eyebrow">{{ template.week }}</p>
        <h3>{{ template.title }}</h3>
        <p class="template-card__description">{{ template.description }}</p>
      </div>
      <span class="template-card__status" :class="`is-${template.status}`">
        {{ template.status }}
      </span>
    </div>
    <div class="template-card__tags">
      <span v-for="tag in template.tags" :key="tag">{{ tag }}</span>
    </div>
    <iframe
      class="template-card__preview"
      title="Template preview"
      :srcdoc="previewDoc"
      sandbox="allow-scripts"
    ></iframe>
    <div v-if="showActions" class="template-card__actions">
      <button type="button" @click="$emit('archive', template.id)">Archive</button>
      <button type="button" @click="$emit('activate', template.id)">Activate</button>
    </div>
  </article>
</template>

<script lang="ts" src="./template-card.ts"></script>
<style scoped lang="css" src="./template-card.css"></style>
