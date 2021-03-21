import { Link } from 'gatsby'

import React from 'react'
import Helmet from 'react-helmet'
import { Waypoint } from 'react-waypoint'

import Header from '../components/Header'
import Layout from '../components/layout'
import Nav from '../components/Nav'

import uzi_pic from '../assets/images/pic_1(1).jpg'
import end_pic from '../assets/images/pic_3(1).jpg'
import rak_pic from '../assets/images/pic_4(1).jpg'
import ana_pic from '../assets/images/pic_5(1).jpg'
import dnk_pic from '../assets/images/pic_6(1).jpg'
import che_pic from '../assets/images/pic_8(1).jpg'
import ber_pic from '../assets/images/pic_9(1).jpg'
import gin_pic from '../assets/images/pic_2(1).jpg'
import onko_pic from '../assets/images/pic_10(1).jpg'
import exp_pic from '../assets/images/pic_7(1).jpg'
import administrator from '../assets/images/administrator.jpg';


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
        <Helmet>
        <title>Анализы и УЗИ в Чите. Гинеколог, комплексные обследования, эндокринолог. - Ваш Доктор. Официальный представитель лаборатории Гемотест в Чите</title>
        <meta name="yandex-verification" content="2c6b2cd549700b18" />
        <meta name="description" content="Мы предлагаем широкий спектр медицинских услуг: сдача всех типов анализов, прием гинеколога, УЗИ, комплексные обследование, 
        дополнительное мнение экспертов об онкологии, ДНК анализы. 
        Ваш Доктор - официальный партнер лаборатории Гемотест в Чите. 
        У нас Вы сможете пройти весь спектр диагностики здоровья и узнать о Ваших болезнях на ранних этапах."></meta>
        </Helmet>        
        <Header/>
        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        ></Waypoint>
        <Nav sticky={this.state.stickyNav} />

        <div id="main">
        <section id="first" className="main special">
            <header className="major">
              <h2>В Чите в честь открытия нового медицинского центра предлагаются подарки и скидки на обследования!</h2>
              
            </header>
            <ul className="statistics">
              <li className="style1">
              <Link to="/uzi">  
                <span className="icon fa-diamond"></span>
                <strong>УЗИ</strong> высокой точности
              </Link>
              </li>
              <li className="style2">
                <span className="icon fa-folder-open-o"></span>
                <strong>Врачи</strong> со стажем более 10 лет
              </li>
              <li className="style3">
                <a target="_blank" rel="noopener noreferrer" href="https://www.gemotest.ru/patients/actions/" className="icon fa-exclamation"></a>
               <a target="_blank" rel="noopener noreferrer" href="https://www.gemotest.ru/patients/actions/"> <strong>Акции и Предложения</strong> от нашего партнера лаборатории Гемотест</a>
              </li>
              <li className="style4">
                <span className="icon fa-percent"></span>
                <strong>Скидки</strong> до 25 % по бонусной программе
              </li>
              <li className="style5">
                <span className="icon fa-stethoscope"></span>
                <strong>ЭКО</strong> все виды анализов для подготовки
              </li>
            </ul>
            </section>
          <section id="second" className="main special">
            <ul className="features">
              <li>
              <span className="image">
              <Link to="/ginekologia">  
                <img src={gin_pic} alt="" />
                </Link> 
              </span>
              <Link to="/ginekologia">
                <h3>Гинекология</h3>
              </Link>  
              </li>
              <li>
              <span className="image">
              <Link to="/beremennost"> 
                <img src={ber_pic} alt="" />
                </Link>  
              </span>
              <Link to="/beremennost">
                <h3>Планирование беременности</h3>
              </Link>
              </li>
              <li>
              <span className="image">
              <Link to="/uzi">  
                <img src={uzi_pic} alt="" />
              </Link>
              </span>
              <Link to="/uzi">
                <h3>УЗИ</h3>
              </Link>  
              </li>
              <li>
              <span className="image">
              <Link to="/endokrinologia">
                <img src={end_pic} alt="" />
                </Link>
              </span>
                <Link to="/endokrinologia">
                <h3>Эндокринология в гинекологии</h3>
                </Link>
              </li>
              <li>
              <span className="image">
              <Link to="/onkologia">  
                <img src={onko_pic} alt="" />
                </Link> 
              </span>
              <Link to="/onkologia">
                <h3>Диагностика онкологии</h3>
              </Link>  
              </li>
              <li>
              <span className="image">
              <Link to="/dnk">
                <img src={dnk_pic} alt="" />
                </Link>
              </span>
                <Link to="/dnk">
                <h3>ДНК анализы на установление отцовства</h3>
                </Link>
              </li>
              <li>
              <span className="image">
              <Link to="/check-up">
                <img src={che_pic} alt="" />
                </Link> 
              </span>
              <Link to="/check-up">
                <h3>Комплексные чек-ап обследования</h3>
              </Link>
              </li>
              
              <li>
              <span className="image">
              <Link to="/raksheikimatki">
                <img src={rak_pic} alt="" />
                </Link>
              </span>
                <Link to="/raksheikimatki">
                <h3>Диагностика рака шейки матки</h3>
                </Link>
              </li>
              <li>
              <span className="image">
              <Link to="/experts">
                <img src={exp_pic} alt="" />
                </Link>
              </span>
                <Link to="/experts">
                <h3>Второе мнение в онкодиагностике</h3>
                </Link>
              </li>
              <li>
              <span className="image">
              <Link to="/analisy">
                <img src={ana_pic} alt="" />
                </Link>
              </span>
                <Link to="/analisy">
                <h3>Медицинские анализы</h3>
                </Link>
              </li>
            </ul>

            <Link to="/prices"  target="_blank" rel="noopener noreferrer" class="button fit">
                  ОЗНАКОМИТЬСЯ С ЦЕНАМИ
            </Link>
            
          </section>

          
            
        </div>
      </Layout>
    )
  }
}

export default Index
