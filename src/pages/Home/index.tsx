import CardHero from '../../components/CardHero/Index';
import Hero from '../../components/Hero';
import H2sub from '../../components/H2sub';
import MenuSelect from '../../components/MenuSelect/Index';
import Testimonial from '../../components/TestimonialCard/Index';
import { testimonials } from '../../constants/Constants';
import CardImg from '../../components/CardImg/Index';
import Form from '../../components/InputForm/Index';

function Home() {
  return (
    <div>
      <div className="desktop:flex desktop:items-center desktop:justify-between py-[5rem] tablet:flex">
        <Hero />
        <CardHero />
      </div>
      <H2sub />
      <MenuSelect />
      <div className="desktop:flex desktop:justify-between tablet:flex py-60">
        <Testimonial cards={testimonials} />
        <CardImg />
      </div>
      <Form />
    </div>
  );
}

export default Home;
