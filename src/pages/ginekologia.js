import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import Header from '../components/Header'
import Nav from '../components/Nav'
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
        <Helmet title="Generic Page Title" />
        <Header/>
        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        ></Waypoint>
        <Nav sticky={this.state.stickyNav}/>

        <div id="main">
          <section id="content" className="main">
            <h2>Планирование ребёнка. Какие анализы нужно сдавать будущим родителям?</h2>
            <p>Планирование ребёнка — это процесс, требующий особого внимания со стороны будущих родителей. Забота о здоровье ещё не появившегося на свет младенца — залог счастливой семейной жизни. Хотите узнать всё о состоянии Вашего здоровья и своевременно вылечить имеющиеся заболевания? Пройдите наиболее полное предварительное обследование «будущие родители» в центре Ваш + Доктор Чита!</p>
            <p><strong>Во-первых</strong>, важным шагом станет проведение анализов на <strong>половые гормоны и гормоны щитовидной железы</strong>, ведь именно они отвечают за возможность зачатия.</p> 
            <p><strong>Следующим этапом</strong> становится сдача анализов на <strong>инфекции</strong>, которые способны не только вызвать ряд воспалительных процессов, но и поставить под угрозу жизнь будущего ребёнка.</p>
            <p><strong>Также</strong>следует учесть и анализы на <strong>TORCH-инфекции</strong>, которые приводят к ряду серьёзных заболеваний, вызывающих патологии у плода. В числе таких заболеваний - токсоплазмоз, краснуха, цитомегаловирусная инфекция, герпес. Данные инфекции относятся к внутриутробным и опасны именно для плода, хотя для мамы данные инфекции безвредны и никак клинически не проявляются.</p>
            <h3>КОМПЛЕКСНОЕ ОБСЛЕДОВАНИЕ ВКЛЮЧАЕТ В СЕБЯ:</h3>
            </section>
        </div>
      </Layout>
    )
  }
}

export default Generic
