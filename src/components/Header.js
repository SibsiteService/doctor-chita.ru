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
        <a href="mailto:analizy.chita@gmail.com?Subject=Запись%20на%20приём%20Гемотест%20на%20Шилова" target="_top" class="button fit">
                  ЗАПИСАТЬСЯ НА ПРИЕМ
        </a>
        <a>Для предварительной записи отправьте эл.письмо по адресу: <a href="mailto:analizy.chita@gmail.com?Subject=Запись%20на%20приём%20Гемотест%20на%20Шилова" target="_top">analizy.chita@gmail.com</a></a>
    </header>
    
)

export default Header
