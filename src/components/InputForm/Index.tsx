import React, { useState } from 'react';
import { FormData } from '../../types';



function ASideCard() {
  return (
    <div className='w-[466px] h-[144px] flex flex-col'>
      <div className='w-[463px] h-[93px]'>
        <h1 className='text-[38px] font-bold leading-10'>Cadastre-se para receber mais informações</h1>
      </div>
      <div>
        <h1 className='text-[18px] font-bold leading-6'>Fique ligado no que tem de melhor no Mercado Financeiro</h1>
      </div>
    </div>
  )
}


const  InputForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <div className='flex flex-row justify-evenly w-[1200px] h-[384px] mt-[150px]'>
      <div className=''>
        <ASideCard />
      </div>
      <div className=' w-[564px] h-[384px] rounded-[32px] border border-gray-600 flex flex-col items-center text-center justify-center'>
        <form onSubmit={handleSubmit} className='bg-black flex flex-col items-center w-[452px] h-[264px] justify-evenly'>
          <input
            className='rounded-[4px] w-[452px] h-[48px] bg-[#222729] border border-[#4D5358] pl-3 placeholder-[#878D96]'
            type='text'
            name='name'
            placeholder='Nome'
            value={formData.name}
            onChange={handleChange}
          />
          <input
            className='rounded-[4px] w-[452px] h-[48px] bg-[#222729] border border-[#4D5358] pl-3 placeholder-[#878D96]'
            type='text'
            name='email'
            placeholder='E-mail'
            value={formData.email}
            onChange={handleChange}
          />
          <input
            className='rounded-[4px] w-[452px] h-[48px] bg-[#222729] border border-[#4D5358] pl-3 placeholder-[#878D96]'
            type='text'
            name='phone'
            placeholder='Celular'
            value={formData.phone}
            onChange={handleChange}
          />
          <div className='flex flex-row justify-center'>
            <button
              className='bg-[#19C819] rounded-[4px] w-[452px] h-[48px] text-black text-[18px] font-semibold leading-6'
              type='submit'
            >
              QUERO ME INSCREVER
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default InputForm;