import { defineComponent } from 'vue';

const stats = [
  { label: 'Weekly drops', value: '10' },
  { label: 'Templates in archive', value: 'Soon' },
  { label: 'Teams building', value: '0' },
  { label: 'Builder waitlist', value: 'Open' },
];

export default defineComponent({
  name: 'StatsStrip',
  setup() {
    return { stats };
  },
});
