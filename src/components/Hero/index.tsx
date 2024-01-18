import arrow from '../../assets/arrow.png';
import CarouselComponent from '../Carousel';
import { cards } from '../../constants/Constants';

function Hero() {
  return (
    <div className="desktop:flex-col desktop:w-[40rem]">
      <div className="desktop:flex desktop:flex-col desktop:gap-[2rem] tablet:flex tablet:flex-col tablet:gap-8 mobile:flex mobile:flex-col mobile:items-center mobile:gap-4">
        <h1 className="desktop:text-6xl desktop:font-extrabold desktop:leading-[4rem] desktop:w-[34rem] tablet:text-5xl tablet:font-extrabold tablet:w-[24rem] mobile:text-4xl mobile:font-bold mobile:text-center">
          Investir de forma mais inteligente passa por aqui.
        </h1>
        <h2 className="desktop:w-[28rem] desktop:leading-5 tablet:w-[25rem] tablet:leading-4 desktop:text-lg tablet:text-base mobile:text-center">
          Fazemos de tudo para que você possa conquistar seus sonhos da melhor forma possível.
        </h2>
        <div className="tablet:-[26rem]">
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
