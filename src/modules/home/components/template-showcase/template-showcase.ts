import { computed, defineComponent } from 'vue';
import { useTemplates } from '@/modules/templates/use-templates';

export default defineComponent({
  name: 'TemplateShowcase',
  setup() {
    const { activeTemplates } = useTemplates();
    const featuredTemplate = computed(() => activeTemplates.value[0]);
    const previewDoc = computed(() => {
      if (!featuredTemplate.value) {
        return '';
      }
      const styles = `<style>${featuredTemplate.value.css}</style>`;
      const scripts = featuredTemplate.value.js
        ? `<script>${featuredTemplate.value.js}<\\/script>`
        : '';
      return `<!doctype html><html><head>${styles}</head><body>${featuredTemplate.value.html}${scripts}</body></html>`;
    });

    return { featuredTemplate, previewDoc };
  },
});
