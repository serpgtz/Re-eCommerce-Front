import React from "react";
import styles from "./About.module.css";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className={styles.aboutDiv}>
      {" "}
      <h1>El equipo detrás:</h1>
      <div className={styles.crew}>
        <label className={styles.nombre}>
          Clementino Alegre
          <Link to={"https://github.com/tinoyao"}>
            <button className={styles.aboutBtn}>Github</button>
          </Link>
          <Link>
            <button className={styles.aboutBtn}>LinkedIn</button>
          </Link>
          <img
            className={styles.avatarPhoto}
            src="https://avatars.githubusercontent.com/u/93842573?v=4"
            alt="tinoyao"
          />
        </label>
      </div>
      <div className={styles.crew}>
        <label className={styles.nombre}>
          Gastón Carreiras
          <Link to={"https://github.com/gcarreiras"}>
            <button className={styles.aboutBtn}>Github</button>
          </Link>
          <Link>
            <button className={styles.aboutBtn}>LinkedIn</button>
          </Link>
          <img
            className={styles.avatarPhoto}
            src="https://avatars.githubusercontent.com/u/86634827?v=4"
            alt="gastón"
          />
        </label>
      </div>
      <div className={styles.crew}>
        <label className={styles.nombre}>
          Sergio Partida
          <Link to={"https://github.com/serpgtz"}>
            <button className={styles.aboutBtn}>Github</button>
          </Link>
          <Link>
            <button className={styles.aboutBtn}>LinkedIn</button>
          </Link>
          <img
            className={styles.avatarPhoto}
            src="https://avatars.githubusercontent.com/u/88778765?v=4"
            alt=""
          />
        </label>
      </div>
      <div className={styles.crew}>
        <label className={styles.nombre}>
          Tomás Oyarzun
          <Link to={"https://github.com/TomasIvanOyarzun"}>
            <button className={styles.aboutBtn}>Github</button>
          </Link>
          <Link>
            <button className={styles.aboutBtn}>LinkedIn</button>
          </Link>
          <img
            className={styles.avatarPhoto}
            src="https://avatars.githubusercontent.com/u/88778765?v=4"
            alt=""
          />
        </label>
      </div>
      <div className={styles.crew}>
        <label className={styles.nombre}>
          Angel Scutari
          <Link to={"https://github.com/ChaosReminder"}>
            <button className={styles.aboutBtn}>Github</button>
          </Link>
          <Link>
            <button className={styles.aboutBtn}>LinkedIn</button>
          </Link>
          <img
            className={styles.avatarPhoto}
            src="https://avatars.githubusercontent.com/u/88778765?v=4"
            alt=""
          />
        </label>
      </div>
      <div className={styles.crew}>
        <label className={styles.nombre}>
          Ignacio Emanuel Funes
          <Link to={"https://github.com/EmanFun"}>
            <button className={styles.aboutBtn}>Github</button>
          </Link>
          <Link>
            <button className={styles.aboutBtn}>LinkedIn</button>
          </Link>
          <img
            className={styles.avatarPhoto}
            src="https://avatars.githubusercontent.com/u/88778765?v=4"
            alt=""
          />
        </label>
      </div>
      <div className={styles.crew}>
        <label className={styles.nombre}>
          Cristina Murguía
          <Link to={"https://github.com/crismurbaez"}>
            <button className={styles.aboutBtn}>Github</button>
          </Link>
          <Link>
            <button className={styles.aboutBtn}>LinkedIn</button>
          </Link>
          <img
            className={styles.avatarPhoto}
            src="https://avatars.githubusercontent.com/u/92646634?v=4"
            alt=""
          />
        </label>
      </div>
    </div>
  );
};

export default About;
