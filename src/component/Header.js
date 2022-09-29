import React from 'react';


 const Header = () => {
  return (
    <div className='header-container'>
        <a>
          <img src="/images/logo.svg" alt="logo"/>
        </a>
        <div className='menu-container'>
             <a href="#">Model-S</a>
             <a href="#">Model-3</a>
             <a href="#">Model-X</a>
             <a href="#">Model-Y</a>
        </div>
        <div className="right-menu">
            <a href="#">Shop</a>
            <a href="#">Tesla Account</a>
        </div>
    </div>
  )
}
export default Header;
