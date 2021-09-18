import React from "react";
import Footer from "../../components/Footer/Footer";
import styles from "./RegistrationPage.module.css";
import emailjs from "emailjs-com";

const RegistrationPage = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm(
      "service_83nvtrx",
      "template_4ke3j09",
      e.target,
      "user_vJvkvJEJVCjuqINsfFRFz"
    );
  }
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

        <form className={styles.registrationContainer} onSubmit={sendEmail}>
          <p>
            One Apple ID is enough to access all Apple services. <br /> Already
            have an Apple ID? <a href=""> Find it here</a>
          </p>

          <div className={styles.mainData}>
            <input name="name" placeholder={"Name"}></input>
            <input name="lastname" placeholder={"Lastname"}></input>
          </div>

          <div className={styles.moreData}>
            <div textEx>Country/Region</div>
            <input name="country" placeholder={"Country"}></input>
            <input name="birthday" placeholder={"Date of Birth"}></input>
          </div>

          <section></section>

          <div className={styles.moreData}>
            <input name="email" placeholder={"name@example.com"}></input>
            <div>This is your new Apple ID</div>
            <input name="password" placeholder={"Password"}></input>
            <input placeholder={"Confirm the password"}></input>
          </div>

          <section></section>

          <div className={styles.moreData}>
            <input placeholder={"+7 (Россия)"}></input>
            <input name="phoneNumber" placeholder={"Phone number"}></input>
          </div>
          <span className={styles.trashText}>
            Enter a phone number that is always available. This number will be
            used to verify your identity when you sign in on a new device or
            browser. Messaging and data transfer fees may apply.
          </span>

          <input className={styles.sendInfo} type="submit" value="Proceed" />
        </form>
      </div>
      <Footer />
    </>
  );
};

export default RegistrationPage;
