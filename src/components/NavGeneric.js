import React from 'react'
import Scroll from './Scroll'
import { Link } from 'gatsby';



const Nav = (props) => (
    <nav id="nav" className={props.sticky ? 'alt' : ''}>
       <ul>
       <li>
       <Link to="/">О ЦЕНТРЕ</Link>
        </li>
        
        
        <li>
          <Link to="/prices">ЦЕНЫ</Link>
        </li>
        <li>
        <Scroll type="id" element="footer">
                    <a href="#">КОНТАКТЫ</a>
        </Scroll>
        </li>
        <li>
        <a href="tel:+78005501313">Телефон для записи (Гемотест):  8 (800) 550-13-13</a>
        </li>
        
      </ul>
    </nav>
)

export default Nav
