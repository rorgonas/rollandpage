import { createApp } from 'vue';

import './base.css';
import App from './app.vue';
import router from './router.ts';

const themeKey = 'rollandpage-theme';
const themeMedia = window.matchMedia('(prefers-color-scheme: dark)');
const storedTheme = window.localStorage.getItem(themeKey);

const applyTheme = (theme: 'dark' | 'light') => {
  if (theme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.removeAttribute('data-theme');
  }
};

if (storedTheme === 'dark' || storedTheme === 'light') {
  applyTheme(storedTheme);
} else {
  applyTheme(themeMedia.matches ? 'dark' : 'light');
  themeMedia.addEventListener('change', (event) => {
    applyTheme(event.matches ? 'dark' : 'light');
  });
}

const app = createApp(App);
app.use(router);
app.mount('#app');
