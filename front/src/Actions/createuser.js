import axios from 'axios';
import { CREATE_USER } from '.';

export default function createuser(payload) {
    return async function (dispatch){ const result = await axios.post("http://localhost:3001/usuarios", payload); 
        return dispatch({ type: CREATE_USER, payload: result.data })                                                                                                   
    }
}