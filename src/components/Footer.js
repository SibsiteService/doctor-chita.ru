import { Link } from 'gatsby'
import React from 'react'

const Footer = props => (
  <footer id="footer">
    <section>
      <h2>ВАШ + ДОКТОР</h2>
      <p>
        Забор крови на анализы:
      <ul>
        <li>Понедельник с 7:30 до 14:30</li>
        <li>Вторник с 7:30 до 14:30</li>
        <li>Среда с 7:30 до 14:30</li>
        <li>Четверг с 7:30 до 14:30</li>
        <li>Пятница с 7:30 до 14:30</li>
        <li>Суббота с 7:30 до 14:30</li>
      </ul>
      </p>
    </section>
    <section>
      <h2>Контактная Информация</h2>
      <dl className="alt">
        <dt>Адрес:</dt>
        <dd>ул. Шилова, д. 19, г. Чита, Забайкальский край</dd>
        <dt>Телефон:</dt>
        <dd><a href="tel: 8-800-550-13-13">8-800-550-13-13</a> (звонок бесплатный по всей России)</dd>
        <dt>
        <a href="http://n207269.yclients.com" target="_blank" rel="noopener noreferrer" className="button">
            Предварительная запись на приём к врачу
        </a>
        </dt>
        
      </dl>
      <ul className="icons">
        <li>
          <a
            href="https://vk.com/club98159070"
            className="icon fa-vk alt"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <span className="label">vk.com</span>
          </a>
        </li>
        <li>
          <a  href="https://www.instagram.com/obsledovaniya/" 
              className="icon fa-instagram alt"
              target="_blank" 
              rel="noopener noreferrer"
          >      
            <span className="label">Instagram</span>
          </a>
        </li>
      </ul>
    </section>
    <p className="copyright">
      &copy; ВАШ + ДОКТОР. Все права защищены. "Лаборатория Гемотест" и общество с ограниченной ответственностью "Ваш Доктор ", работающие по договору коммерческой концессии, на основании Лицензии № ЛО-75-01-001494 от 22.01.2019 г., выданной Министерством здравоохранения Забайкальского края.
 &nbsp;&nbsp;&nbsp; Разработано в <a href="https://www.sibsite-service.com"  target="_blank" rel="noopener noreferrer">Сибсайт Сервис</a>
    </p>
  </footer>
)

export default Footer
