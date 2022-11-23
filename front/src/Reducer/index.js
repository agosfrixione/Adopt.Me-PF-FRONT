import { GET_MASCOTAS } from "../Actions";

const initialState = {
   animales: []
}

export default function rootReducer(state = initialState, action){
    switch(action.type){

        case GET_MASCOTAS:     
        if(action.payload) { 
            return {       
                ...state,   
                animales: action.payload
            }              
        } else { 
            return { ...state, animales:[] } }

        default:
            return state;
    }
}    