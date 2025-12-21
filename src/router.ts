import { createRouter, createWebHistory } from 'vue-router';
import homePageRoutes from '@/modules/home/routes';
import errorPageRoutes, { ErrorPageRoutes } from '@/modules/error/routes';

const routes = [
  ...homePageRoutes,
  ...errorPageRoutes,
  {
    path: '/:pathMatch(.*)*',
    redirect: {
      name: ErrorPageRoutes.Index,
      query: { code: '404' },
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
