import { useState, useEffect } from 'react';
import Navbar from '../Navbar';
import UserMenu from '../UserMenu';
import { nav2, mobileMenu } from '../../constants/Constants';
import varos from '../../assets/varos.png';
import user from '../../assets/User.png';
import vector from '../../assets/Vector.png';

function Toggle({ onToggleClick }: { onToggleClick: () => void }) {
  return (
    <div className="flex justify-between">
      <img src={varos} alt="" />
      <button
        type="button"
        id="openMenu"
        className="flex flex-col items-center gap-y-1 tablet:w-2 h-2"
        onClick={onToggleClick}
      >
        <span className="w-[30px] h-[2px] bg-[#FAFAFA] rounded-xl"></span>
        <span className="w-[30px] h-[2px] bg-[#FAFAFA] rounded-xl"></span>
        <span className="w-[30px] h-[2px] bg-[#FAFAFA] rounded-xl"></span>
      </button>
    </div>
  );
}

function Header() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleToggleClick = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <div>
      {isDesktop ? (
        <div className="flex h-[9vh] gap-[11rem] items-center justify-between">
          <Navbar />
          <UserMenu />
        </div>
      ) : (
        <div>
          <Toggle onToggleClick={handleToggleClick} />
          {open && (
            <div className="bg-[#131313] block absolute top-10 w-full z-10">
              <div className="flex flex-col px-12 gap-2 py-2">
                <button
                  type="button"
                  className="bg-[#131313] flex items-center justify-center gap-3 border border-[#FAFAFA]"
                >
                  <img src={user} alt="" className="w-[30px] h-[30px]" />
                  <p className="">Entrar</p>
                </button>
                <button
                  type="button"
                  className="bg-[#19C819] flex items-center justify-center gap-3 border border-[#FAFAFA]"
                >
                  <p className="text-black">Assinar Agora</p>
                </button>
              </div>
              <div className="text-start text-xl p-2 bg-[#131313]">
                <h1>Produtos</h1>
                {mobileMenu.map((item) => (
                  <div key={item.key} className="my-1 py-3 border-b border-[#FAFAFA]">
                    <div className="flex w-full justify-between">
                      <h1 className="text-2xl">{item.title}</h1>
                      <img src={vector} alt="" className="w-[30px] h-[20px]" />
                    </div>
                    <p>{item.description}</p>
                  </div>
                ))}
              </div>
              <ul className="text-start text-xl p-4 px-12">
                {nav2.map((item) => (
                  <a className="my-4 py-4" href={item.path} key={item.name}>
                    <li className="list-none">
                      <h1 className="text-2xl">{item.name}</h1>
                    </li>
                    <div className="h-[0.5px] bg-[#222729]" />
                  </a>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Header;
