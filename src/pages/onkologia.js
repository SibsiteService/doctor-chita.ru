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
        <title>Обследование на онкологию в Чите? Диагностика раковых заболеваний Чита - Ваш Доктор, Гемотест Чита</title>
        <meta name="yandex-verification" content="2c6b2cd549700b18" />
        <meta name="description" content="Регулярные обследования на онкологию помогут диагностировать возможные проблемы на ранних этапах. Ваш Доктор - официальный партнер лаборатории Гемотест в Чите."></meta>
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
            <h2>Профилактическое обследование на онкологию</h2>
            </header>
            <h2><strong>Полное профилактическое обследование на онкологию у женщин</strong></h2>
            Полное Профилактическое обследование на онкологию у женщин в нашей клинике включает в себя:
            <ul>
              <li>Мазок на флору и степень чистоты;</li>
              <li>Анализ мазка на ПЦР на онкогенные вирусы папилломы человека высокого канцерогенного риска (16, 18, 31, 33, 35, 39, 45, 51, 52, 56, 58, 59 типы);</li>
              <li>Анализ крови на раковый эмбриональный антиген РЭА;</li>
              <li>Анализ на СА-125 (онкомаркер малого таза, особенно необходим длядиагностики женщин с миомами, эндометриозом, кистами и кистомами);</li>
              <li>Анализ крови на СА- 15-3 (онкомаркер молочных желёз);</li>
              <li>УЗИ малого таза;</li>
              <li>УЗИ молочных желёз.</li>
            </ul>
            По результатам анализов проводится профессиональное заключение гинеколога-онколога.
            <br /><br />
            <h2><strong>Полное профилактическое обследование онкологии для мужчин</strong></h2>
            Полное Профилактическое обследование онкологии для мужчин в нашей клинике включает в себя:
            <ul>
              <li>Мазок на флору и степень чистоты;</li>
              <li>Анализ крови на раковый эмбриональный антиген РЭА;</li>
              <li>ПСА общий (для диагностики злокачественных заболеваний малого таза)</li>
              <li>УЗИ малого таза;</li>
            </ul>            
            По результатам анализов проводится профессиональное заключение врача.
          </section>
        </div>
      </Layout>
    )
  }
}

export default Generic
