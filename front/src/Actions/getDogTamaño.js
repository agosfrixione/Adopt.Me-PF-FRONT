import { GET_DOG_tamaño } from ".";
import axios from "axios";

export default function getDogstamaño(tamaño) {
  return async function (dispatch) {
    const perros = await axios.get(`http://localhost:3001/animales/tamaño/?tamaño=${tamaño}`);
    console.log(perros)
    return dispatch({ type: GET_DOG_tamaño, payload: perros.data });
  };
}