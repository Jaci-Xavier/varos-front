import React, { useState } from 'react';
import { FormData } from '../../types';
import fetchApi from '../../utils/fetchApi';

function ASideCard() {
  return (
    <div className="flex flex-col">
      <h1 className="text-[2.5rem] font-bold">
        Cadastre-se para receber <br />
        mais informações
      </h1>
      <p>
        Fique ligado no que tem de melhor no
        <br />
        Mercado Financeiro
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
      <div className="px-12 py-14 rounded-[32px] border border-gray-600 flex flex-col">
        <form onSubmit={handleSubmit} className="flex flex-col gap-8">
          <input
            className="rounded-[4px] py-3 px-32 bg-[#222729] border border-[#4D5358] pl-3 placeholder-[#878D96]"
            type="text"
            name="name"
            placeholder="Nome"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            className="rounded-[4px] py-3 px-32 bg-[#222729] border border-[#4D5358] pl-3 placeholder-[#878D96]"
            type="text"
            name="email"
            placeholder="E-mail"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            className="rounded-[4px] py-3 px-32 bg-[#222729] border border-[#4D5358] pl-3 placeholder-[#878D96]"
            type="tel"
            name="phone"
            placeholder="Celular"
            value={formData.phone}
            onChange={handleChange}
          />
          <div className="flex flex-row justify-center">
            <button
              className={`bg-[#19C819] rounded-[4px] py-3 px-32 text-black text-[18px] font-bold ${
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
