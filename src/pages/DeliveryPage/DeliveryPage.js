import React, {useCallback} from 'react';
import styles from "./DeliveryPage.module.css";
import {ToastContainer} from "react-toastify";
import Footer from "../../components/Footer/Footer";
import axios from "axios";
import {useParams} from "react-router-dom";

function DeliveryPage(props) {
  const {purchaseId} = useParams();

  const postDeliveryInfoAsync = useCallback(async () => {
    const form = document.getElementById("delivery-form");
    const formData = new FormData(form);

    const response = await axios.request({
      url: `https://localhost:5001/purchase/${purchaseId}/delivery`,
      method: "POST",
      data: {
        street: formData.get("street"),
        city: formData.get("city"),
        state: formData.get("state"),
        country: formData.get("country"),
        postalCode: formData.get("postalCode"),
      }
      });
    console.log(response.status);
  }, [purchaseId]);

  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.menuContainer}>
          <h2>Checkout</h2>
          <ul>
            <li>Order details</li>
          </ul>
        </div>
        <div className={styles.imageBlurContainer}>
          <div className={styles.text}>Delivery information</div>
        </div>
        <form id="delivery-form" className={styles.registrationContainer}>
          <p>
            Where should we deliver your order?
          </p>
          <div className={styles.moreData}>
            <div>Postal code</div>
            <input name="postalCode" placeholder={"Postal code"}/>
          </div>
          <div className={styles.moreData}>
            <div>Country/Region</div>
            <input name="country" placeholder={"Country"}/>
            <input name="state" placeholder={"State"}/>
            <input name="city" placeholder={"City"}/>
            <input name="street" placeholder={"Street"}/>
          </div>
          <input type="button" className={styles.sendInfo} value="Purchase" onClick={postDeliveryInfoAsync} />
          <ToastContainer/>
        </form>
      </div>
      <Footer/>
    </>
  );
}

export default DeliveryPage;
