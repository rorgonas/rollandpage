import { defineComponent, onBeforeUnmount, onMounted, ref } from 'vue';
import type { PropType } from 'vue';
import moonSvgIcon from '@/assets/icons/moon.svg?raw';
import sunSvgIcon from '@/assets/icons/sun.svg?raw';

type ThemeToggleSize = 'sm' | 'md';

export default defineComponent({
  name: 'ThemeToggle',
  props: {
    size: {
      type: String as PropType<ThemeToggleSize>,
      default: 'md',
    },
  },
  setup() {
    const isDark = ref(document.documentElement.getAttribute('data-theme') === 'dark');
    const themeKey = 'rollandpage-theme';
    let themeObserver: MutationObserver | null = null;

    onMounted(() => {
      themeObserver = new MutationObserver(() => {
        isDark.value = document.documentElement.getAttribute('data-theme') === 'dark';
      });
      themeObserver.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['data-theme'],
      });
    });

    onBeforeUnmount(() => {
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

    return { isDark, toggleTheme, moonSvgIcon, sunSvgIcon };
  },
});
