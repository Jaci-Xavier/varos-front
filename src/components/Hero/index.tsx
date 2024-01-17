import arrow from '../../assets/arrow.png';
import CarouselComponent from '../Carousel';
import { cards } from '../../constants/Constants';

function Hero() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-[2rem]">
        <h1 className="text-6xl font-extrabold leading-[4rem] w-[34rem]">
          Investir de forma mais inteligente passa por aqui.
        </h1>
        <h2 className="w-[26rem] leading-5">
          Fazemos de tudo para que você possa conquistar seus sonhos da melhor forma possível.
        </h2>
        <div>
          <button
            className="py-3 px-11 flex rounded-[40px] text-[#00F700)] items-center justify-center bg-[#19C81966] gap-2"
            type="button"
          >
            Comprar agora <img src={arrow}></img>
          </button>
        </div>
      </div>
      <div>
        <CarouselComponent cards={cards} />
      </div>
    </div>
  );
}

export default Hero;
