export const TemplateRoutes = {
  List: 'templates',
  Detail: 'template-detail',
  Archive: 'archive',
  Admin: 'templates-admin',
} as const;

export default [
  {
    path: '/templates',
    name: TemplateRoutes.List,
    component: () => import('@/modules/templates/views/templates-list/templates-list.vue'),
  },
  {
    path: '/templates/:id',
    name: TemplateRoutes.Detail,
    component: () => import('@/modules/templates/views/template-detail/template-detail.vue'),
  },
  {
    path: '/archive',
    name: TemplateRoutes.Archive,
    component: () => import('@/modules/templates/views/archive/archive.vue'),
  },
  {
    path: '/admin/templates',
    name: TemplateRoutes.Admin,
    component: () => import('@/modules/templates/views/admin/admin.vue'),
  },
];
