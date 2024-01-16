
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
    <div className=''>
      <div className='flex items-center text-center w-[98vw] justify-evenly'>
        <Hero />
        <CardHero />
      </div>
      <div className='flex w-[98vw] justify-start'>
        <H2sub />
      </div>
      <div className='flex flex-row w-[98vw]'>
        <MenuSelect />
      </div>
      <div className='flex flex-row items-center text-center w-[98vw] h-[572px] self-center justify-evenly'>
        <Testimonial cards={testimonials}/>
        <CardImg />
      </div>
      <div className='flex flex-row justify-center'>
        <Form />
      </div>
    </div>
  );
}

export default Home;