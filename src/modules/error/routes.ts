export const ErrorPageRoutes = {
  Index: 'error',
} as const;

export default [
  {
    path: '/error',
    name: ErrorPageRoutes.Index,
    component: () => import('@/modules/error/views/error.vue'),
  },
];
