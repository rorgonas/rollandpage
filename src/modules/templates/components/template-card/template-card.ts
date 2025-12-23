import { computed, defineComponent } from 'vue';
import type { PropType } from 'vue';
import type { TemplateItem } from '@/modules/templates/types';

export default defineComponent({
  name: 'TemplateCard',
  props: {
    template: {
      type: Object as PropType<TemplateItem>,
      required: true,
    },
    showActions: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['archive', 'activate'],
  setup(props) {
    const previewDoc = computed(() => {
      const styles = `<style>${props.template.css}</style>`;
      const scripts = props.template.js ? `<script>${props.template.js}<\/script>` : '';
      return `<!doctype html><html><head>${styles}</head><body>${props.template.html}${scripts}</body></html>`;
    });

    return { previewDoc };
  },
});
