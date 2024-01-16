import arrow from '../../assets/arrow.png';
import CarouselComponent from '../Carousel';
import { cards } from '../../constants/Constants';


function Hero() {
  return (
    <div className='flex flex-col w-[35.25em] h-[35em] gap-[2em] items-start text-start mt-24 ml-24'>
      <div className='flex flex-col w-[34em] h-[22.8em] gap-[2em] items-start text-start mt-20 ml-1'>
        <h1 className='text-6xl font-extrabold leading-[70px] tracking[0em] text-left w-[564px] h-[210px]'>Investir de forma mais inteligente passa por aqui.</h1>
        <h2 className='w-[469px] h-[44px] text-[18px] font-semibold leading-5 tracking-[0em] text-left'>Fazemos de tudo para que você possa conquistar seus sonhos da melhor forma possível.</h2>
        <button 
          className='w-[13em] h-[3.5em] flex flex-row rounded-[40px] text-[#00F700)] text-[1em] items-center justify-center'
          type="button"
        >Comprar agora <img src={arrow}></img>
        </button>
        <CarouselComponent cards={cards} />
      </div>
    </div>
  )
}

export default Hero;