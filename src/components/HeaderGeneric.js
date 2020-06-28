import React from 'react'
import { Link } from 'gatsby'
import logo from '../assets/images/logo-full.png';
import CookieConsent, { Cookies } from "react-cookie-consent";


const HeaderGeneric = (props) => (
    <header id="header" className="alt">
        <br/>
        <span className="logo"><Link to="/"><img src={logo} alt="Ваш + Доктор | Лого" width="70%"/></Link></span>
        
        <Link to="/contactform">
        <a target="_blank" className="button fit">
            ЗАПИСАТЬСЯ НА ПРИЁМ
        </a>
        </Link> 

        <CookieConsent 
        location="top"
        buttonText=""
        cookieName="Акция 1"
        style={{ background: "#008942", position: "absolute", width: "100%", height: "11%" }}
        buttonStyle={{ background: "#008942", fontSize: "13px", padding: "0px 0px" }}
        expires={300}
        >
             
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<a href="https://www.doctor-chita.ru/uzi" target="_blank" alt="Гинеколог + УЗИ" target="_blank">АКЦИЯ!</a> Приём Гинеколога + УЗИ 1175₽
            
        </CookieConsent>

       </header>
    
)

export default HeaderGeneric
