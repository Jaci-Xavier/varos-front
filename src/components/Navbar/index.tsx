import { NavItem } from '../../types';
import { nav } from '../../constants/Constants';
import varos from '../../assets/varos.png';

function Navbar() {
  return (
    <div className="flex items-center justify-between gap-[4.2rem]">
      <img src={varos} alt="varos" className="logo" />
      {nav.map((item: NavItem) => (
        <a
          key={item.name}
          href={item.path}
          className="text-white"
          style={{ marginRight: '0.5rem' }}
        >
          {item.name}
        </a>
      ))}
    </div>
  );
}

export default Navbar;
