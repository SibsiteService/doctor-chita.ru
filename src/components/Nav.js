import React from 'react'
import { Link } from 'gatsby';


const Nav = (props) => (
    <nav id="nav" className={props.sticky ? 'alt' : ''}>
       <ul>
       <li>
          <Link to="/">О ЦЕНТРЕ</Link>
        </li>
        <li>
          <Link to="/uslugi">НАШИ УСЛУГИ</Link>
        </li>
        <li>
          <Link to="/generic">ЦЕНЫ</Link>
        </li>
        <li>
          <Link to="/generic">КОНТАКТЫ</Link>
        </li>
        
      </ul>
    </nav>
)

export default Nav
