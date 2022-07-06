import React from 'react'
import Nav from './nav';

function Header(props) {
  return (
    <header className={props.openNav ? 'active' : ''} >
      <Nav setOpenNav={props.setOpenNav} />
    </header>
  );
}

export default Header;