import React, { useState } from "react";

// import { useHistory } from "react-router";
//import { register } from "../../services";

import CustomInput from "./CustomInput";
// Services
// import { postPost } from "../../services";
import logo from "../../assets/logo.jpg";

export default function AddBirthdayDetail({ setBirthday, fullDay }) {
  // const [day, setDay] = useState("");
  // const [month, setMonth] = useState("");
  // const [year, setYear] = useState("");

  // const history = useHistory();
  function handleOnChange(event) {
    setBirthday({ ...fullDay, [event.target.name]: event.target.value });
  }

  const renderSpan = () => {
    if (fullDay.day && fullDay.month && fullDay.year) {
      return (
        <div className=" d-flex answerRectangle  align-items-center">
          <span className=" d-flex ">{`${fullDay.day} ${fullDay.month} ${fullDay.year}`}</span>
        </div>
      );
    } else {
      return null;
    }
  };

  return (
    <React.Fragment>
      <div className="d-flex">
        <img src={logo} className="imgRounded" />
        <form>
          <div className="d-flex align-items-center">
            <label className="lb3">¿Cuál es tu fecha de nacimiento?</label>
          </div>
          <div className="form-group col-md-6 formDiv">
            <CustomInput
              id="Día"
              name="day"
              placeholder="Día"
              value={fullDay.day}
              callback={handleOnChange}
            />
          </div>
          <div className="form-group col-md-6 formDiv">
            <CustomInput
              id="Mes"
              name="month"
              placeholder="Mes"
              value={fullDay.month}
              callback={handleOnChange}
            />
          </div>
          <div className="form-group col-md-6 formDiv">
            <CustomInput
              id="Año"
              name="year"
              placeholder="Año"
              value={fullDay.year}
              callback={handleOnChange}
            />
          </div>
        </form>
      </div>
      {renderSpan()}
    </React.Fragment>
  );
}
