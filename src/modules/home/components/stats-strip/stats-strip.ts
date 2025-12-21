import { defineComponent } from 'vue';

const stats = [
  { label: 'Templates shipped in 2024', value: '520+' },
  { label: 'Average build time saved', value: '12 hrs' },
  { label: 'Teams currently building', value: '1.8k' },
  { label: 'Industries covered', value: '42' },
];

export default defineComponent({
  name: 'StatsStrip',
  setup() {
    return { stats };
  },
});
