import { defineComponent } from 'vue';
import AppNavbar from '@/components/layout/app-navbar/app-navbar.vue';
import AppFooter from '@/components/layout/app-footer/app-footer.vue';
import TemplateCard from '@/modules/templates/components/template-card/template-card.vue';
import { useTemplates } from '../../use-templates';

export default defineComponent({
  name: 'TemplatesListPage',
  components: {
    AppNavbar,
    AppFooter,
    TemplateCard,
  },
  setup() {
    const { activeTemplates } = useTemplates();

    return { activeTemplates };
  },
});
