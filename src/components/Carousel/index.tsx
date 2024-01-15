import { Cards } from '@/types';
import { Carousel as AntdCarousel } from 'antd';


function CarouselComponent({ cards }: { cards: Cards[] }) {
  return (
    <div className='flex flex-row'>
      <div className='w-[93.5px] h-33 top-[27px] left-[46px] mt-2'>
        <p>visto em</p>
      </div>
      <AntdCarousel autoplay dots={false} className='h-[79px] w-[502px]'>
        {cards.map((card) => (
          <div className='flex items-center' key={card.title}>
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
