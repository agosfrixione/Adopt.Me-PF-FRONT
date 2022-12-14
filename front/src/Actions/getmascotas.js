import axios from "axios";
import { GET_MASCOTAS } from ".";

export default function getmascotas() {
  return async function (dispatch) {
    const result = await axios.get("/animales");
    // console.log(result)
    return dispatch({ type: GET_MASCOTAS, payload: result.data });
  };
}
