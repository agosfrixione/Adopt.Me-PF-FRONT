import axios from "axios";
import { GET_MASCOTAS } from ".";

export default function getmascotas() {
    return async function (dispatch) {
        try { 
            const result = await axios.get("/");
        console.log("viendo que trae desde el back", result)
    return dispatch({ 
        type: GET_MASCOTAS, payload: result.data
    })
} catch (error) { 
    console.log("Error obteniendo mascotas", error)
} 
    }
}