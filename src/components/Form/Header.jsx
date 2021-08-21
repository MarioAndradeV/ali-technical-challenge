import React, { useState } from "react";

// import { useHistory } from "react-router";
// import { register } from "../../services";

import CustomInput from "./CustomInput";
// Services
// import { postPost } from "../../services";
import logo2 from "../../assets/logo2.png";

export default function AddHeader() {
  return (
    <div className="headerForm">
      <div className="fixhei d-flex justify-content-between">
        <h3 className="titleAli">Ali Formulario</h3>
        <img className="img-fluid logo" src={logo2} alt="logo-icon" />
      </div>
      <h4 className="titleAli2">En menos de 5 minutos</h4>
    </div>
  );
}
