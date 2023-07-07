import React, {useCallback, useEffect, useState} from 'react';
import axios from "axios";
import styles from "./BasketPage.module.css";
import Footer from "../../components/Footer/Footer";
import ProductItem from "./ProductItem/ProductItem";
import {useHistory} from "react-router-dom";

function BasketPage() {
  const history = useHistory();
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

  const addPurchaseAsync = useCallback(async () => {
    try {
      await axios.request({
        url: "https://localhost:5001/Purchase/all-unordered/1",
        method: "DELETE",
        headers: {
          Accept: "application/json"
        }
      })

      const response = await axios.request({
          url: "https://localhost:5001/Purchase",
          method: "POST",
          data: {
            customerId: 1
          },
          headers: {
            Accept: "application/json"
          }
        });

      return response.data;
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

          <input className={styles.toPurchase} type="button" value="Proceed" onClick={async () => {
            const { id } = await addPurchaseAsync();
            history.push(`/purchase/${id}`);
          }}/>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default BasketPage;
