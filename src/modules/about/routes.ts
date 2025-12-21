export const AboutRoutes = {
  Index: 'about',
} as const;

export default [
  {
    path: '/about',
    name: AboutRoutes.Index,
    component: () => import('@/modules/about/views/about.vue'),
  },
];
