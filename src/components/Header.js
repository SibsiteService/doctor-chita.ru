import React from 'react'
import logo from '../assets/images/logo-full.png';
import { Link } from 'gatsby'
import CookieConsent, { Cookies } from "react-cookie-consent";



const Header = (props) => (
    <header id="header" className="alt">
        <span className="logo"><br/><Link to="/"><img src={logo} alt="Ваш + Доктор | Лого" width="70%"/></Link></span>
        
      
            <Link 
                to="/contactform">
            <a target="_blank" className="button fit">
                ЗАПИСАТЬСЯ НА ПРИЁМ
            </a>
            </Link>

        <CookieConsent 
        location="top"
        buttonText=""
        cookieName="Акция 1"
        style={{ background: "#008942", position: "absolute", margin: "5px", width: "100%", height: "9%"}}
        buttonStyle={{ background: "#008942", fontSize: "13px", padding: "0px 0px" }}
        expires={300}
        >
         &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<a href="https://www.doctor-chita.ru/uzi" target="_blank" alt="Гинеколог + УЗИ" target="_blank">АКЦИЯ!</a> Приём Гинеколога + УЗИ 1175₽
        </CookieConsent>
          
    </header>
    
)

export default Header