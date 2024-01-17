import { Cards } from '@/types';
import { Carousel as AntdCarousel } from 'antd';

function CarouselComponent({ cards }: { cards: Cards[] }) {
  return (
    <div className="mt-12 flex desktop:w-[34rem] justify-between items-center tablet:w-[24rem]">
      <p className="leading-6 ml-[20px]">visto em</p>
      <AntdCarousel autoplay dots={false} className="h-[2.4rem] desktop:w-[22rem] tablet:w-[17rem]">
        {cards.map((card) => (
          <div key={card.title}>
            <img
              src={card.path}
              alt={card.title}
              className={`w-[${card.width}] h-[${card.height}] left-2 items-center`}
            />
          </div>
        ))}
      </AntdCarousel>
    </div>
  );
}

export default CarouselComponent;
