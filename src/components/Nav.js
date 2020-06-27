import React from 'react'
import Scroll from './Scroll'
import { Link } from 'gatsby';



const Nav = (props) => (
    <nav id="nav" className={props.sticky ? 'alt' : ''}>
       <ul>
       <li>
          <Scroll type="id" element="second">
                    <a href="#">Услуги</a>
          </Scroll>
        </li>
        
        
        <li>
          <Link to="/prices">Цены</Link>
        </li>
        <li>
        <Scroll type="id" element="footer">
                    <a href="#">Контакты</a>
        </Scroll>
        </li>
        <li>
        <a href="tel:+78005501313">Запись на Анализы:  8 (800) 550-13-13</a>
        </li>
        <li>
        <a href="tel:+73022217815">Запись на приём (УЗИ, Гинеколог, Планирование Беременности): +7 (3022) 217-815</a>
        </li>
      </ul>
    </nav>
)

export default Nav
