import axios from "axios";
import { PAGO_STRIPES } from ".";

export default function pagosStripes() {
    return async function (dispatch) {
        const result = await axios.post("/payment")
        return dispatch = ({ type: PAGO_STRIPES, payload: result})
    }
}