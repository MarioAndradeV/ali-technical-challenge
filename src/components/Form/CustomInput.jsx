import React from "react";

export default function CustomInput(props) {
  return (
    <React.Fragment>
      <input
        type={props.type ? props.type : "text"}
        className="form-control colorInput"
        id={props.id}
        placeholder={props.placeholder}
        name={props.name}
        value={props.value}
        onChange={props.callback}
      />
    </React.Fragment>
  );
}
