import React from 'react'
import Scroll from './Scroll'
import { Link } from 'gatsby';



const Nav = (props) => (
    <nav id="nav" className={props.sticky ? 'alt' : ''}>
       <ul>
       <li>
          <Scroll type="id" element="second">
                    <a href="#">О ЦЕНТРЕ</a>
          </Scroll>
        </li>
        
        <li>
          <Link to="/uslugi">НАШИ УСЛУГИ</Link>
        </li>
        <li>
          <Link to="/prices">ЦЕНЫ</Link>
        </li>
        <li>
          <Link to="/generic">КОНТАКТЫ</Link>
        </li>
        
      </ul>
    </nav>
)

export default Nav
