
import { GET_TSHIRTDATA } from "./action";

const initState = {

    tshirt : []
}

export const TshirtReducer = (store = initState , {type , payload} ) => {
    console.log("reducer", payload)

    switch(type){

        case GET_TSHIRTDATA:
        return {...store , tshirt : [...payload]}

        default :
        return store
    }
}