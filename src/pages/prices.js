import React from 'react'
import Helmet from 'react-helmet'


import Layout from '../components/layout'

import Header from '../components/Header'
import Nav from '../components/Nav'
import { Waypoint } from 'react-waypoint'
import pic04 from '../assets/images/pic04.jpg'

class prices extends React.Component {
  
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
        <Helmet title="Ваш + Доктор | Гемотест Цены" />
        <Header/>
        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        ></Waypoint>
        <Nav sticky={this.state.stickyNav}/>

    
      


        <div id="main">
          <section id="content" className="main">
            
            <h2>Цены</h2>
           
            </section>
        </div>
        
      </Layout>

    )
  }
  
}

export default prices
