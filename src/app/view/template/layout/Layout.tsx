import "./Layout.css";

import ShoppingCartIcon from "../../../../assets/shopping-cart-svgrepo-com.svg";
import UserIcon from "../../../../assets/user-svgrepo-com.svg";
import HelpIcon from "../../../../assets/help-svgrepo-com.svg";

export function Layout() {
  return (
    <header>
        <div className="layout-header">
            <img src={ShoppingCartIcon} width="90" height="90" alt="Carrito" />
            <h3>CistellApp</h3>
            <img src={HelpIcon} width="50" height="50" alt="Carrito" />
            <img src={UserIcon} width="50" height="50" alt="Carrito" />
        </div>
    </header>
  );
}