import React, { useEffect, useState } from "react";

import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

import classes from "./Navbar.module.scss";
import { Link, useNavigate } from "react-router-dom";
import logo from "./../../assets/logo.png";

const Header = () => {
  const history = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [size, setSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (size.width > 768 && menuOpen) {
      setMenuOpen(false);
    }
  }, [size.width, menuOpen]);

  const menuToggleHandler = () => {
    setMenuOpen((p) => !p);
  };

  const ClickHandler = () => {
    menuToggleHandler();
    history.push("/");
  };

  return (
    <header className={classes.header}>
      <div className={classes.header__content}>
        
        <div className={classes.header__content__toggle}>
          {!menuOpen ? (
            <AiOutlineMenu onClick={menuToggleHandler} />
          ) : (
            <AiOutlineClose onClick={menuToggleHandler} />
          )}
        </div>
        <img
          src={logo}
          alt="TuioLogo"
          className={classes.header__content__logo}
        ></img>
        <nav
          className={`${classes.header__content__nav} ${
            menuOpen && size.width < 768 ? classes.isMenu : ""
          }`}
        >
          <ul>
            <li>
              <Link to="/" onClick={menuToggleHandler}>
                Sobre nosotros
              </Link>
            </li>
            <li>
              <Link to="/" onClick={menuToggleHandler}>
                Proveedores
              </Link>
            </li>
            <li>
              <Link to="/" onClick={menuToggleHandler}>
                Contactenos
              </Link>
            </li>
            <li>
              <Link to="/" onClick={menuToggleHandler}>
                Cobertura
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
