import { Link } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'
import { Waypoint } from 'react-waypoint'

import Header from '../components/Header'
import Layout from '../components/layout'
import Nav from '../components/Nav'

import uzi_pic from '../assets/images/pic_1(1).jpg'
import gin_pic from '../assets/images/pic_2(1).jpg'
import end_pic from '../assets/images/pic_3(1).jpg'
import uro_pic from '../assets/images/pic_4(1).jpg'
import ana_pic from '../assets/images/pic_5(1).jpg'
import dnk_pic from '../assets/images/pic_6(1).jpg'
import abo_pic from '../assets/images/pic_7(1).jpg'
import che_pic from '../assets/images/pic_8(1).jpg'
import ber_pic from '../assets/images/pic_9(1).jpg'

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
              <a href="/uzi">  
                <img src={uzi_pic} alt="" />
              </a>
              </span>
              <Link to="/uzi">
                <h3>УЗИ</h3>
              </Link>  
              </li>
              <li>
              <span className="image">
                <a href="/ginekologia"> 
                <img src={gin_pic} alt="" />
                </a>
              </span>
                <Link to="/ginekologia">
                <h3>ГИНЕКОЛОГИЯ</h3>
                </Link>  
              </li>
              <li>
              <span className="image">
              <a href="/beremennost"> 
                <img src={ber_pic} alt="" />
              </a>   
              </span>
              <Link to="/beremennost">
                <h3>ПЛАНИРОВАНИЕ БЕРЕМЕННОСТИ</h3>
              </Link>
              </li>
              <li>
              <span className="image">
                <a href="/endokrinologia">
                <img src={end_pic} alt="" />
                </a>
              </span>
                <Link to="/endokrinologia">
                <h3>ЭНДОКРИНОЛОГИЯ В ГИНЕКОЛОГИИ</h3>
                </Link>
              </li>
              <li>
              <span className="image">
              <a href="/dnk">
                <img src={dnk_pic} alt="" />
              </a>
              </span>
                <Link to="/dnk">
                <h3>ДНК АНАЛИЗЫ НА УСТАНОВЛЕНИЕ ОТЦОВСТВА</h3>
                </Link>
              </li>
              <li>
              <span className="image">
              <a href="/preryvanie-beremennosti"> 
                <img src={abo_pic} alt="" />
              </a>   
              </span>
              <Link to="/preryvanie-beremennosti">
                <h3>МЕДИКАМЕНТОЗНОЕ ПРЕРЫВАНИЕ БЕРЕМЕННОСТИ</h3>
              </Link>
              </li>
              <li>
              <span className="image">
              <a href="/check-up">
                <img src={che_pic} alt="" />
              </a> 
              </span>
              <Link to="/check-up">
                <h3>КОМПЛЕКСНЫЕ ЧЕК-АП ОБСЛЕДОВАНИЯ</h3>
              </Link>
              </li>
              <li>
              <span className="image">
                <a href="/urologia">
                <img src={uro_pic} alt="" />
                </a>              
              </span>
                <Link to="/urologia">
                <h3>УРОЛОГИЯ</h3>
                </Link>
              </li>
              <li>
              <span className="image">
                <a href="/analisy">
                <img src={ana_pic} alt="" />
                </a>
              </span>
                <Link to="/analisy">
                <h3>МЕДИЦИНСКИЕ АНАЛИЗЫ</h3>
                </Link>
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
                <span className="icon fa-diamond"></span>
                <strong>УЗИ</strong> высокой точности
              </li>
              <li className="style2">
                <span className="icon fa-folder-open-o"></span>
                <strong>Врачи</strong> со стажем более 10 лет
              </li>
              <li className="style3">
                <span className="icon fa-signal"></span>
                <strong>Анализы</strong> все виды в короткие сроки
              </li>
              <li className="style4">
                <span className="icon fa-laptop"></span>
                <strong>Скидка</strong> 25% на ДНК анализ для утсановления отцовства
              </li>
              <li className="style5">
                <span className="icon fa-diamond"></span>
                <strong>ЭКО</strong> все виды анализов для подготовки
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
