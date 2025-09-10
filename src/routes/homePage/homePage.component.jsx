import BenefitsSection from '../../components/benefitsSection/benefitsSection.component';
import Hero from '../../components/hero/hero.component';
import ServicesPreview from '../../components/servicesPreview/servicesPreview.component';
import WaitlistForm from '../../components/waitlistForm/waitlistForm.component';
import WhyServLinker from '../../components/whyServLinker/whyServLinker.component';
import './homePage.styles.css';
import Footer from './../../components/footer/footer.component';
import LaunchSteps from './../../components/launchSteps/launchSteps.component';
import AnimatedCounter from '../../components/animatedCounter/animatedCounter.component';

function HomePage() {
  // const [data, setData] = useState('seeker');

  return (
    <div className='home-page'>
      <AnimatedCounter />
      <Hero />
      <LaunchSteps />
      <ServicesPreview />
      <WhyServLinker />
      <BenefitsSection />
      <WaitlistForm />
      <Footer />
    </div>
  );
}

export default HomePage;
