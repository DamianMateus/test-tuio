import React from "react";

import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

import classes from "./Users.module.scss";
import { BsSearch } from "react-icons/bs";

const Users = () => {
  return (
    <>
      <div className={classes.users}>
        <div className={classes.users__content}>
          <div className={classes.users__content__inputGroup}>
            <input
              className="form-control"
              type="text"
              placeholder="Buscar por nombre"
            />
            <BsSearch />
          </div>
        </div>
      </div>
    </>
  );
};

export default Users;
