import codigo from '../../assets/CODIGO.png';
import dividendos from '../../assets/Dividendos.png';
import fator from '../../assets/FATOR.png';

function CardHero() {
  return (
    <div className="flex flex-col desktop:justify-between w-full desktop:gap-16 desktop:px-[18rem] tablet:px-8 tablet:gap-16">
      <div className="flex items-center text-center gap-3 ">
        <div className="w-[51px] h-[46px] rounded-lg border border-gray-600 flex items-center justify-center">
          <img src={fator} alt="imagem" className="w-[21px] h-[21px]" />
        </div>
        <p>Carteira FATOR</p>
      </div>
      <div className="flex items-center text-center gap-3 self-end">
        <div className="w-[51px] h-[46px] rounded-lg border border-gray-600 flex items-center justify-center">
          <img src={dividendos} alt="imagem" className="w-[21px] h-[21px]"></img>
        </div>
        <a>Carteira de Dividendos</a>
      </div>
      <div className="flex items-center text-center gap-3">
        <div className="w-[51px] h-[46px] rounded-lg border border-gray-600 flex items-center justify-center">
          <img src={codigo} alt="imagem" className="w-[21px] h-[21px]" />
        </div>
        <a>
          Código<span className="text-[#00F0C9]">.py</span>
        </a>
      </div>
    </div>
  );
}

export default CardHero;
