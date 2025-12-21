import { defineComponent } from 'vue';

const features = [
  {
    title: 'Weekly drops, always fresh',
    description: 'Ten new landing pages arrive every Monday with new industries and moods.',
    icon: '01',
  },
  {
    title: 'Premium archive access',
    description: 'Subscribers unlock the full back catalog with curated collections.',
    icon: '02',
  },
  {
    title: 'Clean, modular code',
    description: 'HTML, CSS, and JS organized so your team can customize quickly.',
    icon: '03',
  },
  {
    title: 'Builder on the roadmap',
    description: 'Customize colors, type, and sections with the upcoming template builder.',
    icon: '04',
  },
];

export default defineComponent({
  name: 'FeaturesSection',
  setup() {
    return { features };
  },
});
