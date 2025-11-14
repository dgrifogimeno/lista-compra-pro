import "./Layout.css";
import { Switch } from '@mantine/core';

import ShoppingCartIcon from "../../../../assets/shopping-cart-svgrepo-com.svg";
import UserIcon from "../../../../assets/user-svgrepo-com.svg";
import HelpIcon from "../../../../assets/help-svgrepo-com.svg";

type SwithcProps = {
  confetti: boolean;
  setConfetti: (value: boolean) => void;
}

export function Layout({ confetti, setConfetti }: SwithcProps) {
  return (
    <header>
        <div className="layout-header">
            <img src={ShoppingCartIcon} width="90" height="90" alt="Carrito" />
            <h3>CistellApp</h3>
            
            <Switch checked={confetti} onChange={(event) => setConfetti(event.currentTarget.checked)} onLabel="Confetti" offLabel="No Confetti" size="lg" className="confettiSwitch" />
            <img src={HelpIcon} width="50" height="50" alt="Carrito" />
            <img src={UserIcon} width="50" height="50" alt="Carrito" />
        </div>
        <div className="layout-separator"></div>
    </header>
  );
}