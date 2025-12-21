export const enum ErrorPageRoutes {
  Index = 'error',
}

export default [
  {
    path: '/error',
    name: ErrorPageRoutes.Index,
    component: () => import('@/modules/error/views/error.vue'),
  },
];
