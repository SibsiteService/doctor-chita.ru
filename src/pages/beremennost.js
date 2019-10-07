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
        <Helmet title="Ваш + Доктор | УЗИ В Чите" />
        <Header/>
        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        ></Waypoint>
        <Nav sticky={this.state.stickyNav}/>

        <div id="main">
          <section id="content" className="main">
            <h2><strong>УЗИ в Чите</strong></h2>
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
            <section id="Layout" className="main">
            <div className="table-wrapper">
							<table>
								<thead>
									<tr>
                    <th>Вид</th>
										<th>Цена</th>
                    <th>Название</th>
										
									</tr>
								</thead>
								<tbody>
									<tr>
                    <td>При беременности</td>
										<td>1500₽</td>
                    <td>УЗИ плода, без проведения скрининга. Оценить состояние плода</td>
                    
									</tr>
                  <tr>
                    <td></td>
										<td>2000₽</td>
                    <td>Допплерометрия сосудов матки и плода (с 20 недели беременности)	</td>
                    
									</tr>
                  <tr>
                    <td></td>
										<td>3000₽</td>
                    <td>Скрининг УЗИ первый триместр 11- 12 недель</td>
                    
									</tr>
                  <tr>
                    <td></td>
										<td>3000₽</td>
                    <td>Скрининг УЗИ второй  триместр 22-24 недель</td>
                    
									</tr>
                  <tr>
                    <td></td>
										<td>3000₽</td>
                    <td>Скрининг УЗИ третий триместр 32-36 недель</td>
                    
									</tr>
                  <tr>
                    <td></td>
										<td>2000₽</td>
                    <td>Проведение 3D/4D УЗИ</td>
                    
									</tr>
                  <tr>
                    <td></td>
										<td>1000₽</td>
                    <td>Фолликулометрия</td>
                    
									</tr>
                  <tr>
                    <td></td>
										<td>1000₽</td>
                    <td>Контроль эндометрия</td>
                    
									</tr>
                  <tr>
                    <td></td>
										<td>800₽</td>
                    <td>Цервикометрия</td>
                    
									</tr>									
								</tbody>
							</table>
              <table>
								<thead>
									<tr>
                    <th>Цена</th>
                    <th>Название комплекса</th>
										<th>Какие анализы включены</th>	
									</tr>
								</thead>
								<tbody>
                  <tr>
                    <td>1150₽</td>
                    <td>Планирование беременности - Цервикальный скрининг, ИППП (прегравидарная подготовка)</td>
										<td>
                    <li>Микоплазма гениталиум (мазок)</li>
                    <li>Нейсерия гонореи</li>
                    <li>Трихомонас вагиналис</li>
                    <li>Хламидия трахоматис</li>
                    <li>Гинекологический мазок на флору</li>
                    <li>ВПЧ Типы 16,18,31,33,35,39,45,51,52,56,58,59 (Метод Real- time)</li>
                    <li>Цитологическое исследование соскобов шейки матки и цервикального канала методом жидкостной цитологии</li>
                    </td>
									</tr>
                  <tr>
                    <td>9780₽</td>
                    <td>Буду мамой</td>
										<td> 
<li>Консультация и осмотр гинеколога</li>
<li>Мазок на флору</li>
<li>Биохимия крови: глюкоза, холестерин</li>
<li>Анализ крови на RW,ВИЧ,группу крови и резус фактор</li>
<li>ПЦР диагностика:</li>
<li>chlamydia trachomatis</li>
<li>mycoplasma genitalium</li>
<li>mycoplasma hominis</li>
<li>neisseria gonorrhoea</li>
<li>trichomonas vaginalis</li>
<li>ureaplasma species</li>    
<li>Мазок на онкоцитологию</li>
<li>УЗИ малого таза</li>
<li>УЗИ молочных желез</li>
<li>УЗИ почек</li>
<li>УЗИ щитовидной железы</li>
<li>IG к вирусу краснухи</li>
                    </td>
									</tr>
                  <tr>
                    <td>9780₽</td>
                    <td>Буду папой</td>
										<td> 
<li>Консультация и осмотр уролога</li>
<li>Мазок на флору</li>
<li>Биохимия крови: глюкоза, холестерин</li>
<li>Анализ крови на RW,ВИЧ,группу крови и резус фактор</li>
<li>ПЦР диагностика:</li>
<li>chlamydia trachomatis</li>
<li>mycoplasma genitalium</li>
<li>mycoplasma hominis</li>
<li>neisseria gonorrhoea</li>
<li>trichomonas vaginalis</li>
<li>ureaplasma species</li>    
<li>Мазок на онкоцитологию</li>
<li>УЗИ малого таза</li>
<li>УЗИ почек</li>
<li>УЗИ щитовидной железы</li>
                    </td>
									</tr>
                  <tr>
                    <td>17000₽</td>
                    <td>Будущие родители</td>
										<td> 
<li>Консультация и осмотр репродуктолога (для двоих)</li>
<li>Мазок на флору (для пары)</li>
<li>Биохимия крови: глюкоза, холестерин (для пары)</li>
<li>Анализ крови на RW,ВИЧ,группу крови и резус фактор (для пары)</li>
<li>ПЦР диагностика (для женщины):</li>
<li>chlamydia trachomatis</li>
<li>mycoplasma genitalium</li>
<li>mycoplasma hominis</li>
<li>neisseria gonorrhoea</li>
<li>trichomonas vaginalis</li>
<li>ureaplasma species</li>    
<li>Мазок на онкоцитологию</li>
<li>УЗИ малого таза (для женщины)</li>
<li>УЗИ почек (для пары)</li>
<li>УЗИ щитовидной железы (для пары)</li>
<li>УЗИ молочных желез (для женщины)</li>
<li>Прогестерон, ФСГ, ЛГ (для женщины)</li>
<li>Тестостерон (для мужчин)</li>
<li>IG к вирусу краснухи</li>
<li>Мазок на онкоцитологию</li>
                    </td>
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
