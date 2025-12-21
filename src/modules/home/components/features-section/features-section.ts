import { defineComponent } from 'vue';

const features = [
  {
    title: 'Weekly drops, always fresh',
    description: 'Ten new landing pages arrive every Monday with new industries and moods.',
    icon: '01',
  },
  {
    title: 'Layouts that convert',
    description: 'Built-in storytelling blocks and CTA rhythm help you launch faster.',
    icon: '02',
  },
  {
    title: 'Clean, modular code',
    description: 'HTML, CSS, and JS organized so your team can customize quickly.',
    icon: '03',
  },
  {
    title: 'Responsive by default',
    description: 'Each template is tested across devices with accessible typography.',
    icon: '04',
  },
];

export default defineComponent({
  name: 'FeaturesSection',
  setup() {
    return { features };
  },
});
