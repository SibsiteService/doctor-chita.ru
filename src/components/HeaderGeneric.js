import React from 'react'
import { Link } from 'gatsby'
import logo from '../assets/images/logo-full.png';



const HeaderGeneric = (props) => (
    <header id="header" className="alt">
        <span className="logo"><Link to="/"><img src={logo} alt="Ваш + Доктор | Лого" width="70%"/></Link></span>
        
        <a href="http://n207269.yclients.com"  target="_blank" rel="noopener noreferrer" class="button fit">
                  ЗАПИСАТЬСЯ НА ПРИЕМ
        </a>
    </header>
    
)

export default HeaderGeneric
