import React from 'react'
import logo from '../assets/images/logo-full.png';
import { Link } from 'gatsby'

import { Slider } from 'infinite-react-carousel'

import offer01 from '../assets/images/offer_01.png';
import offer02 from '../assets/images/offer_02.png';
import offer03 from '../assets/images/offer_03.png';
import offer04 from '../assets/images/offer_04.png';
import offer05 from '../assets/images/offer_05.png';


const Header = (props) => (
    
    <header id="header" className="alt">
        <span className="logo"><br/>
            <Link to="/">
            <img src={logo} alt="Ваш + Доктор | Лого" width="45%"/>
            </Link>
        </span>
        
      
            <Link 
                to="/contactform">
            <a target="_blank" className="button fit">
                ЗАПИСАТЬСЯ НА ПРИЁМ
            </a>
            </Link>
            
            
            
          
            <Slider 
            dots
            autoplaySpeed='3000' 
            autoplay
            >
                <a href="https://www.doctor-chita.ru/ginekologia" target="_blank">
                <div>
                <img src={offer01} alt="Ваш + Доктор | Скидки" width="100%"/>
                </div>
                </a>
                <a href="https://www.doctor-chita.ru/beremennost" target="_blank">
                <div>
                <img src={offer02} alt="Ваш + Доктор | Скидки" width="100%"/>
                </div>
                </a>
                <a href="https://www.doctor-chita.ru/beremennost" target="_blank">
                <div>
                <img src={offer03} alt="Ваш + Доктор | Скидки" width="100%"/>
                </div>
                </a>
                <a href="https://www.doctor-chita.ru/uzi" target="_blank">
                <div>
                <img src={offer04} alt="Ваш + Доктор | Скидки" width="100%"/>
                </div>
                </a>
                <a href="https://www.doctor-chita.ru/uzi" target="_blank">
                <div>
                <img src={offer05} alt="Ваш + Доктор | Скидки" width="100%"/>
                </div>
                </a>
            </Slider>
            
    </header>
    
)

export default Header