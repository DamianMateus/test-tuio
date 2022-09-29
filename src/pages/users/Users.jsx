import React, { useState, useEffect } from "react";
import Axios from "axios";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import UserCard from "../../Components/Card/UserCard";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import classes from "./Users.module.scss";
import { BsSearch } from "react-icons/bs";

const Users = () => {
  const [user, setUser] = useState([]);
  const [searchTerm, setSearchTerm] = useState([]);

  useEffect(() => {
    Axios.get("https://reqres.in/api/users").then((response) => {
      setUser(response.data.data);
    });
  }, []);

  const renderList = user.map((value, index) => {
    return <UserCard value={value} key={index} />;
  });

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
        <Row>
          <Col className={classes.users__grid}>{renderList}</Col>
        </Row>
      </div>
    </>
  );
};

export default Users;
