import { Cards } from '@/types';
import { Carousel as AntdCarousel } from 'antd';

function Testimonial({ cards }: { cards: Cards[] }) {
  return (
    <div className="flex flex-col h-[553px] w-[511px] items-start">
      <div className=" w-[420px] h-[112px] flex flex-col text-left ml-[10px]">
        <h1 className="text-[38px] font-bold">Didática de verdade</h1>
        <h3 className="text-[18px] font-bold">Garantindo seu aprendizado</h3>
      </div>
      <AntdCarousel
        autoplay
        dots={false}
        autoplaySpeed={5000}
        easing="linear"
        className="h-[340px] w-[400px] mt-[20px] ml-6"
      >
        {cards.map((card) => (
          <div className="flex items-center" key={card.title}>
            <img
              src={card.path}
              alt={card.title}
              className={`w-[340px] h-[300px] left-10 items-center`}
            />
          </div>
        ))}
      </AntdCarousel>
    </div>
  );
}

export default Testimonial;
