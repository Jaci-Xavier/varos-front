import user from '../../assets/User.png';
import shoppingCart from '../../assets/shopping--cart.png';

function UserMenu() {
  return (
    <div className="desktop:flex desktop:items-center desktop:justify-between desktop:h-[2.8rem] desktop:gap-4">
      <a href="/login" className="flex items-center gap-4">
        <img src={shoppingCart} alt="user" className="nav-icon" />
        Assinar Agora
      </a>
      <a href="/cart" className="flex items-center gap-4">
        <img src={user} alt="shopping-cart" className="nav-icon items-center gap-4" />
        Entrar
      </a>
    </div>
  );
}

export default UserMenu;
