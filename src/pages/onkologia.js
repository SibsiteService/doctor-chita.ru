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
        <Helmet title="Обследование на онкологию в Чите? Диагностика раковых заболеваний Чита - Ваш Доктор, Гемотест Чита"/>
        <Header/>
        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        ></Waypoint>
        <Nav sticky={this.state.stickyNav}/>

        <div id="main">
          <section id="content" className="main">
            <header class="major">
            <h2>Гормональное и профилактическое обследование на онкологию</h2>
            </header>
            <p>Анализы на гормоны — точный и эффективный способ диагностировать причину проблем, связанных с нарушением менструального цикла, трудностями зачатия и с массой других заболеваний женского здоровья. Клиника «Ваш Доктор» проводит несколько видов обследований, которые помогут обнаружить проблемы и дисфункции как женского, так и мужского организма.</p>
            <h2><strong>Полное комплексное гормональное обследование женщин</strong></h2>
            Полное Комплексное гормональное обследование женщин в нашей клинике включает в себя анализы на ТТГ, Т3-Т4 свободный, тироксин, ФСГ/ЛГ, эстрадиол, пролактин, ДЭАС, 17-оксипрогестерон и кортизол.
            Также, в обследование включены и такие исследования как:
            <ul>
              <li>УЗИ щитовидной железы;</li>
              <li>УЗИ коры надпочечников;</li>
              <li>УЗИ органов малого таза.</li>
            </ul>
            По результатам обследования Вы получаете возможность профессиональной консультации и осмотра врача гинеколога-эндокринолога с дальнейшими рекомендациями по лечению в письменном виде.
            <br /><br />
            Стоит помнить, что анализы на гормоны следует сдавать натощак и в определённые дни менструального цикла для получения объективной информации о Вашем здоровье. Так, например, на 5-7 день цикла производятся анализы на следующие гормоны:
            <ul>
              <li>ЛГ (лютеинизирующий гормон);</li>
              <li>ФСГ (фолликулостимулирующий гормон);</li>
              <li>Эстрадиол;</li>
              <li>Пролактин;</li>
              <li>Тестостерон;</li>
              <li>Дегидроэпиандростерон сульфат (ДЭАС);</li>
              <li>ТТГ;</li>
              <li>Т3;</li>
              <li>Т4;</li>
              <li>17-оксипрогестерон;</li>
              <li>Кортизол (гормоны коры надпочечников);</li>
            </ul>
            На 20-23 день цикла при регулярной менструации проводятся анализы гормона прогестерона.
          <br /><br />
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
