import { defineComponent, reactive } from 'vue';
import AppNavbar from '@/components/layout/app-navbar/app-navbar.vue';
import AppFooter from '@/components/layout/app-footer/app-footer.vue';
import TemplateCard from '@/modules/templates/components/template-card/template-card.vue';
import { useTemplates } from '../../use-templates';
import type { TemplateStatus } from '../../types';

export default defineComponent({
  name: 'TemplatesAdminPage',
  components: {
    AppNavbar,
    AppFooter,
    TemplateCard,
  },
  setup() {
    const { templates, addTemplate, updateStatus } = useTemplates();
    const form = reactive({
      title: '',
      description: '',
      tags: '',
      html: '',
      css: '',
      js: '',
      status: 'active' as TemplateStatus,
    });

    const resetForm = () => {
      form.title = '';
      form.description = '';
      form.tags = '';
      form.html = '';
      form.css = '';
      form.js = '';
      form.status = 'active';
    };

    const handleSubmit = () => {
      const tags = form.tags
        .split(',')
        .map((tag) => tag.trim())
        .filter(Boolean);

      addTemplate({
        title: form.title,
        description: form.description,
        tags,
        html: form.html,
        css: form.css,
        js: form.js,
        status: form.status,
      });

      resetForm();
    };

    const handleArchive = (id: string) => updateStatus(id, 'archived');
    const handleActivate = (id: string) => updateStatus(id, 'active');

    return { templates, form, handleSubmit, handleArchive, handleActivate };
  },
});
