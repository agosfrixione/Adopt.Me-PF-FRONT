import axios from "axios";
import { PAGO_PAYPAL } from ".";

export default function pagospaypal() {
    return async function (dispatch) {
        console.log("probando pago")
        const result = await axios.get("http://localhost:3001/animales")
        return dispatch = ({ type: PAGO_PAYPAL, payload: result})
    }
}