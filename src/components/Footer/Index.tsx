import { useState, useEffect } from 'react';
import frame331 from '../../assets/Frame 331.svg';
import varos from '../../assets/varos.png';

function Footer() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isDesktop ? (
    <div className="flex flex-col pt-40 justify-between pb-8">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <img src={frame331} alt="Varos Icon" className="w-[74px] h-[74px]" />
          <img src={varos} alt="Varos Logo" className="w-[74px] h-[13px]" />
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-[#F2F4F8]">Cursos</p>
          <p className="text-[#F2F4F6]">
            Valuation do Zero ao
            <br />
            Avançado 2.0
          </p>
          <p className="text-[#F2F4F6]">Código.py</p>
          <p className="text-[#F2F4F6]">Minicurso Reels</p>
          <p className="text-[#F2F4F6]">Enciclopédia de FII</p>
        </div>
        <div className="flex flex-col justify-start gap-[20px]">
          <p className="text-[#F2F4F8]">Carteiras</p>
          <p className="text-[#F2F4F6]">Carteira FATOR</p>
          <p className="text-[#F2F4F6]">Carteira Seleção</p>
          <p className="text-[#F2F4F6]">Carteira Essencial</p>
          <p className="text-[#F2F4F6]">Carteira Small Caps</p>
          <p className="text-[#F2F4F6]">Carteira Dividendos</p>
          <p className="text-[#F2F4F6]">Carteira FIIs</p>
        </div>
        <div
          className="w-[172px] h-[71px] flex flex-col justifi-start gap-[20px] 
      "
        >
          <p className="text-[#F2F4F8]">Sobre</p>
          <p className="text-[#F2F4F6]">Quem Somos</p>
        </div>
        <div
          className="w-[172px] h-[161px] flex flex-col justify-start gap-[20px]
      "
        >
          <p className="text-[#F2F4F8]">Redes Sociais</p>
          <p className="text-[#F2F4F6]">Instagram</p>
          <p className="text-[#F2F4F6]">Twitter</p>
          <p className="text-[#F2F4F6]">Youtube</p>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-[#F2F4F6]">Varos 2023</p>
        <p className="text-[#F2F4F6]">Todos os direitos reservados</p>
      </div>
    </div>
  ) : (
    <div className="flex flex-col pt-16 justify-between pb-8">
      <div className="flex flex-col py-12 gap-4">
        <img src={frame331} alt="Varos Icon" className="w-[74px] h-[74px]" />
        <img src={varos} alt="Varos Logo" className="w-[74px] h-[13px]" />
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col gap-3">
          <p className="text-[#F2F4F8]">Cursos</p>
          <p className="text-[#F2F4F6]">
            Valuation do Zero ao
            <br />
            Avançado 2.0
          </p>
          <p className="text-[#F2F4F6]">Código.py</p>
          <p className="text-[#F2F4F6]">Minicurso Reels</p>
          <p className="text-[#F2F4F6]">Enciclopédia de FII</p>
        </div>
        <div className="flex flex-col justify-start gap-[20px]">
          <p className="text-[#F2F4F8]">Carteiras</p>
          <p className="text-[#F2F4F6]">Carteira FATOR</p>
          <p className="text-[#F2F4F6]">Carteira Seleção</p>
          <p className="text-[#F2F4F6]">Carteira Essencial</p>
          <p className="text-[#F2F4F6]">Carteira Small Caps</p>
          <p className="text-[#F2F4F6]">Carteira Dividendos</p>
          <p className="text-[#F2F4F6]">Carteira FIIs</p>
        </div>
        <div
          className="w-[172px] h-[71px] flex flex-col justifi-start gap-[20px] 
      "
        >
          <p className="text-[#F2F4F8]">Sobre</p>
          <p className="text-[#F2F4F6]">Quem Somos</p>
        </div>
        <div
          className="w-[172px] h-[161px] flex flex-col justify-start gap-[20px]
      "
        >
          <p className="text-[#F2F4F8]">Redes Sociais</p>
          <p className="text-[#F2F4F6]">Instagram</p>
          <p className="text-[#F2F4F6]">Twitter</p>
          <p className="text-[#F2F4F6]">Youtube</p>
        </div>
      </div>
      <div className="flex flex-col gap-2 pt-12">
        <p className="text-[#F2F4F6]">Varos 2023</p>
        <p className="text-[#F2F4F6]">Todos os direitos reservados</p>
      </div>
    </div>
  );
}

export default Footer;
