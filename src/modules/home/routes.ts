export const HomeRoutes = {
  Index: 'home',
} as const;

export default [
  {
    path: '/',
    name: HomeRoutes.Index,
    component: () => import('@/modules/home/views/home.vue'),
  },
];
