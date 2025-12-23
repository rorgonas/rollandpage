import { computed, ref } from 'vue';
import type { TemplateItem, TemplateStatus } from './types';
import { seedTemplates } from './data/templates';

const templates = ref<TemplateItem[]>([...seedTemplates]);

const normalizeWeek = () => {
  const today = new Date();
  const year = today.getUTCFullYear();
  const start = new Date(Date.UTC(year, 0, 1));
  const day = Math.floor((today.getTime() - start.getTime()) / 86400000) + 1;
  const week = Math.ceil(day / 7);
  return `${year}-W${String(week).padStart(2, '0')}`;
};

export const useTemplates = () => {
  const activeTemplates = computed(() =>
    templates.value.filter((template) => template.status === 'active')
  );
  const archivedTemplates = computed(() =>
    templates.value.filter((template) => template.status === 'archived')
  );

  const addTemplate = (template: Omit<TemplateItem, 'id' | 'createdAt' | 'week'>) => {
    const newTemplate: TemplateItem = {
      ...template,
      id: `tpl-${Date.now()}`,
      createdAt: new Date().toISOString(),
      week: normalizeWeek(),
    };

    templates.value.unshift(newTemplate);
  };

  const updateStatus = (id: string, status: TemplateStatus) => {
    const target = templates.value.find((template) => template.id === id);
    if (target) {
      target.status = status;
    }
  };

  return {
    templates,
    activeTemplates,
    archivedTemplates,
    addTemplate,
    updateStatus,
  };
};
