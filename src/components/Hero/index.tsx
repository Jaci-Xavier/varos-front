import arrow from '../../assets/arrow.png';
import CarouselComponent from '../Carousel';
import { cards } from '../../constants/Constants';

function Hero() {
  return (
    <div className="flex flex-col w-[569px] h-[538px] items-start text-start">
      <div className="flex flex-col w-[564px] h-[533px] items-start text-start justify-evenly">
        <h1 className=" text-6xl font-extrabold leading-[70px] tracking[0em] text-left w-[564px] h-[210px]">
          Investir de forma mais inteligente passa por aqui.
        </h1>
        <h2 className=" w-[469px] h-[44px] text-[18px] font-semibold leading-5 tracking-[0em] text-left">
          Fazemos de tudo para que você possa conquistar seus sonhos da melhor forma possível.
        </h2>
        <div className="">
          <button
            className="w-[263px] h-[56px] flex flex-row rounded-[40px] text-[#00F700)] text-[1em] items-center justify-center bg-[#19C81966]"
            type="button"
          >
            Comprar agora <img src={arrow}></img>
          </button>
        </div>
      </div>
      <div className="w-[564px] rounded-[24px]">
        <CarouselComponent cards={cards} />
      </div>
    </div>
  );
}

export default Hero;
