import { createApp } from 'vue';

import './base.css';
import App from './app.vue';
import router from './router.ts';

const app = createApp(App);
app.use(router);
app.mount('#app');
