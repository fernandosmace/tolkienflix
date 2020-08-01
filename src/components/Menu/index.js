import React from 'react';
import Logo from '../../assets/img/Logo.png';
import BackgroundHead from '../../assets/img/Background-head.png';
import './Menu.css';
import Button from '../Button';
//import ButtonLink from './components/ButtonLink';

function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={Logo} alt="The Last of Us Part II" />
      </a>
      <Button as="a" className="ButtonLink" href="/">
        Novo Vídeo
      </Button>
    </nav>
  );
}
export default Menu;
