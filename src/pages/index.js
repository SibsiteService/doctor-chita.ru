import { Link } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'
import { Waypoint } from 'react-waypoint'

import Header from '../components/Header'
import Layout from '../components/layout'
import Nav from '../components/Nav'

import uzi_pic from '../assets/images/pic_1.jpg'
import gin_pic from '../assets/images/pic_2.jpg'
import end_pic from '../assets/images/pic_3.jpg'
import uro_pic from '../assets/images/pic_4.jpg'
import ana_pic from '../assets/images/pic_5.jpg'
import dnk_pic from '../assets/images/pic_6.jpg'
import abo_pic from '../assets/images/pic_7.jpg'
import che_pic from '../assets/images/pic_8.jpg'
import ber_pic from '../assets/images/pic_9.jpg'

class Index extends React.Component {
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
        <Helmet title="Ваш + Доктор | Анализы и УЗИ в Чите. Гинеколог, комплексные обследования, ДНК." />

        <Header />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        ></Waypoint>
        <Nav sticky={this.state.stickyNav} />

        <div id="main">
          <section id="first" className="main special">
            <ul className="features">
              <li>
              <span className="image">
                <img src={uzi_pic} alt="" />
              </span>
                <h3>УЗИ</h3>
              </li>
              <li>
              <span className="image">
                <img src={gin_pic} alt="" />
              </span>
                <h3>ГИНЕКОЛОГИЯ</h3>
              </li>
              <li>
              <span className="image">
              <a href="/generic"> 
                <img src={ber_pic} alt="" />
              </a>   
              </span>
              <Link to="/generic">
                <h3>ПЛАНИРОВАНИЕ БЕРЕМЕННОСТИ</h3>
              </Link>
              </li>
              <li>
              <span className="image">
                <img src={end_pic} alt="" />
              </span>
                <h3>ЭНДОКРИНОЛОГИЯ В ГИНЕКОЛОГИИ</h3>
              </li>
              <li>
              <span className="image">
                <img src={dnk_pic} alt="" />
              </span>
                <h3>ДНК АНАЛИЗЫ НА УСТАНОВЛЕНИЕ ОТЦОВСТВА</h3>
              </li>
              <li>
              <span className="image">
              <a href="/generic"> 
                <img src={abo_pic} alt="" />
              </a>   
              </span>
              <Link to="/generic">
                <h3>МЕДИКАМЕНТОЗНОЕ ПРЕРЫВАНИЕ БЕРЕМЕННОСТИ</h3>
              </Link>
              </li>
              <li>
              <span className="image">
              <a href="/generic">
                <img src={che_pic} alt="" />
              </a> 
              </span>
              <Link to="/generic">
                <h3>КОМПЛЕКСНЫЕ ЧЕК-АП ОБСЛЕДОВАНИЯ</h3>
              </Link>
              </li>
              <li>
              <span className="image">
                <img src={uro_pic} alt="" />
              </span>
                <h3>УРОЛОГИЯ</h3>
              </li>
              <li>
              <span className="image">
                <img src={ana_pic} alt="" />
              </span>
                <h3>МЕДИЦИНСКИЕ АНАЛИЗЫ</h3>
              </li>
            </ul>
            
          </section>

          <section id="second" className="main special">
            <header className="major">
              <h2>Ipsum consequat</h2>
              <p>
                Donec imperdiet consequat consequat. Suspendisse feugiat congue
                <br />
                posuere. Nulla massa urna, fermentum eget quam aliquet.
              </p>
            </header>
            <ul className="statistics">
              <li className="style1">
                <span className="icon fa-code-fork"></span>
                <strong>5,120</strong> Etiam
              </li>
              <li className="style2">
                <span className="icon fa-folder-open-o"></span>
                <strong>8,192</strong> Magna
              </li>
              <li className="style3">
                <span className="icon fa-signal"></span>
                <strong>2,048</strong> Tempus
              </li>
              <li className="style4">
                <span className="icon fa-laptop"></span>
                <strong>4,096</strong> Aliquam
              </li>
              <li className="style5">
                <span className="icon fa-diamond"></span>
                <strong>1,024</strong> Nullam
              </li>
            </ul>
            <p className="content">
              Nam elementum nisl et mi a commodo porttitor. Morbi sit amet nisl
              eu arcu faucibus hendrerit vel a risus. Nam a orci mi, elementum
              ac arcu sit amet, fermentum pellentesque et purus. Integer maximus
              varius lorem, sed convallis diam accumsan sed. Etiam porttitor
              placerat sapien, sed eleifend a enim pulvinar faucibus semper quis
              ut arcu. Ut non nisl a mollis est efficitur vestibulum. Integer
              eget purus nec nulla mattis et accumsan ut magna libero. Morbi
              auctor iaculis porttitor. Sed ut magna ac risus et hendrerit
              scelerisque. Praesent eleifend lacus in lectus aliquam porta. Cras
              eu ornare dui curabitur lacinia.
            </p>
            <footer className="major">
              <ul className="actions">
                <li>
                  <Link to="/generic" className="button">
                    Learn More
                  </Link>
                </li>
              </ul>
            </footer>
          </section>

          <section id="cta" className="main special">
            <header className="major">
              <h2>Congue imperdiet</h2>
              <p>
                Donec imperdiet consequat consequat. Suspendisse feugiat congue
                <br />
                posuere. Nulla massa urna, fermentum eget quam aliquet.
              </p>
            </header>
            <footer className="major">
              <ul className="actions">
                <li>
                  <Link to="/generic" className="button special">
                    Get Started
                  </Link>
                </li>
                <li>
                  <Link to="/generic" className="button">
                    Learn More
                  </Link>
                </li>
              </ul>
            </footer>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Index
