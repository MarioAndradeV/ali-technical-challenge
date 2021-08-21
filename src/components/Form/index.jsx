import React, { useState, Fragment } from "react";
import { CREATE_USER } from "../../graphql/Mutation";
import { useMutation } from "@apollo/client";

import AddBirthdayDetailForm from "./BirthdayDetail";
import AddContactDetailForm from "./ContactDetail";
import AddNameDetailForm from "./NameDetail";
import AddHeader from "./Header";
import "./style.scss";

export default function Form() {
  const [addNameDetail, setAddNameDetail] = useState({});
  const [addBirthdayDetail, setAddBirthdayDetail] = useState({});
  const [addContactDetail, setAddContactDetail] = useState({});
  const [createUser, { error }] = useMutation(CREATE_USER);

  const date = `${addBirthdayDetail.day} ${addBirthdayDetail.month} ${addBirthdayDetail.year} `;
  console.log(date);

  const handleSubmit = async (event) => {
    alert(
      `\nDATOS ENVIADOS\n\nNombre: ${addNameDetail.firstName} ${addNameDetail.paternalSurname} ${addNameDetail.maternalSurname}\nFecha de nacimiento: ${addBirthdayDetail.day} ${addBirthdayDetail.month} ${addBirthdayDetail.year}\nCorreo electrónico: ${addContactDetail.email}\nTeléfono celular: ${addContactDetail.phone}`
    );
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
            onClick={() => {
              createUser({
                variables: {
                  Nombre: addNameDetail.firstName,
                  Segundo_Nombre: addNameDetail.secondName,
                  Apellido_Paterno: addNameDetail.paternalSurname,
                  Apellido_Materno: addNameDetail.maternalSurname,
                  Fecha_Nacimiento: date,
                  Email: addContactDetail.email,
                  Telefono: addContactDetail.phone,
                },
              });
              handleSubmit();
            }}
          >
            Iniciar
          </button>
        </div>
      </div>
    </Fragment>
  );
}
