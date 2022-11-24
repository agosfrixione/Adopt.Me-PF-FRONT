import {GET_ANIMAL_BY_ID} from '.';
import axios from 'axios';

export default function getmascotabyid(_id) {
    return async function (dispatch) {
        console.log(_id)
        const result = await axios.get(`http://localhost:3001/animales/${_id}`); 
            return dispatch({ type: GET_ANIMAL_BY_ID, payload: result.data })                                                                                                      
    }
}