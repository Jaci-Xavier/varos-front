import { Cards } from '@/types';
import { Carousel as AntdCarousel } from 'antd';

function Testimonial({ cards }: { cards: Cards[] }) {
  return (
    <div className="flex flex-col tablet:w-[22rem] desktop:w-[38rem] mobile:text-center mobile:gap-4 mobile:w-[19rem]">
      <div className="flex flex-col">
        <h1 className="desktop:text-6xl tablet:text-4xl font-bold mobile:text-3xl">Didática de verdade</h1>
        <p className="desktop:text-lg tablet:text-base font-bold mobile:text-xl">Garantindo seu aprendizado</p>
      </div>
      <AntdCarousel
        autoplay
        dots={false}
        autoplaySpeed={5000}
        easing="linear"
        className="tablet:h-[19rem] desktop:h-[36rem] mobile:h-[20rem]"
      >
        {cards.map((card) => (
          <div key={card.title}>
            <img
              src={card.path}
              alt={card.title}
              className="tablet:w-[21rem] tablet:h-[15rem] desktop:h-[30rem] desktop:w-[30rem]"
            />
          </div>
        ))}
      </AntdCarousel>
    </div>
  );
}

export default Testimonial;
