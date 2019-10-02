import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import Header from '../components/HeaderGeneric'
import Nav from '../components/Nav'
import { Waypoint } from 'react-waypoint'
import pic04 from '../assets/images/pic04.jpg'

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
        <Helmet title="Ваш + Доктор | УЗИ В Чите" />
        <Header/>
        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        ></Waypoint>
        <Nav sticky={this.state.stickyNav}/>

        <div id="main">
          <section id="content" className="main">
            <h2>УЗИ</h2>
            <p>Ультразвуковое исследование является одним из наиболее популярных и эффективных методов современной диагностики. С помощью УЗИ можно определить болезни внутренних органов, наличие новообразований, воспалений и других нарушений на различных стадиях. Клиника состоит из профессиональных врачей, которые производят сверхточную и тщательную процедуру исследования. Каждый специалист клиники имеет соответствующую квалификацию, что гарантирует высокие результаты ультразвуковой диагностики. Также, наши доктора в ходе УЗИ применяют только передовое оборудование. Наши специалисты используют инновационный УЗИ-сканер экспертного класса Philips HD 11 XE. «RoyalPhilips», голландский производитель УЗИ-сканера, занимает лидирующую позицию в производстве медицинских приборов, способных улучшить качество жизни людей.</p>
            <p>Основными достоинствами сканера Philips HD 11 XE являются:</p>
            <ul>
              <li>Полностью цифровое формирование луча;</li>
              <li>ЖК-монитор высокого разрешения;</li>
              <li>Возможность 2D, 3D и 4D режимов сканирования;</li>
              <li>Современная технология FetalEchoSTIC для изучения сердца плода;</li>
              <li>Панорамное сканирование;</li>
              <li>Функция латерального усиления;</li>
            </ul>
            </section>
            <div className="table-wrapper">
							<table>
								<thead>
									<tr>
                    <th>Вид</th>
										<th>Услуга</th>
										<th>Цена</th>
									</tr>
								</thead>
								<tbody>
									<tr>
                    <td>При беременности</td>
										<td>Ранняя  диагностика беременности</td>
                    <td>830 ₽</td>
									</tr>
                  <tr>
                    <td></td>
										<td>Допплерометрия сосудов матки и плода (с 20 недели беременности)	</td>
                    <td>680 ₽</td>
									</tr>
                  <tr>
                    <td></td>
										<td>УЗИ молочных желез с регионарными лимфоузлами с цветовым допплеровским картированием</td>
                    <td>680 ₽</td>
									</tr>
                  <tr>
                    <td></td>
										<td>Ультразвуковое исследование в 1 триместре беременности (10-13 неделя беременности)</td>
                    <td>850 ₽</td>
									</tr>
                  <tr>
                    <td></td>
										<td>Ультразвуковое исследование во 2 триместре беременности  (14-27 неделя беременности)</td>
                    <td>1000 ₽</td>
									</tr>
                  <tr>
                    <td></td>
										<td>Ультразвуковое исследование в 3 триместре беременности</td>
                    <td>1200 ₽</td>
									</tr>
									
								</tbody>
								
							</table>
						</div>
            
        </div>
      </Layout>
    )
  }
}

export default Generic
