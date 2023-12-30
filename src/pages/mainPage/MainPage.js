import React from "react";
import s from "./mainPage.module.css";
import backOne from "../../assets/images/main/back-one.jpg";
import backTwo from "../../assets/images/main/back-two.jpg";
import backThree from "../../assets/images/main/back-three.jpg";

function MainPage() {
  return (
    <div className={s.main}>
      <div
        style={{ backgroundImage: `url(${backOne})` }}
        className={`${s.home} ${s.block}`}
      >
        <div className={s.backShadow}></div>
        <h1>Электроника</h1>
      </div>
      <div
        style={{ backgroundImage: `url(${backTwo})` }}
        className={`${s.study} ${s.block}`}
      >
        <div className={`container ${s.container}`}>
          <h2>Что такое электроника?</h2>
          <p>
            Область науки и техники, занимающаяся созданием и практическим
            использованием различных электронных устройств и приборов[1], работа
            которых основана на изменении концентрации и перемещении заряженных
            частиц (электронов) в вакууме, газе или твердых кристаллических
            телах, и других физических явлениях (НБИК).
          </p>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(${backThree})`,
          backgroundPosition: "left",
        }}
        className={`${s.for} ${s.block}`}
      >
        <div className={`container ${s.container}`}>
          <h2>История электроники</h2>
          <p>
            Возникновению электроники предшествовало открытие и изучение
            электричества, электромагнетизма, а далее — изобретение радио.
            Поскольку радиопередатчики сразу же нашли применение (в первую
            очередь на кораблях и в военном деле), для них потребовалась
            элементная база, созданием и изучением которой и занялась
            электроника. Элементная база первого поколения была основана на
            электронных лампах. Соответственно получила развитие вакуумная
            электроника. Её развитию способствовало также изобретение
            телевидения и радаров, которые нашли широкое применение во время
            Второй мировой войны[2][3].
          </p>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
