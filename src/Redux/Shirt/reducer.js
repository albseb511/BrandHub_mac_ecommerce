
import { GET_SHIRTDATA } from "./action";

const initState = {

    shirt : []
}

export const ShirtReducer = (store = initState , {type , payload} ) => {

    switch(type){

        case GET_SHIRTDATA:
        return {...store , shirt : [...payload]}

        default :
        return store
    }
}