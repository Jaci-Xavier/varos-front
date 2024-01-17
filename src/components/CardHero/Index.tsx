import codigo from '../../assets/CODIGO.png';
import dividendos from '../../assets/Dividendos.png';
import fator from '../../assets/FATOR.png';

function CardHero() {
  return (
    <div className="w-[325px] h-[371px] top-[269px] rounded-2xl flex flex-col justify-around">
      <div className="flex flex-row items-center text-center gap-[11px] p-2">
        <div className="w-[51px] h-[46px] top-2 lef-[10px] rounded-lg border border-gray-600 flex flex-row items-center justify-center">
          <img src={fator} alt="imagem" className="w-[21px] h-[21px]" />
        </div>
        <p>Carteira FATOR</p>
      </div>
      <div className="flex flex-row items-center text-center gap-[11px] self-end p-2">
        <div className="w-[51px] h-[46px] top-2 lef-[10px] rounded-lg border border-gray-600 flex flex-row items-center justify-center">
          <img src={dividendos} alt="imagem" className="w-[21px] h-[21px]"></img>
        </div>
        <a>Carteira de Dividendos</a>
      </div>
      <div className="flex flex-row items-center text-center gap-[11px] p-2">
        <div className="w-[51px] h-[46px] top-2 lef-[10px] rounded-lg border border-gray-600 flex flex-row items-center justify-center">
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
