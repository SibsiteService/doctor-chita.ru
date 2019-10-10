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
        <Helmet title="Ваш Доктор | Планирование ребенка Чита. Какие анализы нужно сдавать будущим родителям?" />
        <Header/>
        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        ></Waypoint>
        <Nav sticky={this.state.stickyNav}/>

        <div id="main">
        <section id="content" className="main">
            <h2>Планирование ребёнка <br></br> Какие анализы нужно сдавать будущим родителям?</h2>
            <p>Планирование ребёнка — это процесс, требующий особого внимания со стороны будущих родителей. Забота о здоровье ещё не появившегося на свет младенца — залог счастливой семейной жизни. Хотите узнать всё о состоянии Вашего здоровья и своевременно вылечить имеющиеся заболевания? Пройдите наиболее полное предварительное обследование «будущие родители» в центре Ваш + Доктор Чита!</p>
            <br></br><strong>Во-первых</strong>, важным шагом станет проведение анализов на <strong>половые гормоны и гормоны щитовидной железы</strong>, ведь именно они отвечают за возможность зачатия.
            <br></br><strong>Следующим этапом</strong> становится сдача анализов на <strong>инфекции</strong>, которые способны не только вызвать ряд воспалительных процессов, но и поставить под угрозу жизнь будущего ребёнка.
            <br></br><strong>Также</strong> следует учесть и анализы на <strong>TORCH-инфекции</strong>, которые приводят к ряду серьёзных заболеваний, вызывающих патологии у плода. В числе таких заболеваний - токсоплазмоз, краснуха, цитомегаловирусная инфекция, герпес. Данные инфекции относятся к внутриутробным и опасны именно для плода, хотя для мамы данные инфекции безвредны и никак клинически не проявляются. 
            <br></br>
            <br></br>
            <h3>ОБСЛЕДОВАНИЕ ВКЛЮЧАЕТ В СЕБЯ КОМПЛЕКС:</h3>
            
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
