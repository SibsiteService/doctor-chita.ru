import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import Nav from '../components/NavGeneric'
import { Waypoint } from 'react-waypoint'
import Header from '../components/HeaderGeneric'


import offer01 from '../assets/images/1.png';
import offer02 from '../assets/images/2.png';
import offer03 from '../assets/images/3.png';
import offer04 from '../assets/images/4.png';
import offer05 from '../assets/images/5.png';


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
        <title>УЗИ В Чите - Ваш Доктор, Гемотест Чита</title>
        <meta name="yandex-verification" content="2c6b2cd549700b18" />
        <meta name="description" content="Где сделать УЗИ Чита? Ваш Доктор - официальный партнер лаборатории Гемотест в Чите."></meta>
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
            <h2>УЗИ в Чите</h2>
            </header>
            <h2>Все виды ультразвуковой диагностики</h2>
            <p>Выявить причину и назначить лечение поможет оборудование экспертного класса и расшифровка от опытных специалистов!</p>
            <br/>
            
            
            <header class="major">
            <h2>АКЦИЯ!</h2>
            <h3>УЗИ молочных желез с цветным доплеровским картированием + УЗИ щитовидной железы 990 рублей (вместо 1510 рублей)</h3>
            </header>
            <a href="https://www.doctor-chita.ru/contactform/" target="_blank">
            <img src={offer02} alt="Ваш + Доктор | Гинеколог" width="100%"/>
            </a>
            
            
            
            
            <header class="major">
            <h2>АКЦИЯ!</h2>
            <h3>Прием (осмотр и консультация) врача акушера-гинеколога первичный + проведение УЗИ определения беременности 1900 рублей (вместо 2330 рублей)</h3>
            </header>
            <a href="https://www.doctor-chita.ru/contactform/" target="_blank">
            <img src={offer01} alt="Ваш + Доктор | Гинеколог" width="100%"/>
            </a>
            


            <header class="major">
            <h2>АКЦИЯ!</h2>
            <h3>Прием (осмотр и консультация) врача акушера-гинеколога первичный + проведение УЗИ матки и придатков трансвагинального за 1175 рублей (вместо 1500 рублей)</h3>
            </header>
            <a href="https://www.doctor-chita.ru/contactform/" target="_blank">
            <img src={offer05} alt="Ваш + Доктор | Гинеколог" width="100%"/>
            </a>
            


            <header class="major">
            <h2>АКЦИЯ!</h2>
            <h3>Прием (осмотр и консультация) врача акушера-гинеколога при планировании беременности + УЗИ за 1900 рублей (вместо 2330 рублей)</h3>
            </header>
            <a href="https://www.doctor-chita.ru/contactform/" target="_blank">
            <img src={offer04} alt="Ваш + Доктор | Гинеколог" width="100%"/>
            </a>
            
            
      
            <p>Ультразвуковое исследование является одним из наиболее популярных и эффективных методов современной диагностики. С помощью УЗИ можно определить болезни внутренних органов, наличие новообразований, воспалений и других нарушений на различных стадиях. Клиника состоит из профессиональных врачей, которые производят сверхточную и тщательную процедуру исследования. Каждый специалист клиники имеет соответствующую квалификацию, что гарантирует высокие результаты ультразвуковой диагностики. Также, наши доктора в ходе УЗИ применяют только передовое оборудование. Наши специалисты используют инновационный УЗИ-сканер экспертного класса Philips HD 11 XE. «RoyalPhilips», голландский производитель УЗИ-сканера, занимает лидирующую позицию в производстве медицинских приборов, способных улучшить качество жизни людей.</p>
            <p>
              Основными достоинствами сканера Philips HD 11 XE являются:
            <ul>
              <li>Полностью цифровое формирование луча;</li>
              <li>ЖК-монитор высокого разрешения;</li>
              <li>Возможность 2D, 3D и 4D режимов сканирования;</li>
              <li>Современная технология FetalEchoSTIC для изучения сердца плода;</li>
              <li>Панорамное сканирование;</li>
              <li>Функция латерального усиления;</li>
            </ul>
            </p>
            <div className="table-wrapper">
            <table>
<thead>
<tr>
<td colspan="3" align="center"><strong>Акушерство и гинекология</strong></td>
</tr>
</thead>
<tbody>
<tr>
<td>Допплерометрия сосудов матки и плода (с&nbsp;&nbsp;&nbsp;20 недели беременности)</td>
<td>1000</td>
</tr>
<tr>
<td>Комплексное ультразвуковое исследование&nbsp;&nbsp;&nbsp;для женщин ( малый таз трансабдоминально , трансвагинально , молочные железы , щитовидная железа )</td>
<td>4000</td>
</tr>
<tr>
<td>Ранняя &nbsp;&nbsp;&nbsp;диагностика беременности</td>
<td>1500</td>
</tr>
<tr>
<td>УЗИ молочных желез с регионарными&nbsp;&nbsp;&nbsp;лимфоузлами с цветовым допплеровским картированием</td>
<td>2000</td>
</tr>
<tr>
<td>Ультразвуковое исследование в I триместре&nbsp;&nbsp;&nbsp;беременности (с 10 по 13 недели беременности)</td>
<td>1850</td>
</tr>
<tr>
<td>Ультразвуковое исследование в II&nbsp;&nbsp;&nbsp;триместре беременности (с 14 по&nbsp;&nbsp;&nbsp;27недели беременности)</td>
<td>2000</td>
</tr>
<tr>
<td>Ультразвуковое исследование в III&nbsp;&nbsp;&nbsp;триместре беременности</td>
<td>1850</td>
</tr>
<tr>
<td>Ультразвуковое исследование матки и&nbsp; придатков трансабдоминальное</td>
<td>1500</td>
</tr>
<tr>
<td>Ультразвуковое исследование матки и&nbsp; придатков трансабдоминальное и&nbsp;&nbsp;&nbsp;трансвагинальное</td>
<td>2500</td>
</tr>
<tr>
<td>Ультразвуковое исследование матки и&nbsp; придатков трансвагинальное</td>
<td>1500</td>
</tr>
<tr>
<td>Ультразвуковое исследование матки и&nbsp; придатков трансабдоминальное и&nbsp;&nbsp;&nbsp;трансвагинальное c доплерографией</td>
<td>2700</td>
</tr>
<tr>
<td>Ультразвуковое исследование молочных&nbsp; желез с регионарными лимфоузлами</td>
<td>1500</td>
</tr>
<tr>
<td>Ультразвуковое исследование молочных&nbsp; желез с регионарными лимфоузлами с цветовым допплеровским картированием</td>
<td>2000</td>
</tr>
<tr>
<td>Ультразвуковое исследование плода с&nbsp;&nbsp;&nbsp;записью на DVD</td>
<td>2000</td>
</tr>
<tr>
<td>Ультразвуковое исследование&nbsp;&nbsp;&nbsp;фолликулогенеза(фолликулометрия)</td>
<td>1000</td>
</tr>
<tr>
<td>Цервикометрия</td>
<td>1200</td>
</tr>
<tr>
<td colspan="3" align="center"><strong>Железы&nbsp;&nbsp;&nbsp;внутренней и внешней секреции</strong></td>
</tr>
<tr>
<td>Ультразвуковое исследование&nbsp;&nbsp;&nbsp;паращитовидных желез</td>
<td>1000</td>
</tr>
<tr>
<td>Ультразвуковое исследование слюнных желез</td>
<td>900</td>
</tr>
<tr>
<td>Ультразвуковое исследование щитовидной&nbsp;&nbsp;&nbsp;железы</td>
<td>1200</td>
</tr>
<tr>
<td>Ультразвуковое исследование щитовидной&nbsp;&nbsp;&nbsp;железы с региональными лимфоузлами и доплерографией</td>
<td>1800</td>
</tr>
<tr>
<td>Ультразвуковое исследование щитовидной&nbsp;&nbsp;&nbsp;железы с региональными лимфоузлами и доплерографией сосудов</td>
<td>2000</td>
</tr>
<tr>
<td colspan="3" align="center"><strong>Органы&nbsp;&nbsp;&nbsp;брюшной полости</strong></td>
</tr>
<tr>
<td>Дуплексное сканирование сосудов печени</td>
<td>1200</td>
</tr>
<tr>
<td>Ультразвуковое исследование брюшной&nbsp;&nbsp;&nbsp;полости и почек</td>
<td>2800</td>
</tr>
<tr>
<td>Ультразвуковое исследование&nbsp;&nbsp;&nbsp;гепатобиллиарной зоны</td>
<td>1100</td>
</tr>
<tr>
<td>Ультразвуковое исследование желчного&nbsp;&nbsp;&nbsp;пузыря</td>
<td>1200</td>
</tr>
<tr>
<td>Ультразвуковое исследование желчного&nbsp;&nbsp;&nbsp;пузыря с определением его сократимости</td>
<td>1400</td>
</tr>
<tr>
<td>Ультразвуковое исследование органов&nbsp;&nbsp;&nbsp;брюшной полости (комплексное) (печень, желчный пузырь, поджелудочная железа,&nbsp;&nbsp;&nbsp;селезенка)</td>
<td>2500</td>
</tr>
<tr>
<td>Ультразвуковое исследование органов&nbsp;&nbsp;&nbsp;брюшной полости (комплексное) (печень, желчный пузырь, поджелудочная железа,&nbsp;&nbsp;&nbsp;селезенка) с доплерографией</td>
<td>4000</td>
</tr>
<tr>
<td>Ультразвуковое исследование органов&nbsp;&nbsp;&nbsp;брюшной полости (комплексное) (печень, желчный пузырь, поджелудочная железа,&nbsp;&nbsp;&nbsp;селезенка) и почек</td>
<td>3500</td>
</tr>
<tr>
<td>Ультразвуковое исследование печени и&nbsp;&nbsp;&nbsp;желчного пузыря с доплерографией</td>
<td>1200</td>
</tr>
<tr>
<td>Ультразвуковое исследование печени с&nbsp;&nbsp;&nbsp;доплерографией</td>
<td>1700</td>
</tr>
<tr>
<td>Ультразвуковое исследование поджелудочной&nbsp;&nbsp;&nbsp;железы</td>
<td>1200</td>
</tr>
<tr>
<td>Ультразвуковое исследование селезенки с&nbsp;&nbsp;&nbsp;доплерографией</td>
<td>1500</td>
</tr>
<tr>
<td>Ультразвуковое исследование селезенки</td>
<td>1200</td>
</tr>
<tr>
<td colspan="3" align="center"><strong>Прочие УЗИ</strong></td>
</tr>
<tr>
<td>Ультразвуковое исследование вилочковой&nbsp;&nbsp;&nbsp;железы</td>
<td>1200</td>
</tr>
<tr>
<td>Ультразвуковое исследование крупных&nbsp;&nbsp;&nbsp;суставов (2 одноименных сустава)</td>
<td>2500</td>
</tr>
<tr>
<td>Ультразвуковое исследование мягких тканей&nbsp;&nbsp;&nbsp;(патологические элементы кожи, подкожной клетчатки, мышц)</td>
<td>1800</td>
</tr>
<tr>
<td>Ультразвуковое исследование плевральной&nbsp;&nbsp;&nbsp;полости</td>
<td>1500</td>
</tr>
<tr>
<td>Ультразвуковое исследование регионарных&nbsp;&nbsp;&nbsp;лимфатических узлов (1область)</td>
<td>1200</td>
</tr>
<tr>
<td>Ультразвуковое исследование тазобедренных&nbsp;&nbsp;&nbsp;суставов (2 сустава)</td>
<td>1800</td>
</tr>
<tr>
<td>Ультразвуковое определение жидкости в&nbsp;&nbsp;&nbsp;брюшной полости</td>
<td>1200</td>
</tr>
<tr>
<td colspan="3" align="center"><strong>Сердечно-сосудистая&nbsp;&nbsp;&nbsp;система</strong></td>
</tr>
<tr>
<td>Дуплексное сканирование артерий верхних&nbsp;&nbsp;&nbsp;конечностей</td>
<td>2000</td>
</tr>
<tr>
<td>Дуплексное сканирование артерий нижних&nbsp;&nbsp;&nbsp;конечностей</td>
<td>1800</td>
</tr>
<tr>
<td>Дуплексное сканирование вен верхних&nbsp;&nbsp;&nbsp;конечностей</td>
<td>2000</td>
</tr>
<tr>
<td>Дуплексное сканирование вен нижних&nbsp;&nbsp;&nbsp;конечностей</td>
<td>2000</td>
</tr>
<tr>
<td>Дуплексное сканирование сосудов (артерий&nbsp;&nbsp;&nbsp;и вен) верхних конечностей</td>
<td>3500</td>
</tr>
<tr>
<td>Дуплексное сканирование сосудов (артерий&nbsp;&nbsp;&nbsp;и вен) нижних конечностей</td>
<td>3500</td>
</tr>
<tr>
<td>Дуплексное сканирование транскраниальное&nbsp;&nbsp;&nbsp;артерий и вен</td>
<td>2200</td>
</tr>
<tr>
<td>Ультразвуковое исследование брюшного&nbsp;&nbsp;&nbsp;отдела аорты</td>
<td>1500</td>
</tr>
<tr>
<td>Функциональные пробы при ультразвуковом&nbsp;&nbsp;&nbsp;исследовании артерий верхних и нижних конечностей (дополнительно к основному&nbsp;&nbsp;&nbsp;исследованию)</td>
<td>2000</td>
</tr>
<tr>
<td>Функциональные пробы при ультразвуковом&nbsp;&nbsp;&nbsp;исследовании позвоночных артерий на&nbsp;&nbsp;&nbsp;выявление экстравазальной компрессии (дополнительно к основному исследова</td>
<td>2000</td>
</tr>
<tr>
<td>Эхокардиография</td>
<td>5500</td>
</tr>
<tr>
<td colspan="3" align="center"><strong>Урология-андрология</strong></td>
</tr>
<tr>
<td>Дуплексное сканирование артерий почек</td>
<td>2000</td>
</tr>
<tr>
<td>Дуплексное сканирование артерий почек с&nbsp;&nbsp;&nbsp;доплерографией</td>
<td>3500</td>
</tr>
<tr>
<td>Ультразвуковая доплерография сосудов&nbsp;&nbsp;&nbsp;полового члена</td>
<td>3500</td>
</tr>
<tr>
<td>Ультразвуковое исследование мочевого&nbsp;&nbsp;&nbsp;пузыря с определением остаточной мочи</td>
<td>1700</td>
</tr>
<tr>
<td>Ультразвуковое исследование мочевыводящих&nbsp;&nbsp;&nbsp;путей</td>
<td>2000</td>
</tr>
<tr>
<td>Ультразвуковое исследование мочевыводящих&nbsp;&nbsp;&nbsp;путей с доплерографией с определением остаточной мочи</td>
<td>2700</td>
</tr>
<tr>
<td>Ультразвуковое исследование надпочечников</td>
<td>1200</td>
</tr>
<tr>
<td>Ультразвуковое исследование органов&nbsp;&nbsp;&nbsp;мошонки</td>
<td>1800</td>
</tr>
<tr>
<td>Ультразвуковое исследование органов&nbsp;&nbsp;&nbsp;мошонки с доплеровским исследованием кровотока</td>
<td>2500</td>
</tr>
<tr>
<td>Ультразвуковое исследование органов&nbsp;&nbsp;&nbsp;мошонки и полового члена</td>
<td>2500</td>
</tr>
<tr>
<td>Ультразвуковое исследование полового&nbsp;&nbsp;&nbsp;члена</td>
<td>1600</td>
</tr>
<tr>
<td>Ультразвуковое исследование почек</td>
<td>1200</td>
</tr>
<tr>
<td>Ультразвуковое исследование почек и&nbsp;&nbsp;&nbsp;надпочечников</td>
<td>1600</td>
</tr>
<tr>
<td>Ультразвуковое исследование почек и&nbsp;&nbsp;&nbsp;надпочечников с допплерографией</td>
<td>2500</td>
</tr>
<tr>
<td>Ультразвуковое исследование&nbsp;&nbsp;&nbsp;предстательной железы (с определением остаточной мочи) трансабдоминально и&nbsp;&nbsp;&nbsp;трансректально с допплерографией</td>
<td>3000</td>
</tr>
<tr>
<td>Ультразвуковое исследование&nbsp;&nbsp;&nbsp;предстательной железы (с определением остаточной мочи) трансабдоминально с&nbsp;&nbsp;&nbsp;допплерографией</td>
<td>2500</td>
</tr>
<tr>
<td>Ультразвуковое исследование&nbsp;&nbsp;&nbsp;предстательной железы трансректально</td>
<td>2200</td>
</tr>
<tr>
<td>Ультразвуковое исследование&nbsp;&nbsp;&nbsp;предстательной железы (с определением остаточной мочи) трансабдоминально и&nbsp;&nbsp;&nbsp;трансректально (ТРУЗИ)</td>
<td>2500</td>
</tr>
<tr>
<td colspan="3" align="center"><strong>Услуги УЗИ&nbsp;&nbsp;&nbsp;прием д.м.н.</strong></td>
</tr>
<tr>
<td>Ранняя диагностика беременности, д.м.н</td>
<td>2000</td>
</tr>
<tr>
<td>Ультразвукове исследование почек,&nbsp;&nbsp;&nbsp;мочеточников, мочевого пузыря ( с/без определения остаточной мочи), д.м.н</td>
<td>3500</td>
</tr>
<tr>
<td>Ультразвуковое исследование в I триместре&nbsp;&nbsp;&nbsp;беременности, д.м.н</td>
<td>2200</td>
</tr>
<tr>
<td>Ультразвуковое исследование в III&nbsp;&nbsp;&nbsp;триместре беременности, д.м.н</td>
<td>2500</td>
</tr>
<tr>
<td>Ультразвуковое исследование во II триместре беременности, д.м.н</td>
<td>2200</td>
</tr>
<tr>
<td>Ультразвуковое исследование желчного&nbsp;&nbsp;&nbsp;пузыря, д.м.н</td>
<td>2000</td>
</tr>
<tr>
<td>Ультразвуковое исследование матки и&nbsp;&nbsp;&nbsp;придатков трансабдоминальное и трансвагинальное, д.м.н</td>
<td>3000</td>
</tr>
<tr>
<td>Ультразвуковое исследование матки и&nbsp;&nbsp;&nbsp;придатков трансабдоминальное, д.м.н</td>
<td>2000</td>
</tr>
<tr>
<td>Ультразвуковое исследование матки и&nbsp;&nbsp;&nbsp;придатков трансвагинальное, д.м.н</td>
<td>2000</td>
</tr>
<tr>
<td>Ультразвуковое исследование молочных&nbsp;&nbsp;&nbsp;желез с регионарными лимфоузлами, д.м.н</td>
<td>2500</td>
</tr>
<tr>
<td>Ультразвуковое исследование мочевого&nbsp;&nbsp;&nbsp;пузыря с определением остаточной мочи, д.м.н</td>
<td>2200</td>
</tr>
<tr>
<td>Ультразвуковое исследование&nbsp;&nbsp;&nbsp;надпочечников, д.м.н</td>
<td>1700</td>
</tr>
<tr>
<td>Ультразвуковое исследование органов&nbsp;&nbsp;&nbsp;брюшной полости (печень, желчный пузырь, поджелудочная железа, селезенка),&nbsp;&nbsp;&nbsp;д.м.н</td>
<td>3000</td>
</tr>
<tr>
<td>Ультразвуковое исследование печени, д.м.н</td>
<td>2000</td>
</tr>
<tr>
<td>Ультразвуковое исследование пожделудочной&nbsp;&nbsp;&nbsp;железы, д.м.н</td>
<td>1500</td>
</tr>
<tr>
<td>Ультразвуковое исследование почек и&nbsp;&nbsp;&nbsp;надпочечников, д.м.н</td>
<td>2000</td>
</tr>
<tr>
<td>Ультразвуковое исследование почек, д.м.н</td>
<td>1500</td>
</tr>
<tr>
<td>Ультразвуковое исследование&nbsp; предстательной железы (с определением остаточной мочи) трансабдоминальное,&nbsp; д.м.н</td>
<td>2500</td>
</tr>
<tr>
<td>Ультразвуковое исследование селезенки,&nbsp;&nbsp;&nbsp;д.м.н</td>
<td>1500</td>
</tr>
<tr>
<td>Ультразвуковое исследование&nbsp;&nbsp;&nbsp;фолликулогенеза (фоликулометрия), д.м.н</td>
<td>2000</td>
</tr>
<tr>
<td>Ультразвуковое исследование щитовидной&nbsp;&nbsp;&nbsp;железы, д.м.н</td>
<td>2200</td>
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
