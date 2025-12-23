import { defineComponent } from 'vue';

const stats = [
  { label: 'Weekly drops', value: '1' },
  { label: 'Templates in archive', value: '10+' },
  { label: 'Teams building', value: '100+' },
  { label: 'Builder waitlist', value: 'Open' },
];

export default defineComponent({
  name: 'StatsStrip',
  setup() {
    return { stats };
  },
});
