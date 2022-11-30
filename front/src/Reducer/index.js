
import { 
    CREATE_ANIMAL,
    CREATE_USER,
    GET_ANIMAL_BY_ID,
    GET_MASCOTAS,
    PAGO_PAYPAL,
    PAGO_MERCADO_PAGO,
    GET_USERS, GET_GATO,
    GET_PERRO, GET_DOG_NAME,
    ORDEN_PERRO, ORDEN_GATO,
    GET_CAT_NAME,
    GET_DOG_LOCALIDAD,
    GET_CAT_LOCALIDAD,
    GET_TAMAÑO_PERDIDOS, 
    GET_ANIMALES_PERDIDOS,
    GET_TAMAÑO_FILTRO, FILTRA_TAMAÑO, GET_DOG_TAMAÑO,
    GET_DETAIL_MASCOTA_PERDIDA} from "../Actions";


const initialState = {
   animales: [],
   animalesPerdidos: [],
   animalesPerdidosDetail: [],
   animalesdetail: [],
   users: [],
   gatos: [],
   perros: [],
   perrosFiltrados: [],
   tamañoFiltrado: [],
   tamañosDog: [],
   filtroPerdidos: [],
   animalesdetail: [],

}


export default function rootReducer(state = initialState, action){
    switch(action.type){

    case GET_MASCOTAS:     
        if(action.payload) { 
            return {       
                ...state,   
                animales: action.payload,
                tamañoFiltrado: action.payload
             
            }              
        } else { 
            return { ...state, animales:[] } }
            
    case CREATE_USER:
      return { ...state };

    case CREATE_ANIMAL:
      return { ...state };
    
    case GET_ANIMAL_BY_ID:
      return { ...state, animalesdetail: action.payload };

    case GET_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case GET_GATO:
      return {
        ...state,
        gatos: action.payload,
      };

    case GET_PERRO:
      return {
        ...state,
        perros: action.payload,
      };
    case GET_DOG_LOCALIDAD:
      return {
        ...state,
        perros: action.payload,
      };
    case GET_CAT_LOCALIDAD:
      return {
        ...state,
        gatos: action.payload,
      };
    // case GET_GATO_BY_ID:
    //     return{
    //         ...state,
    //         animalesdetailgatos: action.payload,
    //     }  GET_DOG_NAME
    case GET_DOG_NAME:
      return {
        ...state,
        perros: action.payload,
      };
    case GET_CAT_NAME:
      return {
        ...state,
        gatos: action.payload,
      };
      
      
    case ORDEN_PERRO:
      let perrosOrdenados =
        action.payload === "A-Z"
          ? state.perros.sort((a, b) => {
              if (a.nombre.toLowerCase() > b.nombre.toLowerCase()) return 1;
              if (a.nombre.toLowerCase() < b.nombre.toLowerCase()) return -1;
              return 0;
            })
          : state.perros.sort((a, b) => {
              if (a.nombre.toLowerCase() > b.nombre.toLowerCase()) return -1;
              if (a.nombre.toLowerCase() < b.nombre.toLowerCase()) return 1;
              return 0;
            });
      return {
        ...state,
        perros: perrosOrdenados,
      };
      
      
    case ORDEN_GATO:
      let gatosOrdenados =
        action.payload === "A-Z"
          ? state.gatos.sort((a, b) => {
              if (a.nombre.toLowerCase() > b.nombre.toLowerCase()) return 1;
              if (a.nombre.toLowerCase() < b.nombre.toLowerCase()) return -1;
              return 0;
            })
          : state.gatos.sort((a, b) => {
              if (a.nombre.toLowerCase() > b.nombre.toLowerCase()) return -1;
              if (a.nombre.toLowerCase() < b.nombre.toLowerCase()) return 1;
              return 0;
            });
      return {
        ...state,
        gatos: gatosOrdenados,
      };


    case PAGO_PAYPAL:
      return { ...state };

    case PAGO_MERCADO_PAGO:
      return { ...state };

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
        case GET_TAMAÑO_FILTRO:
            
            return{
                ...state,
                filtroPerdidos: action.payload,
            }
        case GET_DETAIL_MASCOTA_PERDIDA:
            return{
                ...state,
                animalesPerdidosDetail: action.payload,
            }               
        
        case GET_TAMAÑO_PERDIDOS:
            
            return{
                ...state,
                filtroPerdidos: action.payload,
            }
        case GET_ANIMALES_PERDIDOS:
            return{
                ...state,
                animalesPerdidos: action.payload,
            }

        case GET_PERRO:
            return{
                ...state,
                perros: action.payload,
            }
        case GET_DOG_LOCALIDAD:
            return {
             ...state,
             perros: action.payload
             }
        case GET_CAT_LOCALIDAD:
            return {
             ...state,
             gatos: action.payload
             }

             case GET_DOG_TAMAÑO:
                let dogTam = action.payload 
                return{ ...state, tamañosDog: dogTam }
        
             case FILTRA_TAMAÑO:
                const allTamDog = state.tamañoFiltrado
                console.log("tamañoFiltrado:", allTamDog)
                const tamañofilter = action.payload === ("all") ? allTamDog : allTamDog.filter(p => p.tamañosDog.includes(action.payload))
            
                if (tamañofilter.length === 0) {
                    alert(`No hay perros de este tamaño ${action.payload}`)
                    return state
                } else { return { ...state, animales: tamañofilter } }

        case GET_DOG_NAME:
            return {
                ...state,
                perros: action.payload
            }
            case GET_CAT_NAME:
            return {
                ...state,
                gatos: action.payload
            }
            
            
        case ORDEN_PERRO:
                let perrosOrdenados= action.payload === "A-Z" ? state.perros.sort((a, b) => {
                    if(a.nombre.toLowerCase() > b.nombre.toLowerCase()) return 1;
                    if(a.nombre.toLowerCase() < b.nombre.toLowerCase()) return -1;
                        return 0;
                     }): state.perros.sort((a, b) => {
                    if(a.nombre.toLowerCase() > b.nombre.toLowerCase()) return -1;
                    if(a.nombre.toLowerCase() < b.nombre.toLowerCase()) return 1;
                        return 0;
                     });
                return {
                   ...state,
                   perros: perrosOrdenados,
                      } 
                      
                      
         case ORDEN_GATO:
                        let gatosOrdenados = action.payload === "A-Z" ? state.gatos.sort((a, b) => {
                            if(a.nombre.toLowerCase() > b.nombre.toLowerCase()) return 1;
                            if(a.nombre.toLowerCase() < b.nombre.toLowerCase()) return -1;
                                return 0;
                             }): state.gatos.sort((a, b) => {
                            if(a.nombre.toLowerCase() > b.nombre.toLowerCase()) return -1;
                            if(a.nombre.toLowerCase() < b.nombre.toLowerCase()) return 1;
                                return 0;
                             });
                        return {
                           ...state,
                           gatos: gatosOrdenados,
                              }


    case "signin":
      return { ...state };

    case "getDetalleUsuario":
      return {
        ...state,
        detalleUsuario: action.payload,
      };

    default:
      return state;
  }
}
