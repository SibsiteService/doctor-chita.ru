import React from 'react'
import { Link } from 'gatsby'
import logo from '../assets/images/logo-full.png';



const HeaderGeneric = (props) => (
    <header id="header" className="alt">
        <span className="logo"><Link to="/"><img src={logo} alt="Ваш + Доктор | Лого" width="70%"/></Link></span>
        
        <a href="mailto:analizy.chita@gmail.com?Subject=Запись%20на%20приём%20Гемотест%20на%20Шилова" target="_top" class="button fit">
                  ЗАПИСАТЬСЯ НА ПРИЕМ
        </a>
        <a>Для предварительной записи отправьте эл.письмо по адресу: <a href="mailto:analizy.chita@gmail.com?Subject=Запись%20на%20приём%20Гемотест%20на%20Шилова" target="_top">analizy.chita@gmail.com</a></a>
    </header>
    
)

export default HeaderGeneric
