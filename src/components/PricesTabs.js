import React, { Component } from 'react';
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';

const PricesTabs = props => (

      <Tabs defaultTab="horizontal-tab-one" horizontal>
        <TabList>
          <Tab tabFor="horizontal-tab-one">Комплексные Обследования</Tab>
          <Tab tabFor="horizontal-tab-two">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          УЗИ&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Tab>
          <Tab tabFor="horizontal-tab-three">Эндокринология</Tab>
          
          
          
        </TabList>
        <TabPanel tabId="horizontal-tab-two">
        <br/>
        <div className="table-wrapper">
							<table>
								<thead>
									<tr>
                    <th>Вид</th>
										<th>Цена</th>
                    <th>Название</th>
										
									</tr>
								</thead>
								<tbody>
									<tr>
                    <td>При беременности</td>
										<td>1500₽</td>
                    <td>УЗИ плода, без проведения скрининга. Оценить состояние плода</td>
                    
									</tr>
                  <tr>
                    <td></td>
										<td>2000₽</td>
                    <td>Допплерометрия сосудов матки и плода (с 20 недели беременности)	</td>
                    
									</tr>
                  <tr>
                    <td></td>
										<td>3000₽</td>
                    <td>Скрининг УЗИ первый триместр 11- 12 недель</td>
                    
									</tr>
                  <tr>
                    <td></td>
										<td>3000₽</td>
                    <td>Скрининг УЗИ второй  триместр 22-24 недель</td>
                    
									</tr>
                  <tr>
                    <td></td>
										<td>3000₽</td>
                    <td>Скрининг УЗИ третий триместр 32-36 недель</td>
                    
									</tr>
                  <tr>
                    <td></td>
										<td>2000₽</td>
                    <td>Проведение 3D/4D УЗИ</td>
                    
									</tr>
                  <tr>
                    <td></td>
										<td>1000₽</td>
                    <td>Фолликулометрия</td>
                    
									</tr>
                  <tr>
                    <td></td>
										<td>1000₽</td>
                    <td>Контроль эндометрия</td>
                    
									</tr>
                  <tr>
                    <td></td>
										<td>800₽</td>
                    <td>Цервикометрия</td>
                    
									</tr>
                  <tr>
                    <td>УЗИ органов</td>
										<td>1500₽</td>
                    <td>УЗИ органов брюшной полости</td>
                    
									</tr>
                  <tr>
                    <td></td>
										<td>800₽</td>
                    <td>УЗИ печени</td>
                    
									</tr>
                  <tr>
                    <td></td>
										<td>800₽</td>
                    <td>УЗИ поджелудочной железы</td>
                    
									</tr>
                  <tr>
                    <td></td>
										<td>1000₽</td>
                    <td>УЗИ почек</td>
                    
									</tr>
                  <tr>
                    <td></td>
										<td>500₽</td>
                    <td>УЗИ надпочечников</td>
                    
									</tr>
                  <tr>
                    <td></td>
										<td>500₽</td>
                    <td>УЗИ мочевого пузыря</td>
                    
									</tr>
                  <tr>
                    <td></td>
										<td>1500₽</td>
                    <td>УЗИ почек  и  УЗИ мочевого пузыря</td>
                    
									</tr>
                  <tr>
                    <td>УЗИ желез</td>
										<td>1200₽</td>
                    <td>УЗИ щитовидной железы</td>
                    
									</tr>
									<tr>
                    <td></td>
										<td>1200₽</td>
                    <td>УЗИ молочных желез</td>
                    
									</tr>
                  <tr>
                    <td></td>
										<td>1200₽</td>
                    <td>УЗИ предстательной железы</td>
                    
									</tr>
                  <tr>
                    <td>УЗДГ сосудов</td>
										<td>1500₽</td>
                    <td>Дуплексное/ Триплексное сканирование сосудов головы</td>
                    
									</tr>
                  <tr>
                    <td></td>
										<td>1500₽</td>
                    <td>Дуплексное / Триплексное сканирование сосудов шеи</td>
                    
									</tr>
                  <tr>
                    <td></td>
										<td>2000₽</td>
                    <td>Дуплексное / Триплексное сканирование сосудов головы и шеи</td>
                    
									</tr>
                  <tr>
                    <td></td>
										<td>1400₽</td>
                    <td>Дуплексное / Триплексное сканирование артерий верхних конечностей</td>
                    
									</tr>
                  <tr>
                    <td></td>
										<td>1400₽</td>
                    <td>Дуплексное / Триплексное сканирование вен верхних конечностей</td>
                    
									</tr>
                  <tr>
                    <td></td>
										<td>3000₽</td>
                    <td>Дуплексное / Триплексное сканирование артерий и вен верхних конечностей</td>
                    
									</tr>
                  <tr>
                    <td></td>
										<td>1400₽</td>
                    <td>Дуплексное / Триплексное сканирование артерий нижних конечночтей</td>
                    
									</tr>
                  <tr>
                    <td></td>
										<td>1400₽</td>
                    <td>Дуплексное / Триплексное сканирование вен нижних конечностей</td>
                    
									</tr>
                  <tr>
                    <td></td>
										<td>3000₽</td>
                    <td>Дуплексное / Триплексное сканирование вен и артерий нижних конечностей</td>
                    
									</tr>
                  <tr>
                    <td></td>
										<td>2000₽</td>
                    <td>Дуплексное / Триплексное сканирование аорты</td>
                    
									</tr>
                  <tr>
                    <td></td>
										<td>1200₽</td>
                    <td>Дуплексное / Триплексное сканирование полой вены</td>
                    
									</tr>
                  <tr>
                    <td></td>
										<td>1200₽</td>
                    <td>Сканирование почечных сосудов</td>
                    
									</tr>
                  <tr>
                    <td></td>
										<td>1500₽</td>
                    <td>Сканирование подвздошных сосудов</td>
                    
									</tr>
                  <tr>
                    <td></td>
										<td>2200₽</td>
                    <td>Эхокардиография сердца</td>
                    
									</tr><tr>
                    <td>УЗИ суставов</td>
										<td>1200₽</td>
                    <td>УЗИ плечевых суставов</td>
                    
									</tr><tr>
                    <td></td>
										<td>1200₽</td>
                    <td>УЗИ локтевых суставов</td>
                    
									</tr><tr>
                    <td></td>
										<td>1200₽</td>
                    <td>УЗИ кисти</td>
                    
									</tr><tr>
                    <td></td>
										<td>450₽</td>
                    <td>УЗИ тазобедренных суставов</td>
                    
									</tr><tr>
                    <td></td>
										<td>1200₽</td>
                    <td>Ультразвуковое исследование надпочечников</td>
                    
									</tr><tr>
                    <td></td>
										<td>1200₽</td>
                    <td>УЗИ коленных суставов</td>
                    
									</tr>
                  <tr>
                    <td></td>
										<td>1200₽</td>
                    <td>УЗИ голеностопных суставов</td>
                    
									</tr>
                  <tr>
                    <td></td>
										<td>1200₽</td>
                    <td>УЗИ стопы</td>
                  </tr>
									
								</tbody>
							</table>
						</div>
        </TabPanel>
        <TabPanel tabId="horizontal-tab-three">
        <br/>
        <div className="table-wrapper">
        <h2>Что делать при нарушении менструального цикла, гормональных сбоях в организме?</h2>
              <table>
								<thead>
									<tr>
                    <th>Цена</th>
                    <th>Название анализа</th>
										<th>Для чего необходимо его сдавать</th>
										
									</tr>
								</thead>
								<tbody>
									<tr>
                    <td>270₽</td>
                    <td>ЛГ (лютеинизирующий гормон)</td>
										<td>Гонадотропный гормон передней доли гипофиза,
                       который стимулирует секрецию половых гормонов, эстрогенов и прогестерона</td>
                    
									</tr>
                  <tr>
                  <td>270₽</td>
                    <td>Эстрадиол</td>
										<td>Эстрогенный стероидный гормон , который играет важную роль в формировании и функционировании половой системы</td>
                    
									</tr>
                  <tr>
                  <td>270₽</td>
                    <td>ФСГ (фолликулостимулирующий гормон)</td>
										<td>Гликопротеиновый гормон передней доли гипофиза , который влияет на функцию половых желез</td>
                    
									</tr>
                  <tr>
                  <td>270₽</td>
                    <td>Пролактин</td>
										<td>Гормон, контролирующий метаболизм, а так же процессы роста и развития организма. Так же он тормозит секрецию ФСГ, обеспечивая нормальный менструальный цикл</td>
                    
									</tr>
                  <tr>
                  <td>290₽</td>
                    <td>Прогестерон</td>
										<td>Это стероидный гормон, основной функцией которого является подготовка организма женщины к беременности. Он вырабатывается желтым телом яичников</td>
                    
									</tr>
                  <tr>
                  <td>290₽</td>
                    <td>Тестостерон</td>
										<td>Это стероидный гормон из группы андрогенов, отвечающий за формирование вторичных половых признаков и половую функцию.</td>
                    
									</tr>
                  <tr>
                  <td>430₽</td>
                    <td>17- ОПГ</td>
										<td>Гормон, продуцирующийся надпочечниками, участвует в метаболизме, поддержании кровяного давления и регуляции иммунной системы</td>
                    
									</tr>
                  <tr>
                  <td>430₽</td>
                    <td>ДЭА-сульфат (Дегидроэпиандростерон-сульфат</td>
										<td>Андроген, мужской половой гормон, который присутствует в крови как у мужчин, так и у женщин. Он играет важную роль в развитии вторичных мужских половых признаков при половом созревании и может преобразовываться в тестостерон и эстрадиол. ДЭА-SO4 вырабатывается корой надпочечников, его производство контролируется адренокортикотропным гормоном (АКТГ).</td>
                    
									</tr>
                  <tr>
                  <td>270₽</td>
                    <td>ТТГ(Тиреотропный гормон)</td>
										<td>Основной регулятор функции щитовидной железы, синтезирующийся гипофизом.Основная его функция – поддерживать постоянную концентрацию гормонов щитовидной железы – тиреоидных гормонов, которые регулируют процессы образования энергии в организме. Когда их содержание в крови понижается, гипоталамус высвобождает гормон, стимулирующий секрецию ТТГ гипофизом.</td>
                    
									</tr>
                  <tr>
                  <td>270₽</td>
                    <td>Т4 свободный</td>
										<td>Один из двух главных гормонов щитовидной железы, основной функцией которого является регуляция энергетического и пластического обмена в организме. Свободный тироксин – биологически активная часть общего тироксина, которая играет важную роль в обмене веществ.</td>
                    
									</tr>
                  <tr>
                  <td>340₽</td>
                    <td>А/т к ТРО</td>
										<td>Антитела к тиреопероксидазе – специфические иммуноглобулины, направленные против фермента, содержащегося в клетках щитовидной железы и отвечающего за образование активной формы йода для синтеза тиреоидных гормонов. Они являются специфичным маркером аутоиммунных заболеваний щитовидной железы.</td>
                    
									</tr>
                </tbody>
							</table>
        <h2>Какие анализы следует сдать при наступлении Климакса?</h2>      
              <table>
								<thead>
									<tr>
                  <th>Цена</th>
                    <th>Название анализа</th>
                    <th>Для чего необходимо сдавать?</th>
										
										
									</tr>
								</thead>
								<tbody>
									<tr>
                  <td>120₽</td>
                    <td>АЛТ</td>
                    <td>Оценивает работу печени</td>
                    
                    
									</tr>
                  <tr>
                  <td>120₽</td>
                    <td>АСТ</td>
                    <td></td>
										
                    
									</tr>
                  <tr>
                  <td>150₽</td>
                    <td>Билирубин</td>
                    <td></td>
										
                    
									</tr>
                  <tr>
                  <td>400₽</td>
                    <td>Гликированный гемоглобин</td>
                    <td>Выявляет скрытый сахарный диабет</td>
										
                    
									</tr>
                  <tr>
                  <td>150₽</td>
                    <td>Общий холестерин</td>
                    <td>Профилактика тромбозов (инсульты, инфаркты, ТЭЛА)</td>
										
                    
									</tr>
                  <tr>
                  <td>290₽</td>
                    <td>ФСГ</td>
                    <td>Отображают гормональные нарушения, показывают стадию менопаузы</td>
										
                    
									</tr>
                  <tr>
                  <td>290₽</td>
                    <td>ЛГ</td>
                    <td></td>
										
                    
									</tr>
                  <tr>
                  <td>270₽</td>
                    <td>Эстрадиол</td>
                    <td></td>
										
                    
									</tr>
                  <tr>
                  <td>270₽</td>
                    <td>Пролактин</td>
                    <td></td>
										
                    
									</tr>
                  <tr>
                  <td>270₽</td>
                    <td>ТТГ</td>
                    <td>Оценивают работу щитовидной железы</td>
										
                    
									</tr>
                  <tr>
                  <td>340₽</td>
                    <td>А/т к ТРО</td>
                    <td></td>
										
                    
									</tr>
                  <tr>
                  <td>270₽</td>
                    <td>Свободный Т4</td>
                    <td></td>
										
                    
									</tr>
                  <tr>
                  <td>180₽</td>
                    <td>Протромбин №1, МНО</td>
                    <td>Показатели, выражающие протромбиновое время, которое характеризует первую и вторую фазу гемостаза</td>
										
                    
									</tr>
                  <tr>
                  <td>780₽</td>
                    <td>D – димер (по показаниям при наличии варикозной болезни, наследственности)</td>
                    <td>Маркер тромбообразования , так как в процессе тромбообразования , запускается и процесс растворения тромбов с образованием D – димеров</td>
										
                    
									</tr>
                  <tr>
                  <td>160₽</td>
                    <td>Фибриноген</td>
                    <td>Белок, вырабатываемый в печени и превращающийся в нерастворимый фибрин – основу сгустка при свертывании крови.</td>
										
                    
									</tr><tr>
                  <td>130₽</td>
                    <td>АЧТВ</td>
                    <td>Активированное частичное тромбопластиновое время , время за которое образуется сгусток</td>
										
                    
									</tr>
                </tbody>
							</table>
						
        </div>
        </TabPanel>
        <TabPanel tabId="horizontal-tab-one">
        <br/>
        <div className="table-wrapper">
        <h2>Комплексные Чек-Ап обследования</h2>
        <p>
        Комплексные Чек-Ап обследования помогают исключить или своевременно обнаружить незаметно протекающие опасные заболевания. Данный вид диагностики включает в себя множество лабораторных тестов, анализ сердечной деятельности, ультразвуковую и рентгенологическую диагностику внутренних органов.
        </p>
              <table>
								<thead>
									<tr>
                    <th>Цена</th>
                    <th>Название комплекса</th>
										<th>Какие анализы включены</th>	
									</tr>
								</thead>
								<tbody>
                  <tr>
                    <td>2000₽</td>
                    <td>Скрининг сердечно-сосудистой системы. Кардиопрогноз.</td>
										<td> 
<li>Холестерол общий</li>
<li>ЛПВП (липопротеины высокой плотности)</li>
<li>ЛПНП (липопротеины низкой плотности)</li>
<li>С-реактивный белок</li>
<li>УЗИ сердца</li>
                     
                    </td>
									</tr>
                  <tr>
                    <td>1800₽</td>
                    <td>Скрининг функции щитовидной железы</td>
										<td>
                    <li>Тиреотропный гормон (ТТГ)</li>
                    <li>Свободный тироксин (Т4 свободный)</li>
                    <li>УЗИ щитовидной железы</li>
                    </td>
									</tr><tr>
                    <td>1500₽</td>
                    <td>Скрининг функции почек</td>
										<td>
                    <li>Общий анализ мочи</li>
                    <li>Уровень мочевины в крови</li>
                    <li>Уровень креатинина в крови</li>
                    <li>Скорость клубочковой фильтрации (СКФ)</li>
                    <li>УЗИ почек</li>
                    </td>
									</tr><tr>
                    <td>2200₽</td>
                    <td>Скрининг функции печени и поджелудочной железы</td>
										<td>
                    <li>АЛТ</li>
                    <li>Гамма-ГТ</li>
                    <li>Уровень общего билирубина</li>
                    <li>Липаза</li>
                    <li>Амилаза общая</li>
                    <li>УЗИ печени</li>
                    <li>УЗИ поджелудочной железы</li>
                    </td>
									</tr><tr>
                    <td>2900₽</td>
                    <td>Профилактическое обследование онкологии для женщин</td>
										<td>
                    <li>Анализ крови на РЭА(раковый эмбриональный антиген)</li>
                    <li>СА 125 (женский онкомаркер на малый таз)</li>
                    <li>СА 15-3 (онкомаркер молочных желез,женский)</li>
                    <li>УЗИ малого таза</li>
                    </td>
									</tr><tr>
                    <td>5500₽</td>
                    <td>Профилактическое обследование онкологии для мужчин</td>
										<td>
                    <li>ПСА общий (Показывает наличие или отсутствие клеток, подозрительных на злокачественные в малом тазу)</li>
                    <li>Анализ крови на РЭА (раковый эмбриональный антиген)</li>
                    <li>УЗИ малого таза</li>
                    </td>
									</tr>
                  <tr>
                    <td>2950₽</td>
                    <td>Гормональное обследование</td>
										<td>
                    <li>ЛГ (лютеинизирующий гормон)</li>
                    <li>ФСГ (фолликулостимулирующий)</li>
                    <li>Тестостерон</li>
                    <li>УЗИ малого таза</li>
                    </td>
									</tr>
                  <tr>
                    <td>1150₽</td>
                    <td>Урологическое здоровье мужчины</td>
										<td>
                    <li>Мазок на микрофлору</li>
                    <li>УЗИ простаты (абдоминально)</li>
                    <li>УЗИ мочевого пузыря</li>
                    <li>Консультация уролога</li>
                    </td>
									</tr>
                  <tr>
                    <td>2200₽</td>
                    <td>Профилактика инфекций передаваемых половым путем (для мужчин)</td>
										<td>
                    <li>Консультация уролога</li>
                    <li>Мазок на микрофлору</li>
                    <li>ПЦР диагностика:</li>
                    <li>chlamydia trachomatis</li>
                    <li>mycoplasma genitalium</li>
                    <li>mycoplasma hominis</li>
                    <li>neisseria gonorrhoea</li>
                    <li>trichomonas vaginalis</li>
                    <li>ureaplasma species</li>                   
                    </td>
									</tr>
                  <tr>
                    <td>1150₽</td>
                    <td>Урологическое здоровье женщины</td>
										<td>
                    <li>Мазок на микрофлору</li>
                    <li>УЗИ гинекологическое</li>
                    <li>УЗИ мочевого пузыря</li>
                    <li>Консультация гинеколога</li>
                    </td>
									</tr>
                  <tr>
                    <td>2200₽</td>
                    <td>Профилактика инфекций передаваемых половым путем (для женщин)</td>
										<td>
                    <li>Консультация гинеколога</li>
                    <li>Мазок на микрофлору</li>
                    <li>ПЦР диагностика:</li>
                    <li>chlamydia trachomatis</li>
                    <li>mycoplasma genitalium</li>
                    <li>mycoplasma hominis</li>
                    <li>neisseria gonorrhoea</li>
                    <li>trichomonas vaginalis</li>
                    <li>ureaplasma species</li>                   
                    </td>
									</tr>
                  <tr>
                    <td>1150₽</td>
                    <td>Планирование беременности - Цервикальный скрининг, ИППП (прегравидарная подготовка)</td>
										<td>
                    <li>Микоплазма гениталиум (мазок)</li>
                    <li>Нейсерия гонореи</li>
                    <li>Трихомонас вагиналис</li>
                    <li>Хламидия трахоматис</li>
                    <li>Гинекологический мазок на флору</li>
                    <li>ВПЧ Типы 16,18,31,33,35,39,45,51,52,56,58,59 (Метод Real- time)</li>
                    <li>Цитологическое исследование соскобов шейки матки и цервикального канала методом жидкостной цитологии</li>
                    </td>
									</tr>
                  <tr>
                    <td>9780₽</td>
                    <td>Буду мамой</td>
										<td> 
<li>Консультация и осмотр гинеколога</li>
<li>Мазок на флору</li>
<li>Биохимия крови: глюкоза, холестерин</li>
<li>Анализ крови на RW,ВИЧ,группу крови и резус фактор</li>
<li>ПЦР диагностика:</li>
<li>chlamydia trachomatis</li>
<li>mycoplasma genitalium</li>
<li>mycoplasma hominis</li>
<li>neisseria gonorrhoea</li>
<li>trichomonas vaginalis</li>
<li>ureaplasma species</li>    
<li>Мазок на онкоцитологию</li>
<li>УЗИ малого таза</li>
<li>УЗИ молочных желез</li>
<li>УЗИ почек</li>
<li>УЗИ щитовидной железы</li>
<li>IG к вирусу краснухи</li>
                    </td>
									</tr>
                  <tr>
                    <td>9780₽</td>
                    <td>Буду папой</td>
										<td> 
<li>Консультация и осмотр уролога</li>
<li>Мазок на флору</li>
<li>Биохимия крови: глюкоза, холестерин</li>
<li>Анализ крови на RW,ВИЧ,группу крови и резус фактор</li>
<li>ПЦР диагностика:</li>
<li>chlamydia trachomatis</li>
<li>mycoplasma genitalium</li>
<li>mycoplasma hominis</li>
<li>neisseria gonorrhoea</li>
<li>trichomonas vaginalis</li>
<li>ureaplasma species</li>    
<li>Мазок на онкоцитологию</li>
<li>УЗИ малого таза</li>
<li>УЗИ почек</li>
<li>УЗИ щитовидной железы</li>
                    </td>
									</tr>
                  <tr>
                    <td>17000₽</td>
                    <td>Будущие родители</td>
										<td> 
<li>Консультация и осмотр репродуктолога (для двоих)</li>
<li>Мазок на флору (для пары)</li>
<li>Биохимия крови: глюкоза, холестерин (для пары)</li>
<li>Анализ крови на RW,ВИЧ,группу крови и резус фактор (для пары)</li>
<li>ПЦР диагностика (для женщины):</li>
<li>chlamydia trachomatis</li>
<li>mycoplasma genitalium</li>
<li>mycoplasma hominis</li>
<li>neisseria gonorrhoea</li>
<li>trichomonas vaginalis</li>
<li>ureaplasma species</li>    
<li>Мазок на онкоцитологию</li>
<li>УЗИ малого таза (для женщины)</li>
<li>УЗИ почек (для пары)</li>
<li>УЗИ щитовидной железы (для пары)</li>
<li>УЗИ молочных желез (для женщины)</li>
<li>Прогестерон, ФСГ, ЛГ (для женщины)</li>
<li>Тестостерон (для мужчин)</li>
<li>IG к вирусу краснухи</li>
<li>Мазок на онкоцитологию</li>
                    </td>
									</tr>
                </tbody>
							</table>
        </div>
        </TabPanel>
        
      </Tabs>
)

export default PricesTabs