import { Cards } from '@/types';
import { Carousel as AntdCarousel } from 'antd';

function Testimonial({ cards }: { cards: Cards[] }) {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col">
        <h1 className="text-[38px] font-bold">Didática de verdade</h1>
        <p>Garantindo seu aprendizado</p>
      </div>
      <AntdCarousel
        autoplay
        dots={false}
        autoplaySpeed={5000}
        easing="linear"
        className="h-[21rem] w-[25rem] mt-16"
      >
        {cards.map((card) => (
          <div key={card.title}>
            <img src={card.path} alt={card.title} className={`w-[340px] h-[300px]`} />
          </div>
        ))}
      </AntdCarousel>
    </div>
  );
}

export default Testimonial;
