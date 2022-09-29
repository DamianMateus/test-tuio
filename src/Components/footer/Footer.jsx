import React from "react";
import classes from "./Footer.module.scss";
import { Link, useNavigate } from "react-router-dom";
import twitter from "./../../assets/icon-twitter.png";
import facebook from "./../../assets/icon-facebook.png";
import logo from "./../../assets/logo.png";

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={classes.footer__content}>
        <img
          src={logo}
          alt="TuioLogo"
          className={classes.footer__content__logo}
        ></img>
        <div className={classes.footer__content__socialMedia}>
          <img
            src={facebook}
            alt="facebookLogo"
            className={classes.footer__content__socialMedia__facebook}
          ></img>
          <img
            src={twitter}
            alt="twitterLogo"
            className={classes.footer__content__socialMedia__twitter}
          ></img>
        </div>
        <div className={classes.footer__content__list}>
          <ul>
            <li>
              <Link to="/">Politica de tratamiento de datos</Link>
            </li>
            <li>
              <Link to="/">Terminos y condiciones</Link>
            </li>
          </ul>
        </div>
        {/* <ul>
          <li>
            <Link to="/">Politica de tratamiento de datos</Link>
          </li>
          <li>
            <Link to="/">Terminos y condiciones</Link>
          </li>
        </ul> */}
      </div>
    </footer>
  );
}
