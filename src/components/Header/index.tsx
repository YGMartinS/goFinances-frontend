import React from 'react';

import { Link } from 'react-router-dom';

import { Container } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
  activeMenuBar?: 'dashboard' | 'import';
}

const Header: React.FC<HeaderProps> = ({ size = 'large', activeMenuBar }: HeaderProps) => {
  return (
    <Container size={size} activeMenuBar={activeMenuBar}>
    <header>
      <img src={Logo} alt="GoFinances" />
      <nav>
        <Link to="/" className={activeMenuBar === 'dashboard' ? activeMenuBar:''}>Listagem</Link>
        <Link to="/import" className={activeMenuBar === 'import' ? activeMenuBar:''}>Importar</Link>
      </nav>
    </header>
  </Container>
  )
};

export default Header;
