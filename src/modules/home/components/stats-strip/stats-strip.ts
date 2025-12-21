import { defineComponent } from 'vue';

const stats = [
  { label: 'Weekly drops', value: '10' },
  { label: 'Templates in archive', value: '500+' },
  { label: 'Teams building', value: '1.8k' },
  { label: 'Builder waitlist', value: 'Open' },
];

export default defineComponent({
  name: 'StatsStrip',
  setup() {
    return { stats };
  },
});
