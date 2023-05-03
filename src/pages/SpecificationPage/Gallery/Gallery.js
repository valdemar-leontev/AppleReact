import React, {useCallback, useState} from "react";
import styles from "./Gallery.module.css";
import ColorDetails from "../ColorDetails/ColorDetails";
import axios from "axios";
import {useHistory} from "react-router-dom";
import Button from "../../../components/UI/Button";

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
  const history = useHistory();

  const [colorId, setColorId] = useState(1);

  const onChangeColorHandler = useCallback((id) => {
    setColorId(id);
  }, []);

  const addBasketItemAsync = useCallback(async (productId, customerId) => {
    try {
      const response = await axios.post("https://localhost:5001/basket/",
        {
          productId: productId,
          customerId: customerId
        });

      if (response.status === 200) {
        history.push("/customer-basket");
      }
    } catch (ex) {
      console.log(ex);
    }
  }, [history])

  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>

        <div className={styles.textContainer}>
          <span className={styles.text}>
          Five colors. <br/> Anything but <br/> monotone.
        </span>

          <Button
            onClick={async () => {
              await addBasketItemAsync(1, 1)
            }}>Buy
          </Button>
        </div>


        <div
          className={styles.image}
          style={{
            backgroundImage: `url(${images.find((i) => i.id === colorId).url})`,
          }}
        />

        <p className={styles.colorItemText}>
          {images.find((i) => i.id === colorId).title}
        </p>
      </div>

      <ColorDetails onChangeHandler={onChangeColorHandler}/>
    </div>
  );
};

export default SpecificationPage;
