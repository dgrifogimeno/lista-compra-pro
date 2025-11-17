import EmptyListIcon from "../../../../../assets/list-checklist-svgrepo-com.svg";
import './EmptyList.css';

export function EmptyList() {
  return (
    <div className="empty-list-container">
        <img src={EmptyListIcon} width="80" height="80" alt="Carrito" className="centered-image"/>
        <h4>La llista està buida</h4>
        <h5>Afegeix productes per començar la teva llista de la compra!</h5>
    </div>
    );
}
