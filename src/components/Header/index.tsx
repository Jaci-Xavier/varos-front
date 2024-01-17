import Navbar from '../Navbar';
import UserMenu from '../UserMenu';

function Header() {
  return (
    <div className="flex flex-row w-100vw h-[64px] left-[0.2px] gap-[177px] items-center p-[10px 144px 10px 144px] justify-around">
      <Navbar />
      <UserMenu />
    </div>
  );
}

export default Header;
