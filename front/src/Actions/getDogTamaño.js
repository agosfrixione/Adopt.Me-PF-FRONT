import { GET_DOG_TAMAÑO } from ".";
import axios from "axios";

export default function getDogstamaño(tamaño) {
  return async function (dispatch) {
    console.log("estoy en tamaños action")
    const perros = await axios.get(`http://localhost:3001/animales/tamaño/?tamaño=${tamaño}`);
    console.log(perros)
    return dispatch({ type: GET_DOG_TAMAÑO, payload: perros.data });
  };
}