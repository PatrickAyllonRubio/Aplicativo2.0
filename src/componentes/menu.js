import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTshirt, faUser, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import '../styles.css'; // Importa el archivo CSS

const Menu = ({ logo }) => {
  return (
    <nav className="menu-nav">
      <div className="menu-logo">
        <img src={logo} alt="Logo" className="menu-logoImg" />
      </div>
      <div className="menu-opciones">
        <ul className="menu-leftNavList">
          <li><a href="/" className="menu-link">Option 1</a></li>
          <li><a href="/" className="menu-link">Option 2</a></li>
          <li><a href="/" className="menu-link">Option 3</a></li>
        </ul>
        <ul className="menu-rightNavList">
          <li><a href="/" className="menu-iconLink"><FontAwesomeIcon icon={faSearch} className="menu-icon" /></a></li>
          <li><a href="/" className="menu-iconLink"><FontAwesomeIcon icon={faTshirt} className="menu-icon" /></a></li>
          <li><a href="/" className="menu-iconLink"><FontAwesomeIcon icon={faUser} className="menu-icon" /></a></li>
          <li><a href="/" className="menu-iconLink"><FontAwesomeIcon icon={faShoppingBag} className="menu-icon" /></a></li>
        </ul>
      </div>
    </nav>
  );
}
export default Menu;
