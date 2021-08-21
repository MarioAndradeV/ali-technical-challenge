import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation createUser(
    $Nombre: String!
    $Segundo_Nombre: String!
    $Apellido_Paterno: String!
    $Apellido_Materno: String!
    $Fecha_Nacimiento: String!
    $Email: String!
    $Telefono: String!
  ) {
    createUser(
      Nombre: $Nombre
      Segundo_Nombre: $Segundo_Nombre
      Apellido_Paterno: $Apellido_Paterno
      Apellido_Materno: $Apellido_Materno
      Fecha_Nacimiento: $Fecha_Nacimiento
      Email: $Email
      Telefono: $Telefono
    ) {
      id
      Nombre
      Segundo_Nombre
      Apellido_Paterno
      Apellido_Materno
      Fecha_Nacimiento
      Email
      Telefono
    }
  }
`;
