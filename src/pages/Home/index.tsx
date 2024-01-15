import { useState } from 'react';
import CardHero from '../../components/CardHero/Index';
import Hero from '../../components/Hero';
import H2sub from '../../components/H2sub';
import { Carteiras } from '@/types';
import { carteiras, cursos, constultoria } from '../../constants/Constants';

interface OptionProps {
  options: Carteiras[];
  selectedOption: string;
  onChange: (value: string) => void;
}


function Option({ options, selectedOption, onChange }: OptionProps) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleOptionChange = (value: string) => {
    onChange(value);
    setDropdownOpen(false);
  };

  return (
    <div className='relative inline-block text-left'>
      <div>
        <span className='rounded-md shadow-sm'>
          <button
            type='button'
            className='inline-flex justify-center w-full rounded-[20px] border border-gray-300 shadow-sm px-4 py-2 bg-[#222729] text-sm font-medium text-[F2F4F8] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-primary'
            id='options-menu'
            aria-haspopup='true'
            aria-expanded='true'
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            {selectedOption || 'Selecione uma opção'}
          </button>
        </span>
      </div>

      {dropdownOpen && (
        <div className='origin-top-right absolute right-0 mt-2 w-[267px] rounded-md shadow-lg bg-red-900 ring-1 ring-black ring-opacity-5 focus:outline-none'>
          <div className='py-1'>
            {options.map((option) => (
              <div
                key={option.title}
                className='flex items-center px-4 py-2 text-sm cursor-pointer hover:bg-gray-700'
                onClick={() => handleOptionChange(option.title)}
              >
                <img src={option.img} alt={option.title} className='mr-2' />
                {option.title}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function Home() {
  const [selectedCarteira, setSelectedCarteira] = useState<string>('');
  const [selectedCurso, setSelectedCurso] = useState<string>('');
  const [selectedConsultoria, setSelectedConsultoria] = useState<string>('');

  const handleSelectChange = (value: string, category: string) => {
    // Função para resetar os estados das outras opções
    const resetOptions = () => {
      setSelectedCarteira('');
      setSelectedCurso('');
      setSelectedConsultoria('');
    };

    // Resetar outros estados e definir o estado da opção selecionada
    switch (category) {
      case 'carteiras':
        resetOptions();
        setSelectedCarteira(value);
        break;
      case 'cursos':
        resetOptions();
        setSelectedCurso(value);
        break;
      case 'constultoria':
        resetOptions();
        setSelectedConsultoria(value);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <div className='flex items-center text-center w-[98vw] justify-evenly'>
        <Hero />
        <CardHero />
      </div>
      <div className='flex w-[98vw] justify-start'>
        <H2sub />
      </div>
      <div className='ml-[165px] flex flex-col w-[270px]'>
        <Option options={carteiras} selectedOption={selectedCarteira} onChange={(value) => handleSelectChange(value, 'carteiras')} />
        <Option options={cursos} selectedOption={selectedCurso} onChange={(value) => handleSelectChange(value, 'cursos')} />
        <Option options={constultoria} selectedOption={selectedConsultoria} onChange={(value) => handleSelectChange(value, 'constultoria')} />
      </div>
    </div>
  );
}

export default Home;