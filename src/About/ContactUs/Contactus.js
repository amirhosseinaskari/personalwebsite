import React from "react";
import styles from "./styles.module.css";
import linered from "../../Services/content/img/Line.svg";
import map from "./map.svg";
import adresse from "./adress.svg";
import mail from "./mail.svg";
import tele from "./tele.svg";

function Contactus() {
  return (
    <div>
      <section className={styles.section}>
        <article>
          <h1 className={styles.heading1}>
            Contact Us <br />{" "}
            <img src={linered} alt="line red" className={styles.red} />
          </h1>

          <div className={styles.article}>
            <img src={map} alt="map" className={styles.map} />
            <div className={styles.infos}>
              <ul>
                <li className={styles.list}>
                  {" "}
                  <img src={adresse} alt="address" className={styles.icon} />
                  <div className={styles.info}>
                    <h3 className={styles.heading3}>Alamat</h3>
                    <p>
                     Iran, Tehran
                    </p>
                  </div>
                </li>
                <li className={styles.list}>
                  {" "}
                  <img src={mail} alt="email" className={styles.icon} />
                  <div className={styles.info}>
                    <h3 className={styles.heading3}>Email</h3>
                    <p>amiraskari.it@gmail.com</p>
                  </div>
                </li>
                <li className={styles.list}>
                  {" "}
                  <img src={tele} alt="phone" className={styles.icon} />
                  <div className={styles.info}>
                    <h3 className={styles.heading3}>phone</h3>
                    <p>(+98) 9124690677</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
}

export default Contactus;
