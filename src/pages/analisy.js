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
        <title>Анализы Чита. Где можно быстро сдать анализы в Чите? - Ваш Доктор, Гемотест Чита</title>
        <meta name="yandex-verification" content="2c6b2cd549700b18" />
        <meta name="description" content="В медицинском центре Ваш Доктор Чита Вы можете сдать все виды анализов. Результаты некоторых обследований доступны уже на следующий день. Ваш Доктор - официальный партнер лаборатории Гемотест в Чите."></meta>
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
            <h2>Медицинские анализы в партнерстве с лабораторией ГЕМОТЕСТ</h2>
            </header>
            <a href="https://www.gemotest.ru/"  target="_blank" rel="noopener noreferrer" class="button fit">
                  Узнать более подробно
              </a>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Generic
