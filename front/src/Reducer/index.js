import { CREATE_ANIMAL, CREATE_USER, GET_ANIMAL_BY_ID, GET_MASCOTAS } from "../Actions";

const initialState = {
   animales: [],
   animalesdetail: []
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

        case CREATE_USER:
            return {...state}

        case CREATE_ANIMAL:
            return {...state}

        case GET_ANIMAL_BY_ID:  
            return { ...state, animalesdetail: action.payload }
            
        default:
            return state;
    }
}    