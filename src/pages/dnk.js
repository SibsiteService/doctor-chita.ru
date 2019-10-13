import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import Header from '../components/HeaderGeneric'
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
        <title>Днк анализы на установление отцовства Чита - Ваш Доктор, Гемотест Чита</title>
        <meta name="yandex-verification" content="2c6b2cd549700b18" />
        <meta name="description" content="Забор биологического материала для установления отцовства Чита. Ваш Доктор - официальный партнер лаборатории Гемотест в Чите."></meta>
        </Helmet>
        <Header/>
        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        ></Waypoint>
        <Nav sticky={this.state.stickyNav}/>

        <div id="main">
          <section id="content" className="main">
          <header class="major">
            <h2>ДНК анализы на установление отцовства</h2>
          </header>
            <p>ООО «Ваш Доктор» является официальным представителем лаборатории «Гемотест» в городе Чите. Данная лаборатория сотрудничает с ведущими медицинскими научными центрами России и международными аккредитованными лабораториями США.Вы всегда сможете провести ДНК-экспертизу удалённо в нашем филиале по адресу <strong>ул. Шилова, д. 19</strong> лаборатории.
            <br></br>Забор биологического материала для установления отцовства без определения суда производится как в клинике, так и в домашних условиях: каждый клиент получает набор и подробную инструкцию.
            <br></br>Забор производится 8 стерильными ватными палочками. Клиент лёгким нажимом протирает щёку с внутренней стороны минимум 15 раз, слегка поворачивая ватную палочку при протирании.
            <br></br>Результаты экспертизы высылаются клиенту по электронной почте, а также дублируются в бумажном варианте по обычной почте.</p>
            <p><strong>Для забора биологического материала на установления отцовства по определению суда требуется представить следующие документы:</strong></p>
            <ul>
              <li>Определение суда;</li>
              <li>Паспорт и ксерокопия паспорта отца и матери;</li>
              <li>Свидетельство о рождении ребёнка и ксерокопия;</li>
              <li>Фото всех участников.</li>
            </ul>
            <p>Запись на экспертизу производится заранее.
      <br></br>Непосредственно перед экспертизой участникам необходимо воздержаться от приёма кофе, чая, пищи и курения в течение 2 часов перед забором материала. Младенцы должны воздержаться от приёма пищи не менее чем за 30 минут до анализа.
              <br /><br />
              <a href="https://www.gemotest.ru/catalog/po-laboratornym-napravleniyam/geneticheskie-issledovaniya/opredelenie-biologicheskogo-rodstva-ottsovstva-i-materinstva-testy-dnk"  target="_blank" rel="noopener noreferrer" class="button fit">
                  Узнать более подробно о тесте ДНК
              </a>
            </p>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Generic
