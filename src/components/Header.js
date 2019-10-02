import React from 'react'
import logo from '../assets/images/logo-full.png';


import gemotest from '../assets/images/gemotest.svg';


const Header = (props) => (
    <header id="header" className="alt">
        <span className="logo"><img src={logo} alt="Ваш + Доктор | Лого" width="60%"/></span>
        <p>
            в партнерстве с
        <br/>
        <br/>
        <span className="logo"><a href="https://www.gemotest.ru/"  target="_blank" rel="noopener noreferrer"><img src={gemotest} alt="Гемотест | Лого" width="30%"/></a></span>
        </p>
        <a href="http://n207269.yclients.com"  target="_blank" rel="noopener noreferrer" class="button fit">
                  ЗАПИСАТЬСЯ НА ПРИЕМ
                </a>
    </header>
    
)

export default Header
