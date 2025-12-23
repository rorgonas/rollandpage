import { computed, defineComponent } from 'vue';
import { useRoute } from 'vue-router';
import AppNavbar from '@/components/layout/app-navbar/app-navbar.vue';
import AppFooter from '@/components/layout/app-footer/app-footer.vue';
import { useTemplates } from '../../use-templates';

export default defineComponent({
  name: 'TemplateDetailPage',
  components: {
    AppNavbar,
    AppFooter,
  },
  setup() {
    const route = useRoute();
    const { templates } = useTemplates();
    const template = computed(() =>
      templates.value.find((item) => item.id === String(route.params.id))
    );

    const previewDoc = computed(() => {
      if (!template.value) {
        return '';
      }
      const styles = `<style>${template.value.css}</style>`;
      const scripts = template.value.js ? `<script>${template.value.js}<\/script>` : '';
      return `<!doctype html><html><head>${styles}</head><body>${template.value.html}${scripts}</body></html>`;
    });

    return { template, previewDoc };
  },
});
