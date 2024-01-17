import user from '../../assets/User.png';
import shoppingCart from '../../assets/shopping--cart.png';

function UserMenu() {
  return (
    <div className="flex flex-row items-center justify-between w-[280px] h-[44px] gap-4">
      <a href="/login" className="flex flex-row items-center gap-4">
        <img src={shoppingCart} alt="user" className="nav-icon" />
        Assinar Agora
      </a>
      <a href="/cart" className="flex flex-row items-center gap-4">
        <img src={user} alt="shopping-cart" className="nav-icon items-center gap-4" />
        Entrar
      </a>
    </div>
  );
}

export default UserMenu;
