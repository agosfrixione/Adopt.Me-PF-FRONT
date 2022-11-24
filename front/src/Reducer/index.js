import { CREATE_ANIMAL, CREATE_USER, GET_ANIMAL_BY_ID, GET_MASCOTAS, GET_USERS, PAGO_PAYPAL } from "../Actions";

const initialState = {
   animales: [],
   animalesdetail: [],
   users: []
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

        case GET_USERS:
            return {
                ...state,
                users: action.payload
            }

        case PAGO_PAYPAL:
            return {...state}
            
        default:
            return state;
    }
}    