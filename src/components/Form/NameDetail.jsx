import React, { useState } from "react";

// import { useHistory } from "react-router";
// import { register } from "../../services";

import CustomInput from "./CustomInput";
// Services
// import { postPost } from "../../services";
import logo from "../../assets/logo.jpg";

export default function AddNameDetail({ setName, fullName }) {
  // const [firstName, setFirstName] = useState("");
  // const [secondName, setSecondName] = useState("");
  // const [paternalSurname, setPaternalSurname] = useState("");
  // const [maternalSurname, setMaternalSurname] = useState("");

  // const history = useHistory();

  function handleOnChange(event) {
    setName({ ...fullName, [event.target.name]: event.target.value });
  }
  const renderSpan = () => {
    if (
      fullName.firstName &&
      fullName.paternalSurname &&
      fullName.maternalSurname &&
      !fullName.secondName
    ) {
      return (
        <div className=" d-flex answerRectangle  align-items-center">
          <span className=" d-flex ">{`${fullName.firstName} ${fullName.paternalSurname} ${fullName.maternalSurname}`}</span>
        </div>
      );
    } else if (
      fullName.firstName &&
      fullName.secondName &&
      fullName.paternalSurname &&
      fullName.maternalSurname
    ) {
      return (
        <div className=" d-flex answerRectangle  align-items-center">
          <span className=" d-flex ">{`${fullName.firstName} ${fullName.secondName} ${fullName.paternalSurname} ${fullName.maternalSurname}`}</span>
        </div>
      );
    } else {
      return null;
    }
  };

  return (
    <React.Fragment>
      <div className="d-flex ">
        <img src={logo} className="imgRounded" />
        <form>
          <div className="d-flex align-items-center">
            <label className="lb3">¿Cuál es tu nombre?</label>
          </div>
          <div className="form-group col-md-6 formDiv">
            <CustomInput
              id="nombre"
              name="firstName"
              placeholder="Nombre"
              value={fullName.firstName}
              callback={handleOnChange}
            />
          </div>
          <div className="form-group col-md-6 formDiv">
            <CustomInput
              id="segundo nombre"
              name="secondName"
              placeholder="Segundo nombre"
              value={fullName.secondName}
              callback={handleOnChange}
            />
          </div>
          <div className="form-group col-md-6 formDiv">
            <CustomInput
              id="Apellido paterno"
              name="paternalSurname"
              placeholder="Apellido paterno"
              value={fullName.paternalSurname}
              callback={handleOnChange}
            />
          </div>
          <div className="form-group formDiv">
            <CustomInput
              id="Apellido materno"
              name="maternalSurname"
              placeholder="Apellido materno"
              value={fullName.maternalSurname}
              callback={handleOnChange}
            />
          </div>
        </form>
      </div>
      {renderSpan()}
    </React.Fragment>
  );
}
