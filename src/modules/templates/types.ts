export type TemplateStatus = 'active' | 'archived';

export interface TemplateItem {
  id: string;
  title: string;
  description: string;
  tags: string[];
  html: string;
  css: string;
  js: string;
  status: TemplateStatus;
  week: string;
  createdAt: string;
}
