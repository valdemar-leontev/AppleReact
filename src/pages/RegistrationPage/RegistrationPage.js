import React, {useCallback} from "react";
import Footer from "../../components/Footer/Footer";
import styles from "./RegistrationPage.module.css";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

const RegistrationPage = () => {
  const submitRegistrationAsync = useCallback(
    async () => {
      const form = document.getElementById("registration-form");
      const formData = new FormData(form);
      try {
        await axios.get("https://localhost:5001/Registration/send-invitation", {
          params: {
            name: formData.get("name"),
            lastName: formData.get("lastName"),
            country: formData.get("country"),
            birthday: formData.get("birthday"),
            email: formData.get("email"),
            password: formData.get("password"),
            confirmedPassword: formData.get("confirmPassword"),
            phoneNumber: formData.get("phoneNumber")
          }
        });
      } catch (e) {
        console.log(e);
      }

      toast("Check your email!!!");
    },
    []
  );

  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.menuContainer}>
          <h2>Apple ID</h2>

          <ul>
            <li>Account login</li>
            <li>Creating Apple ID</li>
            <li>Frequently asked questions</li>
          </ul>
        </div>

        <div className={styles.imageBlurContainer}>
          <div className={styles.text}>Creating Apple ID</div>
        </div>

        <form id="registration-form" className={styles.registrationContainer} onSubmit={submitRegistrationAsync}>
          <p>
            One Apple ID is enough to access all Apple services. <br/> Already
            have an Apple ID? <a href> Find it here</a>
          </p>

          <div className={styles.mainData}>
            <input name="name" placeholder={"Name"}/>
            <input name="lastName" placeholder={"Lastname"}/>
          </div>

          <div className={styles.moreData}>
            <div>Country/Region</div>
            <input name="country" placeholder={"Country"}/>
            <input name="birthday" placeholder={"Date of Birth"}/>
          </div>

          <section/>

          <div className={styles.moreData}>
            <input name="email" placeholder={"name@example.com"}/>
            <div>This is your new Apple ID</div>
            <input name="password" type="password" placeholder={"Password"}/>
            <input name="confirmPassword" type="password" placeholder={"Confirm the password"}/>
          </div>

          <section/>

          <div className={styles.moreData}>
            <input placeholder={"+7 (Россия)"}/>
            <input name="phoneNumber" placeholder={"Phone number"}/>
          </div>
          <span className={styles.trashText}>
            Enter a phone number that is always available. This number will be
            used to verify your identity when you sign in on a new device or
            browser. Messaging and data transfer fees may apply.
          </span>

          <input className={styles.sendInfo} type="button" value="Proceed" onClick={async (e) => {
            e.preventDefault();
            await submitRegistrationAsync();
          }}/>
          <ToastContainer/>
        </form>
      </div>
      <Footer/>
    </>
  );
};

export default RegistrationPage;
