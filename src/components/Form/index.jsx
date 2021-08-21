import React, { useState, Fragment } from "react";

import AddBirthdayDetailForm from "./BirthdayDetail";
import AddContactDetailForm from "./ContactDetail";
import AddNameDetailForm from "./NameDetail";
import AddHeader from "./Header";
// import AddButton from "./Button";

import "./style.scss";

export default function Form() {
  const [addNameDetail, setAddNameDetail] = useState({});
  const [addBirthdayDetail, setAddBirthdayDetail] = useState({});
  const [addContactDetail, setAddContactDetail] = useState({});

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const newUser = { addNameDetail, addBirthdayDetail, addContactDetail };
      alert(
        `\nDATOS ENVIADOS\n\nNombre: ${addNameDetail.firstName} ${addNameDetail.paternalSurname} ${addNameDetail.maternalSurname}\nFecha de nacimiento: ${addBirthdayDetail.day} ${addBirthdayDetail.month} ${addBirthdayDetail.year}\nCorreo electrónico: ${addContactDetail.email}\nTeléfono celular: ${addContactDetail.phone} 
        `
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Fragment>
      <div className="containerScroll d-flex flex-column fixed-top ">
        <AddHeader />
        <div className="containerForm ">
          <AddNameDetailForm
            setName={setAddNameDetail}
            fullName={addNameDetail}
          />
          <AddBirthdayDetailForm
            setBirthday={setAddBirthdayDetail}
            fullDay={addBirthdayDetail}
          />
          <AddContactDetailForm
            setContactDetail={setAddContactDetail}
            fullContact={addContactDetail}
          />
          <button
            className="btn btn-lg btn-block mt-4 buttonStyle"
            type="submit"
            onClick={handleSubmit}
          >
            Iniciar
          </button>

          {/* <div className="  finalRectangle  align-items-center">
            <span className=" d-flex ">{`Nombre: ${addNameDetail.firstName} ${addNameDetail.paternalSurname} ${addNameDetail.maternalSurname}`}</span>
            <span className=" d-flex ">{`Fecha de nacimiento: ${addBirthdayDetail.day} ${addBirthdayDetail.month} ${addBirthdayDetail.year} `}</span>
            <span className=" d-flex ">{`Correo electrónico: ${addContactDetail.email}`}</span>
            <span className=" d-flex ">{`Teléfono celular: ${addContactDetail.phone} `}</span>
          </div> */}
        </div>
      </div>
    </Fragment>
  );
}
