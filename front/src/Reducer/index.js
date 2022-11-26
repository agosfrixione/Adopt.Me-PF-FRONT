import { CREATE_ANIMAL, CREATE_USER, GET_ANIMAL_BY_ID, GET_MASCOTAS, PAGO_PAYPAL, PAGO_MERCADO_PAGO, GET_USERS, GET_GATO, GET_PERRO } from "../Actions";

const initialState = {
   animales: [],
   animalesdetail: [],
//    animalesdetailgatos: [],
   users: [],
   gatos: [],
   perros: [],
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
            return { ...state,
                animalesdetail: action.payload }

        case GET_USERS:
            return {
                ...state,
                users: action.payload
            }
        case GET_GATO:
            return{
                ...state,
                gatos: action.payload
            }

        case GET_PERRO:
            return{
                ...state,
                perros: action.payload,
            }
        // case GET_GATO_BY_ID:
        //     return{
        //         ...state,
        //         animalesdetailgatos: action.payload,
        //     }

        case PAGO_PAYPAL:
            return {...state}

        case PAGO_MERCADO_PAGO:
            return { ...state }
        
        case "signin":
            return {...state}
            
        default:
            return state;
    }
}    