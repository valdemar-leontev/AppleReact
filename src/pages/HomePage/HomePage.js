import React from "react";
import styles from "./HomePage.module.css";
import "./HomePageAnimated.css";
import { AiFillPlayCircle } from "react-icons/ai";
import ScrollAnimatedBlock from "../../components/ScrollAnimatedBlock/ScrollAnimatedBlock";
import ProductList from "../../components/ProductList/ProductList";
import DigitalCrown from "../../components/DigitalCrown/DigitalCrown";
import Gallery from "../SpecificationPage/Gallery/Gallery";
import SoundInfo from "../../components/SoundInfo/SoundInfo";
import Bandit from "../../components/Bandit/Bandit";
import MoreFeatures from "../../components/MoreFeatures/MoreFeatures";
import Case from "../../components/Case/Case";
import Footer from "../../components/Footer/Footer";
import ProductHeader from "../../components/Header/ProductHeader/ProductHeader";

const HomePage = () => {
  return (
    <>
      <ProductHeader />
      <ScrollAnimatedBlock animationClass={"_active"}>
        <div style={{ overflow: "hidden" }}>
          <h1 data-animated className={styles.text}>
            AirPods Max
          </h1>

          <div data-animated className={styles.image}/>
          <div data-animated className={styles.bottomText}>
            <div>
              <span>
                Представляем наушники AirPods Max, где высочайшее качество звука
                в полной гармонии с волшебной простотой AirPods. Это звук в
                блестящем исполнении.
              </span>
              <div className={styles.link}>
                <a href="/">Смотрите видео Путешествие в звука</a>
                <AiFillPlayCircle color={"black"} />
              </div>
            </div>
          </div>
        </div>
      </ScrollAnimatedBlock>

      <ProductList />

      <DigitalCrown />

      <Gallery />

      <SoundInfo />

      <Bandit />

      <MoreFeatures />

      <Case />

      <Footer />
    </>
  );
};

export default HomePage;
