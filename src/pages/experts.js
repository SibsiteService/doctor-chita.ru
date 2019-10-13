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
        <title>Второе мнение в онкодиагностике Чита, заключение экспертов - Ваш Доктор, Гемотест Чита</title>
        <meta name="yandex-verification" content="2c6b2cd549700b18" />
        <meta name="description" content="Как получить второе мнение при диагностированной онкологии. Мнение ведущих российских экспертов. Ваш Доктор - официальный партнер лаборатории Гемотест в Чите."></meta>
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
            <h2>Как получить заключение эксперта? Второе мнение в онкодиагностке</h2>
          </header>
            <ol>
              <li>Забрать биоматериал из мед. учреждения, где был установлен диагноз</li>
              <li>Передать все имеющиеся стекла, блоки и медицинские документы: выписки из истории болезни, предыдущие гистологические заключения, протоколы операций, данные УЗИ, МРТ, КТ в отделение Гемотест</li>
              <li>Получить заключение и свой биоматериал</li>
            </ol>
            <div id="Layout" className="main" className="table-wrapper">
            <table>
								<thead>
									<tr>
                    <th>Цена за случай</th>
                    <th>Вид экспертного заявления</th>										
									</tr>
								</thead>
								<tbody>
									<tr>
                    <td>5000₽</td>
                    <td>Пересмотр ГИСТОЛОГИЧЕСКИХ препаратов <strong>врачами Лаборатории Гемотест</strong> методом консилиума (кроме костной ткани, ЦНС, гематологии)</td>
									</tr>
                  <tr>
                    <td>7000₽</td>
                    <td>Пересмотр ГИСТОЛОГИЧЕСКИХ препаратов <strong>ведущими российскими экспертами</strong></td>
									</tr>
                  <tr>
                    <td>12000₽</td>
                    <td>Комплексное иммуногистохимическое исследование биоптатов предстательной железы с оценкой экспрессии AMACR (a-methylacyl-CoA racemase, P504S), цитокератинов высокого молекулярного веса (34bE12), белка p63 (одного блока/столбика)</td>
									</tr>     
                </tbody>
							</table>
              </div>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Generic
