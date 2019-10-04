import React from 'react'
import Helmet from 'react-helmet'
import Accordion from '../components/Accordion'
import Layout from '../components/layout'
import Header from '../components/Header'
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
        <Helmet title="Ваш + Доктор | Цены" />
        <Header/>
        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        ></Waypoint>
        <Nav sticky={this.state.stickyNav}/>

        <div id="main">
          <section id="content" className="main">
          <h1>Ваш + Доктор ЦЕНЫ</h1>
      <Accordion allowMultipleOpen>
        <div label='УЗИ' isOpen>
          <p><strong>Common Name:</strong> American Alligator</p>
          <p><strong>Distribution:</strong> Texas to North Carolina, US</p>
          <p><strong>Endangered Status:</strong> Currently Not Endangered</p>
        </div>
        <div label='Анализы'>
          <p><strong>Common Name:</strong> Chinese Alligator</p>
          <p><strong>Distribution:</strong> Eastern China</p>
          <p><strong>Endangered Status:</strong> Critically Endangered</p>
        </div>
      </Accordion>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Generic
