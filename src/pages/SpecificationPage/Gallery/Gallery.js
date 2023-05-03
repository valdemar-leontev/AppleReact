import React, { useCallback, useState } from "react";
import styles from "./Gallery.module.css";
import ColorDetails from "../../pages/SpecificationPage/ColorDetails/ColorDetails";

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
        <span className={styles.text}>
          Five colors. <br /> Anything but <br /> monotone.
        </span>

        <div
          className={styles.image}
          style={{
            backgroundImage: `url(${images.find((i) => i.id === colorId).url})`,
          }}
        ></div>
        <p className={styles.colorItemText}>
          {images.find((i) => i.id === colorId).title}
        </p>
      </div>

      <ColorDetails onChangeHandler={onChangeColorHandler} />
    </div>
  );
};

export default SpecificationPage;
