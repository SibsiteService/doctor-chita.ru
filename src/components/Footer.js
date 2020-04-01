import { Link } from 'gatsby'
import React from 'react'

const Footer = props => (
  <footer id="footer">
    <section>
      <h2>Режим работы</h2>
      <div>
        <strong>Забор крови на анализы:</strong>
      <ul>
        <li>Пн-Сб: с 7:30 до 14:30</li>
        <li>Воскресенье: выходной</li>
      </ul>
      </div>
      <div>
      <strong>Прием врача гинеколога и УЗИ диагностика:</strong>
      <ul>
        <li>Пн-Сб: с 7:30 до 19:00</li>
        <li>Воскресенье: выходной</li>
      </ul>
      </div>
    </section>
    <section>
      <h2>Контактная информация</h2>
      <dl className="alt">
        <dt>Адрес:</dt>
        <dd>ул. Шилова, д. 19, г. Чита, Забайкальский край</dd>
        <dt>Телефон:</dt>
        <dd><a href="tel: +78005501313">8 (800) 550-13-13</a> (звонок бесплатный по всей России)</dd>
        <dt>
        <dt>Эл.Почтa:</dt>
        <dd><a href="mailto:analizy.chita@gmail.com?Subject=Запись%20на%20приём%20Гемотест%20на%20Шилова">analizy.chita@gmail.com</a></dd>
        </dt>
        <dt>
        <a href="mailto:analizy.chita@gmail.com?Subject=Запись%20на%20приём%20Гемотест%20на%20Шилова" target="_top" className="button">
            Предварительная запись на приём
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
      &copy; ООО "Ваш Доктор". Все права защищены. ОГРН 1157847086385, ИНН 7814190219, КПП 781401001, БИК 044030839, р/с No 40702810710000028565

 <br></br> Разработано в <a href="https://www.sibsite-service.com"  target="_blank" rel="noopener noreferrer"><strong>Сибсайт Сервис</strong>.</a>
    </p>
  </footer>
)

export default Footer
