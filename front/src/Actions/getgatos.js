import axios from 'axios';
import {GET_GATO} from '.';

export default function getgato() {
    return async function (dispatch) {
      const gatos = await axios.get("http://localhost:3001/animales/gato");
      console.log(gatos)
      return dispatch({ type: GET_GATO, payload: gatos.data });
    };
  }