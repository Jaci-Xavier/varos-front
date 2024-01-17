import { Cards } from '@/types';
import { Carousel as AntdCarousel } from 'antd';

function CarouselComponent({ cards }: { cards: Cards[] }) {
  return (
    <div className="flex flex-row w-[562px] h-[40px] justify-between items-center text-center rounded-[32px]">
      <p className="text-[20px] font-normal leading-6 ml-[20px]">visto em</p>
      <AntdCarousel autoplay dots={false} className="h-[38px] w-[350px]">
        {cards.map((card) => (
          <div className="flex justify-center item-center bg" key={card.title}>
            <img
              src={card.path}
              alt={card.title}
              className={`w-[${card.width}] h-[${card.height}] left-10 items-center`}
            />
          </div>
        ))}
      </AntdCarousel>
    </div>
  );
}

export default CarouselComponent;
