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
        <a href="http://n207269.yclients.com"  target="_blank" rel="noopener noreferrer" class="button fit">
                  ЗАПИСАТЬСЯ НА ПРИЕМ
        </a>
        <script
            dangerouslySetInnerHTML={{
            __html=`
                (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                    m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                    (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
     
                    ym(55870498, "init", {
                        clickmap:true,
                        trackLinks:true,
                        accurateTrackBounce:true,
                        webvisor:true
                });
   	        `
     }}
     />   
    <noscript><div><img src="https://mc.yandex.ru/watch/55870498" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
    </header>
    
)

export default Header
