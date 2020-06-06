import React from 'react'
import logo from '../assets/images/logo-full.png';
import { Link } from 'gatsby'

import gemotest from '../assets/images/gemotest.svg';


const Header = (props) => (
    <header id="header" className="alt">
        <span className="logo"><Link to="/"><img src={logo} alt="Ваш + Доктор | Лого" width="70%"/></Link></span>
        <p>
            в партнерстве с
        <br/>
        <br/>
        <span className="logo"><a href="https://www.gemotest.ru/"  target="_blank" rel="noopener noreferrer"><img src={gemotest} alt="Гемотест | Лого" width="30%"/></a></span>
        </p>
          
        <Link to="/contactform">
        <a target="_blank" className="button fit">
            ЗАПИСАТЬСЯ НА ПРИЁМ
        </a>
        </Link>
        
    </header>
    
)

export default Header
