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
        <Helmet title="Анализы Чита. Где можно быстро сдать анализы в Чите? - Ваш Доктор, Гемотест Чита" />
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
                  Узнать более подробно на сайте лаборатории Гемотест
              </a>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Generic
