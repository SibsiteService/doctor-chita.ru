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
        <Helmet title="Комплексные обследования здоровья Чита - Ваш Доктор, Гемотест Чита" />
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
            <p>Комплексные Чек-ап обследования помогают исключить или своевременно обнаружить незаметно протекающие опасные заболевания. Данный вид диагностики включает в себя приём врачей, множество лабораторных тестов, анализ сердечной деятельности, ультразвуковую и рентгенологическую диагностику внутренних органов. Комплексные Чек-ап обследования идеальны для тех, кто:</p>
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
                    <td>2000₽</td>
                    <td>Скрининг сердечно-сосудистой системы. Кардиопрогноз.</td>
										<td> 
<li>Холестерол общий</li>
<li>ЛПВП (липопротеины высокой плотности)</li>
<li>ЛПНП (липопротеины низкой плотности)</li>
<li>С-реактивный белок</li>
<li>УЗИ сердца</li>
                     
                    </td>
									</tr>
                  <tr>
                    <td>1800₽</td>
                    <td>Скрининг функции щитовидной железы</td>
										<td>
                    <li>Тиреотропный гормон (ТТГ)</li>
                    <li>Свободный тироксин (Т4 свободный)</li>
                    <li>УЗИ щитовидной железы</li>
                    </td>
									</tr><tr>
                    <td>1500₽</td>
                    <td>Скрининг функции почек</td>
										<td>
                    <li>Общий анализ мочи</li>
                    <li>Уровень мочевины в крови</li>
                    <li>Уровень креатинина в крови</li>
                    <li>Скорость клубочковой фильтрации (СКФ)</li>
                    <li>УЗИ почек</li>
                    </td>
									</tr><tr>
                    <td>2200₽</td>
                    <td>Скрининг функции печени и поджелудочной железы</td>
										<td>
                    <li>АЛТ</li>
                    <li>Гамма-ГТ</li>
                    <li>Уровень общего билирубина</li>
                    <li>Липаза</li>
                    <li>Амилаза общая</li>
                    <li>УЗИ печени</li>
                    <li>УЗИ поджелудочной железы</li>
                    </td>
									</tr><tr>
                    <td>2900₽</td>
                    <td>Профилактическое обследование онкологии для женщин</td>
										<td>
                    <li>Анализ крови на РЭА(раковый эмбриональный антиген)</li>
                    <li>СА 125 (женский онкомаркер на малый таз)</li>
                    <li>СА 15-3 (онкомаркер молочных желез,женский)</li>
                    <li>УЗИ малого таза</li>
                    </td>
									</tr><tr>
                    <td>5500₽</td>
                    <td>Профилактическое обследование онкологии для мужчин</td>
										<td>
                    <li>ПСА общий (Показывает наличие или отсутствие клеток, подозрительных на злокачественные в малом тазу)</li>
                    <li>Анализ крови на РЭА (раковый эмбриональный антиген)</li>
                    <li>УЗИ малого таза</li>
                    </td>
									</tr>
                  <tr>
                    <td>2950₽</td>
                    <td>Гормональное обследование</td>
										<td>
                    <li>ЛГ (лютеинизирующий гормон)</li>
                    <li>ФСГ (фолликулостимулирующий)</li>
                    <li>Тестостерон</li>
                    <li>УЗИ малого таза</li>
                    </td>
									</tr>
                  <tr>
                    <td>1150₽</td>
                    <td>Урологическое здоровье мужчины</td>
										<td>
                    <li>Мазок на микрофлору</li>
                    <li>УЗИ простаты (абдоминально)</li>
                    <li>УЗИ мочевого пузыря</li>
                    <li>Консультация уролога</li>
                    </td>
									</tr>
                  <tr>
                    <td>2200₽</td>
                    <td>Профилактика инфекций передаваемых половым путем (для мужчин)</td>
										<td>
                    <li>Консультация уролога</li>
                    <li>Мазок на микрофлору</li>
                    <li>ПЦР диагностика:</li>
                    <li>chlamydia trachomatis</li>
                    <li>mycoplasma genitalium</li>
                    <li>mycoplasma hominis</li>
                    <li>neisseria gonorrhoea</li>
                    <li>trichomonas vaginalis</li>
                    <li>ureaplasma species</li>                   
                    </td>
									</tr>
                  <tr>
                    <td>1150₽</td>
                    <td>Урологическое здоровье женщины</td>
										<td>
                    <li>Мазок на микрофлору</li>
                    <li>УЗИ гинекологическое</li>
                    <li>УЗИ мочевого пузыря</li>
                    <li>Консультация гинеколога</li>
                    </td>
									</tr>
                  <tr>
                    <td>2200₽</td>
                    <td>Профилактика инфекций передаваемых половым путем (для женщин)</td>
										<td>
                    <li>Консультация гинеколога</li>
                    <li>Мазок на микрофлору</li>
                    <li>ПЦР диагностика:</li>
                    <li>chlamydia trachomatis</li>
                    <li>mycoplasma genitalium</li>
                    <li>mycoplasma hominis</li>
                    <li>neisseria gonorrhoea</li>
                    <li>trichomonas vaginalis</li>
                    <li>ureaplasma species</li>                   
                    </td>
									</tr>
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
