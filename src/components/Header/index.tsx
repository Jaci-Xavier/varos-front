import Navbar from '../Navbar';
import UserMenu from '../UserMenu';

function Header() {
  return (
    <div className="flex h-[9vh] gap-[11rem] items-center justify-between">
      <Navbar />
      <UserMenu />
    </div>
  );
}

export default Header;
