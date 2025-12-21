import { defineComponent, computed } from 'vue';
import { useRoute } from 'vue-router';

export default defineComponent({
  name: 'ErrorPage',
  setup() {
    const route = useRoute();
    const code = computed(() => String(route.query.code ?? ''));

    return { code };
  },
});
