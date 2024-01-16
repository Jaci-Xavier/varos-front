import { Cards } from '@/types';
import { Carousel as AntdCarousel } from 'antd';


function Testimonial({ cards }: { cards: Cards[] }) {

  return (
    <div className='flex flex-col h-[553px]'>
      <div className='w-[420px] h-[112px] flex flex-col'>
        <h1 className='text-[38px] font-bold'>Didática de verdade</h1>
        <div className='w-[259px] h-[22px]'>
          <h3 className='text-[18px] font-bold'>Garantindo seu aprendizado</h3>
        </div>
      </div>
      <AntdCarousel autoplay dots={false} autoplaySpeed={5000} easing="linear" className='h-[328px] w-[608px] mt-[20px]'>
        {cards.map((card) => (
          <div className='flex items-center' key={card.title}>
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
