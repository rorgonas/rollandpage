import { defineComponent } from 'vue';

const templates = [
  {
    title: 'Signal SaaS',
    description: 'Conversion-focused hero, social proof, and clean pricing blocks.',
    tags: ['SaaS', 'Pricing', 'B2B'],
    category: 'SaaS',
  },
  {
    title: 'Citrine Studio',
    description: 'Editorial layout with portfolio grid and narrative storytelling.',
    tags: ['Agency', 'Portfolio'],
    category: 'Agency',
  },
  {
    title: 'Northwind Launch',
    description: 'Bold product launch page with email capture and timelines.',
    tags: ['Startup', 'Launch'],
    category: 'Startup',
  },
  {
    title: 'Cacao Commerce',
    description: 'Warm e-commerce landing with collections and testimonials.',
    tags: ['Commerce', 'Lifestyle'],
    category: 'Shop',
  },
  {
    title: 'Pulse Mobile',
    description: 'App landing experience with feature highlights and download prompts.',
    tags: ['Mobile', 'App'],
    category: 'App',
  },
  {
    title: 'Altitude Advisory',
    description: 'Consulting template with trust builders and case studies.',
    tags: ['Consulting', 'Services'],
    category: 'Consulting',
  },
];

export default defineComponent({
  name: 'TemplateShowcase',
  setup() {
    return { templates };
  },
});
