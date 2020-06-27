import { Link } from 'gatsby'
import React from 'react'

const Footer = props => (
  <footer id="footer">
    <section>
      <h2>Режим работы</h2>
      <div>
        <strong>Забор крови на анализы:</strong>
        <br/>
        <strong>Запись на анализы:</strong><a href="tel: +78005501313"> 8 (800) 550-13-13</a> (звонок бесплатный по всей России)
      <ul>
        <li>Пн-Сб: с 7:30 до 14:30</li>
        <li>Воскресенье: выходной</li>
      </ul>
      </div>
      <div>
      <strong>Прием врача гинеколога, УЗИ диагностика, планирование беременности:</strong>
      <br/>
      <strong>Запись на приём:</strong><a href="tel: +73022217815"> +7 (3022) 217-815</a>
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
        <dt>Анализы:</dt>
        <dd><a href="tel: +78005501313">8 (800) 550-13-13</a> (звонок бесплатный по всей России)</dd>
        
        <dt>Приём Врача:</dt>
        <dd><a href="tel: +73022217815">+7 (3022) 217-815</a></dd>
        
        <dt >
        <Link to="/contactform">
        <a target="_blank" className="button">
            ЗАПИСАТЬСЯ НА ПРИЁМ
        </a>
        </Link>
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
