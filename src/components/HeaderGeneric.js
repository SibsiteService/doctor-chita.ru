import React from 'react'
import { Link } from 'gatsby'
import logo from '../assets/images/logo-full.png';



const HeaderGeneric = (props) => (
    <header id="header" className="alt">
        <span className="logo"><Link to="/"><img src={logo} alt="Ваш + Доктор | Лого" width="70%"/></Link></span>
        
        <Link to="/contactform">
        <a target="_blank" className="button fit">
            ЗАПИСАТЬСЯ НА ПРИЁМ
        </a>
        </Link> 

       </header>
    
)

export default HeaderGeneric
