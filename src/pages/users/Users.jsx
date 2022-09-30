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
  const [searchTerm, setSearchTerm] = useState("");
  const [term, setTerm] = useState("");

  useEffect(() => {
    Axios.get("https://reqres.in/api/users").then((response) => {
      setUser(response.data.data);
    });
  }, []);

  const results = !searchTerm ? user : user.filter((data) => data.first_name.toLowerCase().includes(searchTerm.toLocaleLowerCase()))

  const renderList = results.map((value, index) => {
    return <UserCard value={value} key={index} />;
  });

  const changeHandler = (e) => {
    setSearchTerm(e.target.value)
  }

  return (
    <>
      <div className={classes.users}>
        <div className={classes.users__content}>
          <div className={classes.users__content__inputGroup}>
            <input
              className="form-control"
              type="text"
              placeholder="Buscar por nombre"
              value={searchTerm}
              onChange={changeHandler}
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
