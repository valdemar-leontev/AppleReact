import React, {useEffect, useState} from 'react';
import styles from './PurchasePage.module.css';
import Footer from "../../components/Footer/Footer";
import PurchaseHeader from "./PurchaseHeader/PurchaseHeader";
import PurchaseItemElement from "./PurchaseItem/PurchaseItemElement";
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import Button from "../../components/UI/Button";

function PurchasePage() {
  const {purchaseId} = useParams();
  const [productItems, setProductItems] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.request({
          url: `https://localhost:5001/purchase/list?purchaseId=${purchaseId}`,
          method: "GET",
        });
        if (response.status === 200) {
          setProductItems(response.data);
        }
      } catch (ex) {
        console.log(ex);
      }
    })();
  }, [purchaseId]);

  return (
    <>
      <div className={styles.mainContainer}>
        <PurchaseHeader/>
        {productItems != null
          ?
          <>
            {productItems.map(p => <PurchaseItemElement productItem={p}/>)}

            <Link to={`/delivery/${purchaseId}`}>
              <Button>Proceed</Button>
            </Link>

          </>
          : null}
      </div>

      <Footer/>
    </>
  );
}

export default PurchasePage;
