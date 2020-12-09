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
        <title>Комплексные обследования здоровья Чита - Ваш Доктор, Гемотест Чита</title>
        <meta name="yandex-verification" content="2c6b2cd549700b18" />
        <meta name="description" content="Все виды комплексных обследований в Чите. Ваш Доктор - официальный партнер лаборатории Гемотест в Чите."></meta>
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
            <h2>Комплексные чек-ап обследования</h2>
          </header>
            <p>Комплексные чек-ап обследования помогают исключить или своевременно обнаружить незаметно протекающие опасные заболевания. Данный вид диагностики включает в себя приём врачей, множество лабораторных тестов, анализ сердечной деятельности, ультразвуковую и рентгенологическую диагностику внутренних органов. Комплексные Чек-ап обследования идеальны для тех, кто:</p>
            <ul>
              <li>Сомневается в удовлетворительном состоянии своего здоровья;</li>
              <li>Желает удостовериться, что со здоровьем всё в порядке;</li>
              <li>Хочет снизить риск возникновения опасных заболеваний в будущем.</li>
            </ul>
            <br></br>
            <p>В клинике «Ваш доктор» Вы сможете пройти комплексное Чек-ап обследование, состоящее из следующих процедур:</p>
            <ul>
              <li>Полная лабораторная и инструментальная диагностика;</li>
              <li>Функциональная диагностика;</li>
              <li>Приём врача-терапевта;</li>
              <li>Приём врачей узкого профиля.</li>
            </ul>
            <br></br>
            <p>Результатом Чек-ап обследования становится экспертное заключение с последующими рекомендациями лечения. Благодаря современному оборудованию врачи клиники «Ваш Доктор» гарантируют сверхточные и быстрые результаты обследования!</p>
            
            <div id="Layout" className="main" className="table-wrapper">
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
                    <td>750₽</td>
                    <td><strong><i>Скрининг сердечно-сосудистой системы. Кардиопрогноз.</i></strong></td>
										<td> 
                        <li>Холестерол общий</li>
                        <li>ЛПВП (липопротеины высокой плотности)</li>
                        <li>ЛПНП (липопротеины низкой плотности)</li>
                        <li>Индекс атерогенности (ХС общий, ЛПВП)</li>
                        <li>Холестерин ЛПОНП ( втом числе триглицеринды)</li>
                    </td>
									</tr>
                  <tr>
                    <td>1460₽</td>
                    <td><strong><i>Скрининг функции щитовидной железы</i></strong></td>
										<td>
                    <li>АТ-ТТГ</li>
                    <li>АТ-ТПО</li>
                    <li>Т3 свободный</li>
                    <li>Т4 свободный</li>
                    <li>ТТГ</li>
                    </td>
									</tr><tr>
                    <td>570₽</td>
                    <td><strong><i>Скрининг функции почек</i></strong></td>
										<td>
                    <li>Общий анализ мочи</li>
                    <li>Уровень мочевины в крови</li>
                    <li>Уровень креатинина в крови</li>
                    <li>Скорость клубочковой фильтрации (СКФ)</li>
                    </td>
									</tr><tr>
                    <td>790₽</td>
                    <td><strong><i>Скрининг функции печени и поджелудочной железы</i></strong></td>
										<td>
                    <li>АЛТ</li>
                    <li>Гамма-ГТ</li>
                    <li>Уровень общего билирубина</li>
                    <li>Липаза</li>
                    <li>Амилаза общая</li>
                    </td>
									</tr><tr>
                    <td>1390₽</td>
                    <td><strong><i>Профилактическое обследование онкологии для женщин</i></strong></td>
										<td>
                    <li>Анализ крови на РЭА (раковый эмбриональный антиген)</li>
                    <li>СА 125 (женский онкомаркер на малый таз)</li>
                    <li>СА 15-3 (онкомаркер молочных желез,женский)</li>
                    </td>
									</tr><tr>
                    <td>810₽</td>
                    <td><strong><i>Профилактическое обследование онкологии для мужчин</i></strong></td>
										<td>
                    <li>ПСА свободный / ПСА общий (Диф. диагностика аденомы и карциномы предстательной железы)</li>
                    </td>
									</tr>
                  <tr>
                    <td>4910₽</td>
                    <td><strong><i>Планирование беременности <br /> <strong>TORCH – инфекции</strong> - это группа внутриутробных инфекций, которыми плод может заразится во время беременности или при прохождении родовых путей</i></strong></td>
										<td>
                    <li>Токсоплазменная инфекция (Toxoplasma)</li>
                    <li>Краснуха (Rubella)</li>
                    <li>Цитогмегаловирус (Cytomegalovirus)</li>
                    <li>Вирус простого герпеса 1,2 типов (Herpes)</li>
                    </td>
									</tr>                          
                  <tr>
                    <td>3550₽</td>
                    <td><strong><i>Планирование беременности <br /> Цервикальный скрининг, ИППП (прегравидарная подготовка)</i></strong></td>
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
                    <td>1670₽</td>
                    <td><strong><i>Исследование микрофлоры урогенитального тракта у женщин 16 показателей</i></strong></td>
										<td>
                    <li>Оценка качества взятия биоматериала</li>
                    <li>Общая бактериальная масса</li>
                    <li>Лактобактерии количественно</li>
                    <li>Суммарные энтеробактерии</li>
                    <li>Стрептококки</li>
                    <li>Стафилококки</li>
                    <li>Гарднерелла вагиналис + Превотелла бивиа</li>
                    <li>Порфиромонас</li>
                    <li>Эубактерии</li>
                    <li>Снеатия + Лептотрихия + Фузобактерии</li>
                    <li>Мегасфера + Вейлонелла + Диалистер</li>
                    <li>Лакнобактерии + Клостридии</li>
                    <li>Мобилункус + Коринебактерии</li>
                    <li>Пептострептококки</li>
                    <li>Атопобиум вагиналис</li>
                    <li>Микоплазма хоминис + Микоплазма гениталиум</li>
                    <li>Уреаплазма уреалитикум + Уреаплазма парвум</li>
                    <li>Кандида</li>
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
