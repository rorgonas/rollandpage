export const enum HomeRoutes {
  Index = 'home',
}

export default [
  {
    path: '/',
    name: HomeRoutes.Index,
    component: () => import('@/modules/home/views/home.vue'),
  },
];
