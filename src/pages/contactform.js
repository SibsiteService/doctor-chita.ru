import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import HeaderContactform from '../components/HeaderContactform'
import Nav from '../components/NavGeneric'
import { Waypoint } from 'react-waypoint'


class Generic extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      stickyNav: false,
    }
  }

  _handleWaypointEnter = () => {
    this.setState(() => ({ stickyNav: false }))
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }))
  }

  render() {

    return (
      <Layout>
        <Helmet>
        <img src="https://www.facebook.com/tr?id=417673439442859&ev=PageView&noscript=1" height="1" width="1" style="display:none"/>
        <title>Записаться на приём - Ваш Доктор, Гемотест Чита</title>
        <script src="https://www.google.com/recaptcha/api.js" async defer></script>
        <meta name="yandex-verification" content="2c6b2cd549700b18" />
        <meta name="description" content="Записаться на приём. Консультация гинеколога. Ваш Доктор Чита."></meta>
        </Helmet>
        <HeaderContactform/>
        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        ></Waypoint>
        <Nav sticky={this.state.stickyNav}/>

        <div id="main">
        <br/>
        <br/>

        <h2>Для записи по телефону (УЗИ, Гинеколог, Планирование беременности): <a href="tel: +73022217815">217-815</a></h2>

        <form action="https://formcarry.com/s/7ADRfDkypAkA" method="post">
            
          <div className="fields">
            <div className="field">
              <label htmlFor="tel">Номер Телефона*</label>
              <input type="tel" name="Телефон" id="tel" required/>
            </div>
            <div className="field">
              <label htmlFor="name" required="">ФИО*</label>
              <input type="text" name="ФИО" id="name" required/>
            </div>
            <div className="field">
              <label htmlFor="email">Электронная почта</label>
              <input type="email" name="Электронная почта" id="email"/>
            </div>
            
            <br/>
            <div class="g-recaptcha" data-sitekey="6LeLAgEVAAAAAJWQQ0-B7ExjGPmkE9TXDBu0goUx"></div>
          </div>
          <br/>
          <ul className="actions">
            <li>
              <input type="submit" value="Отправить заявку" />
              <input type="hidden" name="_gotcha"></input>
            </li>
          </ul>
          <br/>
        </form>

        </div>
      </Layout>
    )
  }
}

export default Generic