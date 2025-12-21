import { defineComponent } from 'vue';
import AppNavbar from '@/components/layout/app-navbar/app-navbar.vue';
import HeroSection from '../components/hero-section/hero-section.vue';
import FeaturesSection from '../components/features-section/features-section.vue';
import TemplateShowcase from '../components/template-showcase/template-showcase.vue';
import StatsStrip from '../components/stats-strip/stats-strip.vue';
import CtaSection from '../components/cta-section/cta-section.vue';
import AppFooter from '@/components/layout/app-footer/app-footer.vue';

export default defineComponent({
  name: 'HomePage',
  components: {
    AppNavbar,
    HeroSection,
    FeaturesSection,
    TemplateShowcase,
    StatsStrip,
    CtaSection,
    AppFooter,
  },
});
