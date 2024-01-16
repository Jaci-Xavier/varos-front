
import CardHero from '../../components/CardHero/Index';
import Hero from '../../components/Hero';
import H2sub from '../../components/H2sub';
import MenuSelect from '../../components/Menu/Index';

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
    </div>
  );
}

export default Home;