import { defineComponent } from 'vue';
import NavBar from '../components/nav-bar/nav-bar.vue';
import HeroSection from '../components/hero-section/hero-section.vue';
import FeaturesSection from '../components/features-section/features-section.vue';
import TemplateShowcase from '../components/template-showcase/template-showcase.vue';
import StatsStrip from '../components/stats-strip/stats-strip.vue';
import CtaSection from '../components/cta-section/cta-section.vue';
import FooterBlock from '../components/footer-block/footer-block.vue';

export default defineComponent({
  name: 'HomePage',
  components: {
    NavBar,
    HeroSection,
    FeaturesSection,
    TemplateShowcase,
    StatsStrip,
    CtaSection,
    FooterBlock,
  },
});
