import React from "react";

import CustomInput from "./CustomInput";
import logo from "../../assets/logo.jpg";

export default function AddContactDetail({ setContactDetail, fullContact }) {
  function handleOnChange(event) {
    setContactDetail({
      ...fullContact,
      [event.target.name]: event.target.value,
    });
  }
  const renderSpan = () => {
    if (fullContact.email && fullContact.phone) {
      return (
        <React.Fragment>
          <div className="  answerRectangle  align-items-center">
            <span className=" d-flex ">{`Correo electrónico: ${fullContact.email} `}</span>
            <span className=" d-flex ">{`Teléfono celular: ${fullContact.phone}`}</span>
          </div>
          <div className="verifyRectangle  align-items-center ">
            <span> Si tus datos son correctos por favor continuemos.</span>
          </div>
        </React.Fragment>
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
            <label className="lb3">Datos de contacto</label>
          </div>
          <div className="form-group col-md-6 formDiv">
            <CustomInput
              id="email"
              name="email"
              placeholder="Correo electrónico"
              value={fullContact.email}
              callback={handleOnChange}
            />
          </div>
          <div className="form-group col-md-6 formDiv">
            <CustomInput
              id="phone"
              name="phone"
              placeholder="Teléfono celular"
              value={fullContact.phone}
              callback={handleOnChange}
            />
          </div>
        </form>
      </div>
      {renderSpan()}
    </React.Fragment>
  );
}
