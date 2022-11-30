import {FILTRA_TAMAÑO} from ".";

export default function filtradoTamaño(payload){
    return {
        type: FILTRA_TAMAÑO,
        payload
    }
}