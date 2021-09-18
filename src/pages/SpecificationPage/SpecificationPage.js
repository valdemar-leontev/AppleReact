import React, { useCallback, useState } from "react";
import styles from "./SpecificationPage.module.css";
import "./SpecificationPage.css";
import ColorDetails from "./ColorDetails/ColorDetails";
import MoreDetails from "./MoreDetails/MoreDetails";
import ScrollAnimatedBlock from "../../components/ScrollAnimatedBlock/ScrollAnimatedBlock";
import Footer from "../../components/Footer/Footer";

const images = [
  {
    id: 1,
    title: "Silver",
    url: "/images/AirPodsMax/white.jpg",
  },

  {
    id: 2,
    title: "Grey space",
    url: "/images/AirPodsMax/black.jpg",
  },

  {
    id: 3,
    title: "Blue sky",
    url: "/images/AirPodsMax/blue.jpg",
  },

  {
    id: 4,
    title: "Pink",
    url: "/images/AirPodsMax/pink.jpg",
  },

  {
    id: 5,
    title: "Green",
    url: "/images/AirPodsMax/green.jpg",
  },
];

const SpecificationPage = () => {
  const [colorId, setColorId] = useState(1);

  const onChangeColorHandler = useCallback((id) => {
    setColorId(id);
  }, []);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <p className={styles.colorItemText}>
          {images.find((i) => i.id === colorId).title}
        </p>

        <div
          className={styles.image}
          style={{
            backgroundImage: `url(${images.find((i) => i.id === colorId).url})`,
          }}
        ></div>
      </div>

      <ColorDetails onChangeHandler={onChangeColorHandler} />

      <ScrollAnimatedBlock animationClass={"_active"}>
        <MoreDetails>
          <span>Аудио­технологии</span>
          <div>
            <p>Динамический драйвер, разработанный Apple</p>
            <p>Активное шумоподавление</p>
            <p>Прозрачный режим</p>
            <p>Адаптивный эквалайзер</p>
            <p>
              Пространственное аудио и функция динамического отслеживания
              движений головы
            </p>
          </div>
        </MoreDetails>
      </ScrollAnimatedBlock>

      <ScrollAnimatedBlock animationClass={"_active"}>
        <MoreDetails>
          <span>Датчики</span>
          <div>
            <p>Оптический датчик (в каждом наушнике)</p>
            <p>Датчик положения (в каждом наушнике)</p>
            <p>Датчик обнаружения чехла (в каждом наушнике)</p>
            <p>Акселерометр (в каждом наушнике)</p>
            <p>Гироскоп (в левом наушнике)</p>
          </div>
        </MoreDetails>
      </ScrollAnimatedBlock>

      <ScrollAnimatedBlock animationClass={"_active"}>
        <MoreDetails>
          <span>Микрофоны</span>
          <div>
            <p style={{ fontWeight: "700", marginBottom: "10px" }}>
              Девять микрофонов:
            </p>
            <p>
              Восемь микрофонов для системы активного шумоподавления, два из
              которых также используются для распознавания голоса
            </p>
            <p>Один дополнительный микрофон для распознавания голоса</p>
          </div>
        </MoreDetails>
      </ScrollAnimatedBlock>

      <ScrollAnimatedBlock animationClass={"_active"}>
        <MoreDetails>
          <span>Чип</span>
          <div>
            <p>Apple H1 (в каждом наушнике)</p>
          </div>
        </MoreDetails>
      </ScrollAnimatedBlock>

      <ScrollAnimatedBlock animationClass={"_active"}>
        <MoreDetails>
          <span>Управление</span>
          <div>
            <p style={{ fontWeight: "700", marginBottom: "10px" }}>
              Колёсико Digital Crown
            </p>
            <p>Поверните, чтобы отрегулировать громкость</p>
            <p>
              Нажмите один раз, чтобы начать или приостановить воспроизведение
              либо ответить на звонок
            </p>
            <p>Нажмите дважды, чтобы перейти к следующему треку</p>
            <p>Нажмите трижды, чтобы вернуться к предыдущему треку</p>
            <p>Нажмите и удерживайте, чтобы вызвать Siri</p>
            <p style={{ fontWeight: "700", marginBottom: "10px" }}>
              Кнопка управления шумоподавлением
            </p>
            <p>
              Нажмите, чтобы переключиться с активного шумоподавления на
              Прозрачный режим или наоборот
            </p>
          </div>
        </MoreDetails>
      </ScrollAnimatedBlock>

      <ScrollAnimatedBlock animationClass={"_active"}>
        <MoreDetails>
          <span>Размеры и вес</span>
          <div>
            <p>AirPods Max (вместе с амбушюрами)</p>
            <div className={styles.case}></div>
          </div>
        </MoreDetails>
      </ScrollAnimatedBlock>

      <Footer />
    </div>
  );
};

export default SpecificationPage;
