import { defineComponent, onBeforeUnmount, onMounted, ref } from 'vue';
import { moonSvgIcon, sunSvgIcon } from '@/assets/svgs/themes-icons';

export default defineComponent({
  name: 'NavBar',
  setup() {
    const scrolled = ref(false);
    const scrollPercent = ref(0);
    const isDark = ref(document.documentElement.getAttribute('data-theme') === 'dark');
    const themeKey = 'rollandpage-theme';
    let themeObserver: MutationObserver | null = null;

    const updateScroll = () => {
      scrolled.value = window.scrollY > 24;
      const doc = document.documentElement;
      const height = doc.scrollHeight - doc.clientHeight;
      scrollPercent.value = height > 0 ? (doc.scrollTop / height) * 100 : 0;
    };

    onMounted(() => {
      updateScroll();
      window.addEventListener('scroll', updateScroll, { passive: true });

      themeObserver = new MutationObserver(() => {
        isDark.value = document.documentElement.getAttribute('data-theme') === 'dark';
      });
      themeObserver.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['data-theme'],
      });
    });

    onBeforeUnmount(() => {
      window.removeEventListener('scroll', updateScroll);
      themeObserver?.disconnect();
    });

    const toggleTheme = () => {
      isDark.value = !isDark.value;
      if (isDark.value) {
        document.documentElement.setAttribute('data-theme', 'dark');
        window.localStorage.setItem(themeKey, 'dark');
      } else {
        document.documentElement.removeAttribute('data-theme');
        window.localStorage.setItem(themeKey, 'light');
      }
    };

    return { scrolled, scrollPercent, isDark, toggleTheme, sunSvgIcon, moonSvgIcon };
  },
});
