import {GET_ANIMAL_BY_ID} from '.'
import axios from 'axios'

export default function getmascotabyid(id) {
    return async function (dispatch) {
        try { const result = await axios.get(`http://localhost:3001/animales/${id}`); 
            return dispatch({ type: GET_ANIMAL_BY_ID, payload: result.data }) 
        } catch (error) { console.log(error) }                                                                                                         
    }
}