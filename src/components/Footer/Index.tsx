// import { useState, useEffect } from 'react';
import frame331 from '../../assets/Frame 331.svg';
import varos from '../../assets/varos.png';

function Footer() {
  return (
    <div className='mobile:w-full flex mobile:flex-col mobile:gap-6 mt-20 py-8 tablet:justify-between tablet:w-screen desktop:w-full desktop:justify-between'>

      <div className='flex mobile:flex-col mobile:gap-4 tablet:flex-col tablet:gap-4 tablet:items-center text-center desktop:flex-col desktop:gap-8 desktop:items-start desktop:w-1/2'>
        <div>
          <img src={frame331} alt="logo" />
          <img src={varos} alt="logo" />
        </div>
        <p>VAROS 2023</p>
        <p>Todos os direitos reservados</p>
      </div>

      <div className='flex tablet:justify-center  desktop:w-full desktop:justify-around'>
        <div className='flex flex-col gap-2 mobile:w-1/2  tablet:w-1/2'>
          <h3 className='font-bold text-xl'>Cursos</h3>
          <p>Valuation do Zero ao Avançado 2.0</p>
          <p>Código.py</p>
          <p>Minicurso Reels</p>
          <p>Enciclopédia de FII</p>
        </div>
        <div className='flex flex-col gap-2 mobile:w-1/2'>
          <h3 className='font-bold text-xl'>Carteiras</h3>
          <p>Carteira FATOR</p>
          <p>Carteira Seleção</p>
          <p>Carteira Essencial</p>
          <p>Carteira dividendos</p>
          <p>Carteira de FIIs</p>
        </div>
      </div>

      <div className='flex tablet:justify-center desktop:w-full desktop:justify-around'>
      <div className='flex flex-col gap-2 mobile:w-1/2'>
          <h3 className='font-bold text-xl'>Sobre</h3>
          <p>Quem somos</p>
        </div>
        <div className='flex flex-col gap-2 mobile:w-1/2'>
          <h3 className='font-bold text-xl'>Redes Sociais</h3>
          <p>Instagram</p>
          <p>Twitter</p>
          <p>Youtube</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
