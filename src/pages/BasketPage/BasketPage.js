import React, {useCallback, useEffect, useState} from 'react';
import axios from "axios";
import styles from "./BasketPage.module.css";
import Footer from "../../components/Footer/Footer";
import ProductItem from "./ProductItem/ProductItem";
import {Link} from "react-router-dom";

function BasketPage() {

  const [basketItemList, setBasketItemList] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("https://localhost:5001/basket/list");
        if (response.status === 200) {
          setBasketItemList(response.data);
        }
      } catch (ex) {
        console.log(ex)
      }
    })();
  }, []);

  const removeAsync = useCallback(async id => {
    try {
      await axios.delete("https://localhost:5001/basket", {
        params: {
          id: id
        }
      });
      setBasketItemList(basketItemList.filter(b => b.id !== id));
    } catch (ex) {
      console.log(ex);
    }
  }, [basketItemList]);

  const addPurchase = useCallback(async () => {
    try {
      const response = await axios.post("https://localhost:5001/Purchase",
        {
          basketItemIds: [1, 2, 3]
        },
        /*{
          params: {
            customerId: 1
          }
        }*/);
      console.log(response);
    } catch (ex) {
      console.log(ex)
    }
  }, []);


  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.container}>
          <div className={styles.text}>
            <span className={styles.title}>Общая стоимость продуктов <br/> в корзине:&nbsp;
              {basketItemList != null ? basketItemList.map(b => b.price).reduce((s, v) => s + v, 0) : 0.0} $
            </span>
            <span>Доставка и возврат всех заказов выполняются бесплатно.</span>
          </div>

          {basketItemList != null ? basketItemList.map((b) => {
            return <ProductItem key={b.id} basketItem={b} onRemoveCallback={removeAsync}/>
          }) : <div>Basket is empty</div>}

          <Link to="/purchase">
            <input className={styles.toPurchase} type="button" value="Proceed" onClick={addPurchase}/>
          </Link>

        </div>
      </div>
      <Footer/>
    </>
  );
}

export default BasketPage;
