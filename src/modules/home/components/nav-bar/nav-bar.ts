import { defineComponent, onBeforeUnmount, onMounted, ref } from 'vue';

export default defineComponent({
  name: 'NavBar',
  setup() {
    const scrolled = ref(false);
    const scrollPercent = ref(0);

    const updateScroll = () => {
      scrolled.value = window.scrollY > 24;
      const doc = document.documentElement;
      const height = doc.scrollHeight - doc.clientHeight;
      scrollPercent.value = height > 0 ? (doc.scrollTop / height) * 100 : 0;
    };

    onMounted(() => {
      updateScroll();
      window.addEventListener('scroll', updateScroll, { passive: true });
    });

    onBeforeUnmount(() => {
      window.removeEventListener('scroll', updateScroll);
    });

    return { scrolled, scrollPercent };
  },
});
