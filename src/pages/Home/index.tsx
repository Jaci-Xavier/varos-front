import CardHero from '../../components/CardHero/Index';
import Hero from '../../components/Hero';
import H2sub from '../../components/H2sub';
import MenuSelect from '../../components/Menu/Index';
import Testimonial from '../../components/TestimonialCard/Index';
import { testimonials } from '../../constants/Constants';
import CardImg from '../../components/CardImg/Index';
import Form from '../../components/InputForm/Index';

function Home() {
  return (
    <div>
      <div className="flex items-center justify-between py-[5rem]">
        <Hero />
        <CardHero />
      </div>
      <H2sub />
      <MenuSelect />
      <div className="flex items-center justify-between py-[6rem]">
        <Testimonial cards={testimonials} />
        <CardImg />
      </div>
      <Form />
    </div>
  );
}

export default Home;
