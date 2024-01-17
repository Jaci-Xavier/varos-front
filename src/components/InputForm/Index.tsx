import React, { useState } from 'react';
import { FormData } from '../../types';
import fetchApi from '../../utils/fetchApi';

function ASideCard() {
  return (
    <div className="flex flex-col desktop:w-[44rem] mobile:w-[20rem]">
      <h1 className="tablet:text-4xl desktop:text-6xl font-bold">
        Cadastre-se para receber mais informações
      </h1>
      <p className="desktop:text-lg tablet:text-base font-bold">
        Fique ligado no que tem de melhor no Mercado Financeiro
      </p>
    </div>
  );
}

const InputForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
  });

  const [isSubmitDisabled, setSubmitDisabled] = useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    validateFormData();
  };

  const validateFormData = (): void => {
    const isValidName = formData.name.length > 4;
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
    const isValidPhone = formData.phone.length >= 9;

    setSubmitDisabled(!(isValidName && isValidEmail && isValidPhone));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    const apiResponse = await fetchApi('https://jsonplaceholder.typicode.com/todos/1');
    console.log('Fetch em ap aleatória', apiResponse);
    setFormData({
      name: '',
      email: '',
      phone: '',
    });
    setSubmitDisabled(true);
  };

  return (
    <div className="flex justify-between">
      <ASideCard />
      <div className="rounded-[32px] bg-[#131516] border border-[#222729] flex flex-col justify-around desktop:py-10 tablet:py-12">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col desktop:gap-16 desktop:px-10 tablet:gap-8 tablet:px-8"
        >
          <input
            className="rounded-[4px] bg-[#222729] border border-[#4D5358] placeholder-[#878D96] desktop:py-3 tablet:py-2 tablet:px-10"
            type="text"
            name="name"
            placeholder="Nome"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            className="rounded-[4px] bg-[#222729] border border-[#4D5358] placeholder-[#878D96] desktop:py-3 tablet:py-2 tablet:px-10"
            type="text"
            name="email"
            placeholder="Seu melhor e-mail"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            className="rounded-[4px] bg-[#222729] border border-[#4D5358] placeholder-[#878D96] desktop:py-3 tablet:py-2 tablet:px-10"
            type="tel"
            name="phone"
            placeholder="Celular"
            value={formData.phone}
            onChange={handleChange}
          />
          <div className="flex flex-row justify-center">
            <button
              className={`bg-[#19C819] rounded-[4px] desktop:py-3 desktop:px-[15rem] text-black desktop:text-lg tablet:text-base font-bold border border-[#FAFAFA] tablet:py-2 tablet:px-10 ${
                isSubmitDisabled ? 'cursor-not-allowed opacity-50' : ''
              }`}
              type="submit"
              disabled={isSubmitDisabled}
            >
              QUERO ME INSCREVER
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InputForm;
